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
                return userAccount;
            } else {
                console.error("User account creation failed:", userAccount);
                return null;
            }

        } catch (error: any) {
            console.error("Error details:", {
                message: error.message,
                stack: error.stack,
                endpoint: config.appwriteEndpoint,
                projectId: config.appwriteProjectId
            });
            throw error;
        }
    };

    async login(email: string, password: string) {
        try {
            const existingUser = await this.account.get();
            if (existingUser && existingUser.$id) {
                // Already logged in
                return existingUser;
            }
            await this.account.createEmailPasswordSession(email, password);
            const user = await this.account.get();
            console.log("🚀 ~ AuthAppwriteService ~ login ~ user:", user)
            return user;
        } catch (error: any) {
            console.error("Login error:", error);
            throw error;
        }
    };

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
                };
            }
        }
    };

    async logout() {
        try {
            const response = await this.account.deleteSessions();
            return response;
        } catch (error) {
            console.error(error);
        }
    };

    async deleteUser(userId: string) {
        try {
            const response = await this.account.deleteIdentity(userId);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    async updateEmail(email: string) {
        try {
            const password = email + "newUser123";
            const response = await this.account.updateEmail(email, password);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
};
