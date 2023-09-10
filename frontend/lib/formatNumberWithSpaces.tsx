export default function formatNumberWithSpaces(n: number | string): string {
  const reversedStr = n.toString().split("").reverse().join("");
  const chunks = reversedStr.match(/.{1,3}/g) || [];
  return chunks
    .map((chunk) => chunk.split("").reverse().join(""))
    .reverse()
    .join(" ");
}
