import { ImageList, ImageListItem } from "@mui/material";

type ImageItem = {
  src: string;
  alt?: string;
};

export default function Collage({ images }: { images: ImageItem[] }) {
  return (
    <ImageList sx={{ width: 800, height: "auto" }} variant="woven" cols={4} gap={4}>
      {images.map((item) => (
        <ImageListItem key={item.src}>
          <img
            srcSet={`${item.src}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.src}?w=161&fit=crop&auto=format`}
            alt={item.alt}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
