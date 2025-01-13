import { Client, Databases, ID, Query, Storage } from "appwrite";
import config from "./config";
import { createPostProps, updatePostProps } from "@/types/typs";

export class AppwriteServices {
    client = new Client()
    dataBases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteEndpoint)
            .setProject(config.appwriteProjectId);
        this.dataBases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({
        title,
        content,
        image,
        status,
        userId
    }: createPostProps) {
        try {
            return await this.dataBases.createDocument(
                config.appwriteDataBaseId,
                config.appwriteCollectionId,
                ID.unique(),
                {
                    title,
                    content,
                    image,
                    status,
                    userId
                });
        } catch (error) {
            console.error(error);
        }
    };

    async updatePost({
        title,
        content,
        image,
        status,
        userId,
        postId
    }: updatePostProps) {
        try {
            return await this.dataBases.updateDocument(
                config.appwriteDataBaseId,
                config.appwriteCollectionId,
                postId,
                {
                    title,
                    content,
                    image,
                    status,
                    userId
                });
        } catch (error) {
            console.error(error);
        }
    };

    async deletePost(postId: string) {
        try {
            return await this.dataBases.deleteDocument(
                config.appwriteDataBaseId,
                config.appwriteCollectionId,
                postId
            );
        } catch (error) {
            console.error(error);
        }
    };

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.dataBases.listDocuments(
                config.appwriteDataBaseId,
                config.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.error(error);
        }
    };

    // file upload services

    async uploadFile(file: File) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file,
            );
        } catch (error) {
            console.error(error);
        }
    };

    async deleteFile(fileId: string) {
        try {
            return await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.error(error);
        }
    };

    async getFilepreviewPreview(fileId: string) {
        try {
            return await this.bucket.getFileView(
                config.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.error(error);
        }
    };

    async getFiles() {
        try {
            return await this.bucket.listFiles(
                config.appwriteBucketId
            );
        } catch (error) {
            console.error(error);
        }
    };

};
const AuthService = new AppwriteServices();

export default AuthService;
