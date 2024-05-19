"use client";
import { clsx } from "clsx";
import Image from "next/image";
import { type ChangeEvent, useRef, useState } from "react";

import { Button } from "@/components/Button.tsx";
import { ACCEPTED_FILE_TYPES } from "@/components/ConsultationReviewForm/add-consultation-review-schema.ts";

export function CustomUserImageInputField({ name }: { name: string }) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [chosenFiles, setChosenFiles] = useState<FileList>();
  const [imageSrc, setImageSrc] = useState<string | undefined>();
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChosenFiles(e.target.files ?? undefined);

    // Create a URL for the first file selected
    if (e.target.files && e.target.files[0]) {
      setImageSrc(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <div className={"flex justify-center items-center"}>
      <div className={"flex-col space-y-1 w-full mt-4"}>
        <p className={"text-xs"}>Zdjęcie jest opcjonalne</p>
        <div className={"flex text-center items-center gap-4"}>
          {imageSrc ? (
            <Image
              alt={""}
              width={56}
              height={56}
              src={imageSrc ?? ""}
              className={"ring-2 ring-[var(--accent-a3)] rounded-md w-16 h-15"}
            />
          ) : (
            <div
              className={
                "w-16 h-15 p-2 border-2 rounded-md fill-zinc-200 border-zinc-200 dark:fill-zinc-600 dark:border-zinc-600"
              }
            >
              <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          )}

          <div className={"w-full h-16 flex items-center justify-center"}>
            {chosenFiles && chosenFiles?.length > 0 ? (
              <div className={"flex-col"}>
                <p className={"text-xs"}>Wybrałaś/eś plik:</p>
                <p
                  className={clsx(
                    "text-xs",
                    Math.round((chosenFiles[0].size / 1024.0 / 1024.0) * 100) /
                      100 >
                      1
                      ? "text-red-600"
                      : "text-green-600",
                  )}
                >
                  {chosenFiles[0].name}{" "}
                  {Math.round((chosenFiles[0].size / 1024.0 / 1024.0) * 100) /
                    100}
                  {" MB"}
                </p>
              </div>
            ) : (
              <div className={"flex-col"}>
                <p className={"text-xs"}>JPG, JPEG, WEBP, PNG.</p>
                <p className={"text-xs"}>Rozmiar: Max 1MB</p>
              </div>
            )}
          </div>

          <input
            ref={imageInputRef}
            type={"file"}
            hidden
            name={name}
            onChange={handleImageChange}
            accept={ACCEPTED_FILE_TYPES.join(",")}
          />
        </div>
        <div className={"flex gap-4 w-full"}>
          <Button
            variant={"secondary"}
            className={"w-full h-8"}
            onClick={(e) => {
              e.preventDefault();
              imageInputRef.current?.click();
            }}
          >
            {"Wgraj zdjęcie"}
          </Button>
        </div>
      </div>
    </div>
  );
}
