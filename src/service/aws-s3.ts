"use server";
import { PutObjectCommand, S3 } from "@aws-sdk/client-s3";

import { type UploadedFile } from "@/service/notion.ts";

const s3 = new S3({
  endpoint: process.env.AWS_S3_ENDPOINT!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
  forcePathStyle: true,
  region: "us-west-1",
});

export const uploadFile = async (
  file: UploadedFile,
  key: string,
  bucketName: string,
) => {
  const buffer = Buffer.from(await file.arrayBuffer());
  const uploadResponse = await s3.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: buffer,
      ACL: "public-read",
    }),
  );

  const fileUrl = `${process.env.AWS_S3_PUBLIC_AVATAR_URL!}${bucketName}/${encodeURIComponent(key)}`;

  return {
    uploadResponse,
    url: fileUrl,
  };
};
