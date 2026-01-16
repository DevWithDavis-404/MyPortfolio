"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Item, ItemContent, ItemHeader, ItemTitle } from "@/components/ui/item";
import Image from "next/image";
import { useState } from "react";

type ImageItem = {
  title: string;
  url: string;
};

export default function ProjectGallery({ images }: { images: ImageItem[] }) {
  const [activeImage, setActiveImage] = useState<ImageItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <Item
            key={image.title}
            className="cursor-pointer"
            onClick={() => setActiveImage(image)}
          >
            <ItemHeader>
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover"
                />
              </div>
            </ItemHeader>
            <ItemContent className="items-center">
              <ItemTitle className="text-md">{image.title}</ItemTitle>
            </ItemContent>
          </Item>
        ))}
      </div>

      {/* Fullscreen dialog */}
      <Dialog open={!!activeImage} onOpenChange={() => setActiveImage(null)}>
  <DialogContent
    showCloseButton={false}
    className="
      mb-8
      rounded-xl
      p-0

      /* MOBILE (default) */
      w-[95vw]
      max-h-[70vh]
      h-auto
      flex
      flex-col

      /* TABLET + DESKTOP (keep your original behavior) */
      sm:h-[calc(80vh-2rem)]
      sm:min-w-[calc(80vw-2rem)]
    "
  >
    {activeImage && (
      <div
        className="
          relative
          w-full
          aspect-video

          /* MOBILE: size by width */
          sm:flex-1
          sm:aspect-auto
        "
      >
        <Image
          src={activeImage.url}
          alt={activeImage.title}
          fill
          className="rounded-xl object-contain"
          priority
        />
      </div>
    )}
  </DialogContent>
</Dialog>

    </>
  );
}
