import { Client } from "@notionhq/client";
// eslint-disable-next-line import/no-cycle

const notionClient = new Client({ auth: process.env.NOTION_TOKEN });

export interface UploadedFile extends File {
  path: string;
}

export { notionClient };
