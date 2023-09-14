import { Button } from "@mui/material";

type ListingAttributeTagProps = {
  tag: string;
  index: number;
};

export default function ListingAttributeTag({
  tag,
  index,
}: ListingAttributeTagProps) {
  return (
    <span
      className={
        index !== 0
          ? "rounded border px-3 py-1 text-blue-700 bg-blue-50 ml-2 border-none"
          : "rounded border px-3 py-1 text-blue-700 bg-blue-50 border-none"
      }
    >
      {tag}
    </span>
  );
}
