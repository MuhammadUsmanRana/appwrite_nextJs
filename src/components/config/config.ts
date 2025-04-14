const config = {
    appwriteEndpoint: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT), // Your API Endpoint
    appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID), // Your Project ID
    appwriteDataBaseId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID), // Your Database ID
    appwriteCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID), // Your Collection ID
    appwriteBucketId: String(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID), // Your Bucket ID
};

export default config;