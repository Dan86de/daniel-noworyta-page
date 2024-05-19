"use server";

import { Client } from "@notionhq/client";
import { redirect } from "next/navigation";

import { AddConsultationReview } from "@/components/ConsultationReviewForm/add-consultation-review-schema.ts";
// eslint-disable-next-line import/no-cycle
import {
  type ConsultationAddReviewFormState,
  Product,
} from "@/components/ConsultationReviewForm/ConsultationReviewForm.tsx";
import { uploadFile } from "@/service/aws-s3.ts";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export interface UploadedFile extends File {
  path: string;
}

export const addReview = async (
  _prevState: ConsultationAddReviewFormState,
  formData: FormData,
) => {
  const isPublic = (formData.get("isPublic") as string) === "on";
  const image = formData.get("image") as File;

  const validatedFields = AddConsultationReview.safeParse({
    name: formData.get("name"),
    surname: formData.get("surname"),
    url: formData.get("url"),
    review: formData.get("review"),
    image: formData.get("image"),
  });

  const databaseId = process.env.NOTION_REVIEW_DB_ID;

  if (!databaseId) throw new Error("Database ID not found");

  if (!validatedFields.success) {
    return {
      message: "",
      errors: validatedFields.error.issues
        .map((issue) => ({
          [issue.path[0]]: issue.message,
        }))
        .reduce(
          (
            acc: {
              name: string[];
              surname: string[];
              url: string[];
              review: string[];
              image: string[];
            },
            error,
          ) => {
            if (error.name) {
              acc.name.push(error.name);
            } else if (error.surname) {
              acc.surname.push(error.surname);
            } else if (error.url) {
              acc.url.push(error.url);
            } else if (error.review) {
              acc.review.push(error.review);
            } else if (error.image) {
              acc.image.push(error.image);
            }
            return acc;
          },
          { name: [], surname: [], url: [], review: [], image: [] },
        ),
    };
  }

  let userImageUrl = null;

  if (validatedFields.data.image && image.size > 0) {
    const { url } = await uploadFile(
      image as UploadedFile,
      `${validatedFields.data.name}-${validatedFields.data.surname}-${Date.now()}`,
      "consultation_review_images",
    );
    userImageUrl = url;
  }

  const properties = {
    Name: {
      title: [
        {
          text: {
            content: validatedFields.data.name,
          },
        },
      ],
    },
    Surname: {
      rich_text: [
        {
          text: {
            content: validatedFields.data.surname,
          },
        },
      ],
    },
    "Review content": {
      rich_text: [
        {
          text: {
            content: validatedFields.data.review,
          },
        },
      ],
    },
    "Page url": {
      url:
        validatedFields.data.url && validatedFields.data.url.length
          ? validatedFields.data.url
          : null,
    },
    "Image url": {
      url: userImageUrl,
    },
    isPublic: {
      checkbox: isPublic,
    },
    Ocena: {
      type: "number",
      number: 5,
    },
    "Product Type": {
      type: "select",
      select: {
        id: "[jEO",
        name: Product.CONSULTATION,
      },
    },
  };

  await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    properties,
  });
  redirect("/sklep/konsultacje/dzieki-za-ocene");
};
