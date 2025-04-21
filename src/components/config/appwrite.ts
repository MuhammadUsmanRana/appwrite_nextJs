import { Client, Databases, ID, Query, Storage } from "appwrite";
import config from "./config";
import { createPostProps, updatePostProps } from "@/types/typs";

export class AppwriteService {
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

    async createRoom({
        $id,
        user_id,
        name,
        description,
        sqft,
        capacity,
        location,
        address,
        amenities,
        availability,
        price_per_hour,
        image,
    }: createPostProps) {
        try {
            return await this.dataBases.createDocument(
                config.appwriteDataBaseId,
                config.appwriteCollectionId,
                ID.unique(),
                {
                    $id,
                    user_id,
                    name,
                    description,
                    sqft,
                    capacity,
                    location,
                    address,
                    amenities,
                    availability,
                    price_per_hour,
                    image
                });
        } catch (error) {
            console.error(error);
        }
    };

    async updateRoom(roomId: string, {
    $id, user_id, name, description, sqft, capacity, location, address, amenities, availability, price_per_hour, image,
}: updatePostProps) {
        try {
            return await this.dataBases.updateDocument(
                config.appwriteDataBaseId,
                config.appwriteCollectionId,
                user_id,
                {
                    $id,
                    user_id,
                    name,
                    description,
                    sqft,
                    capacity,
                    location,
                    address,
                    amenities,
                    availability,
                    price_per_hour,
                    image,
                });
        } catch (error) {
            console.error(error);
        }
    };

    async deleteRoom(postId: string) {
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

    // queries = [Query.equal("status", "active")]
    async getRooms() {
        try {
            return await this.dataBases.listDocuments(
                config.appwriteDataBaseId,
                config.appwriteCollectionId,
                // queries
            );
        } catch (error) {
            console.error(error);
        }
    };

    async getRoomById(id: string) {
        try {
            return await this.dataBases.getDocument(
                config.appwriteDataBaseId,
                config.appwriteCollectionId,
                id
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

// export default AppWriteServices;
