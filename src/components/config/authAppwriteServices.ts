import { Account, Client, ID } from "appwrite";
import config from "./config";
import { createAccountProps, loginProps } from "@/types/typs";
import Cookies from "js-cookie";


export class AuthService {
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
            const user = await this.account.createEmailPasswordSession(
                email,
                password
            );
            return user;
        } catch (error: any) {
            console.error("Login error:", error);
            throw error;
        }
    };

    async getCurrentUser() {
        try {
            const userAccount = await this.account.get();
            const response = {
                success: true,
                user: userAccount,
            }
            return response;
        } catch (error) {
            console.error(error);
        }
    };

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error(error);
        }
    };

    async deleteAccount(userId: string) {
        try {
            await this.account.deleteIdentity(userId);
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


const authAppwriteServices = new AuthService();

export default authAppwriteServices;