import Image from "next/image";

export const Gallery = ({ columns, cropImages, items }) => {
  let maxHeight = 0;
  let maxWidth = 0;

  if (cropImages) {
    items.forEach((item) => {
      if (item.attributes.height > maxHeight) {
        maxHeight = item.attributes.height;
      }
      if (item.attributes.width > maxWidth) {
        maxWidth = item.attributes.width;
      }
    });
  }

  const columnWidth = 100 / columns;
  return (
    <div className="gallery-xl flex max-w-[1330px] mx-auto">
      {items.map((item) => (
        <div
          key={item.id}
          style={{ width: `${columnWidth}%` }}
          className="pl-[10px] flex flex-grow gallery-img"
        >
          <Image
            src={item.attributes.url}
            height={maxHeight || item.attributes.height}
            width={maxWidth || item.attributes.width}
            alt={item.attributes.alt || ""}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};