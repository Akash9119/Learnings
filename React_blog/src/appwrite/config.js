import conf from "../conf/conf";
import { Client, Account, TablesDB, Storage , ID } from "appwrite";

export class Services {
    Client = new Client();
    tableDB;
    storage;

    constructor() {
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.tableDB = new TablesDB(this.Client);
        this.storage = new Storage(this.Client);
    }

    async createPost({title, slug, content, featuredImage, status, userID}) {
        try {
            return await this.tableDB.createRow(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID
                }
            );
        } catch (error) {
            throw error;
        }
    }

    async updatePost({title, slug, content, featuredImage, status}) {
        try {
            return await this.tableDB.updateRow(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, {
                title,
                content,
                featuredImage,
                status
                }
            )
        }
        catch(error){
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.tableDB.deleteRow(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            throw error;
            return false;
        }
    }

    async listPost(slug) {
        try {
            return await this.tableDB.getRow(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error;
            return false;
        }
    }

    async listPosts() {
        
    }

}

const ServicesInstance = new Services();

export default ServicesInstance;