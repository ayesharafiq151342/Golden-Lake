import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("677b71ef002b38905bf4"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client , "677b7443003698a7d0a8");
