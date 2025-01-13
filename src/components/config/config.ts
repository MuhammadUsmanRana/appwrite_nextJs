const config = {
    appwriteEndpoint: String(process.env.NEXT_APP_APPWRITE_ENDPOINT), // Your API Endpoint
    appwriteProjectId: String(process.env.NEXT_APP_APPWRITE_PROJECT_ID), // Your Project ID
    appwriteDataBaseId: String(process.env.NEXT_APP_APPWRITE_DATABASE_ID), // Your Database ID
    appwriteCollectionId: String(process.env.NEXT_APP_APPWRITE_COLLECTION_ID), // Your Collection ID
    appwriteBucketId: String(process.env.NEXT_APP_APPWRITE_KEY), // Your API Key
};

export default config;