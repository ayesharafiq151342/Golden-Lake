import { Client, Databases, Account , ID } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("677b71ef002b38905bf4"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client , "677b7443003698a7d0a8");
//toen otp 

export const createEmailSessionToken = async (email) => {
  try {
    const sessionToken = await account.createEmailToken(ID.unique(), email);
    return sessionToken.userId; // Return the user ID or handle further logic
  } catch (error) {
    console.error('Error creating session token:', error);
    throw error;
  }
};
