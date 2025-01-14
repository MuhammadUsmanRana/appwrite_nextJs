import { Account, Client, ID } from "appwrite";
import config from "./config";
import { createAccountProps, loginProps } from "@/types/typs";


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
            const userAccount = await this.account.create(ID.unique(), name, email, password);
            if (userAccount) {
                return userAccount;
            } else {
                throw new Error('User account not created');
            }
        } catch (error) {
            console.error(error);
        }
    };

    async login({ email, password }: loginProps) {
        try {
            const userAccount = await this.account.createEmailPasswordSession(email, password);
            if (userAccount) {
                return userAccount;
            } else {
                throw new Error('User account not created');
            }
        } catch (error) {
            console.error(error);
        }
    };

    async getCurrentUser() {
        try {
            const userAccount = await this.account.get();
            if (userAccount) {
                return userAccount;
            } else {
                throw new Error('User account not created');
            }
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
};


const authAppwriteServices = new AuthService();

export default authAppwriteServices;