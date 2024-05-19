import { z } from "zod";

/**
 * Maximum file size allowed for user avatar.
 */
export const MAX_FILE_SIZE = 1; // MB

/**
 * Maximum file size allowed for user avatar in bytes.
 */
export const MAX_FILE_BYTES = MAX_FILE_SIZE * 1024 * 1024; // MB to bytes

/**
 * Accepted file types for user avatar.
 */
export const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/jpg",
  "image/webp",
];

export const AddConsultationReview = z.object({
  image: z
    .any()
    .optional()
    .refine((file: File) => {
      return file.size <= MAX_FILE_BYTES;
    }, `Maxymalna wielkość pliku to ${MAX_FILE_SIZE}MB.`)
    .refine((file: File) => {
      if (file.type === "application/octet-stream") {
        return true;
      }
      return ACCEPTED_FILE_TYPES.includes(file.type);
    }, "Tylko .jpg, .jpeg, .png and .webp są wspierane."),
  name: z
    .string()
    .min(3, "Imię musi mieć co najmniej 3 znaki.")
    .or(z.literal("")),
  surname: z
    .string()
    .min(2, "Nazwisko musi mieć co najmniej 2 znaki.")
    .or(z.literal("")),
  review: z
    .string()
    .min(10, "Twoja opinia musi mieć co najmniej 10 znaków.")
    .max(1000, "Twoja opinia nie może mieć więcej niż 1000 znaków.")
    .or(z.literal("")),
  url: z.string().url("Niepoprawny adres strony.").optional().or(z.literal("")),
});
