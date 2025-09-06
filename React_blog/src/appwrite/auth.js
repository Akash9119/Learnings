import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {

    Client = new Client();

    constructor() {
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.Account = new Account(this.Client);
    }

    async createAccount(email, password, name) {
        try {
            await this.Account.create(ID.unique(), email, password, name);
            if(userAccount) {
                // calling login method to redirect user to dashboard after account creation
                return this.login(email, password);
            }
            else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login(email, password) {
        try {
            return await this.Account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.Account.get();
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            await this.Account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }

}

const AuthServiceInstance = new AuthService();

export default AuthServiceInstance;