import { Account, Client, ID } from "appwrite";
import config from "./config";
import { createAccountProps, loginProps } from "@/types/typs";
import Cookies from "js-cookie";


export class AuthAppwriteService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteEndpoint)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    };

    async createAccount({ name, email, password }: createAccountProps) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if (userAccount && userAccount.$id) {
                Cookies.set("userId", userAccount.$id, { expires: 2 });
                Cookies.set("providerUid", userAccount.email);
                return {
                    success: true,
                    message: "User account created successfully",
                    user: userAccount,
                };
            } else {
                return {
                    success: false,
                    message: "Account creation failed.",
                };
            }
        } catch (error: any) {
            return {
                success: false,
                message: error?.message || "Unknown error occurred during account creation.",
                error,
            };
        }
    };

    async login(email: string, password: string) {
        try {
            await this.account.createEmailPasswordSession(email, password);
            const user = await this.account.get();
            return {
                success: true,
                message: "User logged in successfully",
                user,
            };
        } catch (error: any) {
            return {
                success: false,
                message: error?.message || "Login failed.",
                error,
            };
        }
    }

    async getCurrentUser() {
        try {
            const userAccount = await this.account.get();
            if (!userAccount) {
                console.error("User account not found");
                return null;
            }
            const response = {
                success: true,
                user: userAccount,
            }
            return response;
        } catch (error: any) {
            if (error.code === 401) {
                return {
                    success: false,
                    user: null,
                    message: "Unauthorized. Please login again.",
                };
            }
            return {
                success: false,
                message: "Failed to fetch user info.",
                error,
            };
        }
    };

    async logout() {
        try {
            await this.account.deleteSession("current");
            Cookies.remove("userId");
            Cookies.remove("providerUid");
            return {
                success: true,
                message: "Logged out successfully.",
            };
        } catch (error: any) {
            return {
                success: false,
                message: "Logout failed.",
                error,
            };
        }
    }

    async deleteUser(userId: string) {
        try {
            const response = await this.account.deleteIdentity(userId);
            return {
                success: true,
                response,
            };
        } catch (error) {
            return {
                success: false,
                message: "Failed to delete user.",
                error,
            };
        }
    }

    async updateEmail(email: string) {
        try {
            const password = email + "newUser123"; // Should be secured in real apps
            const response = await this.account.updateEmail(email, password);
            return {
                success: true,
                response,
            };
        } catch (error: any) {
            return {
                success: false,
                message: "Email update failed.",
                error,
            };
        }
    }
};
