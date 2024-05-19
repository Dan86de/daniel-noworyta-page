import { Client } from "@notionhq/client";

const notionClient = new Client({ auth: process.env.NOTION_TOKEN });

export interface UploadedFile extends File {
  path: string;
}

export { notionClient };
