import { translateBalconyAttribute } from "@/components/Listing/ListingCard";
import formatNumberWithSpaces from "@/lib/formatNumberWithSpaces";
import { Listing } from "@/lib/types";

type ListingProps = {
  listing: Listing;
};

export default async function ListingInformation({ listing }: ListingProps) {
  const price = formatNumberWithSpaces(listing.price);
  const monthlyFee = formatNumberWithSpaces(listing.monthlyFee);
  const sqmPrice = formatNumberWithSpaces(listing.sqmPrice);

  const translateFloorAttribute = (floorAttributeInSwedish: string) => {
    const translatedFloorAttribute = floorAttributeInSwedish.replace(
      "av",
      "of"
    );
    return translatedFloorAttribute;
  };

  const daysFromToday = (dateString: string) => {
    const [day, month, year] = dateString.split("-").map(Number);
    const date: any = new Date(year, month - 1, day);
    const today: any = new Date();

    today.setHours(0, 0, 0, 0); // Set today's time to midnight
    const diff = Math.abs(date - today);

    return Math.round(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <section key={listing.id} className="w-full pb-10">
      <img
        className="rounded-lg"
        src={listing.imageUrl}
        alt={listing.address}
        height="100%"
        width="100%"
      />

      <section className="flex py-10  justify-between">
        <div>
          <div className="text-2xl transition-colors duration-300 ease-in-out hover:text-blue-700">
            <a href={listing.url}>{listing.address}</a>
          </div>
          <div className="flex text-gray-400">Stockholm</div>
        </div>

        <span className="text-2xl">{price} kr</span>
      </section>

      <div className="flex grow  justify-between">
        <div className="flex flex-col">
          <div className="text-xl">{monthlyFee} kr/mån</div>

          <div className="text-gray-400">{sqmPrice} kr/m²</div>
        </div>

        <div className="flex flex-col">
          <div className="text-xl">
            Floor{" "}
            {listing.floor !== ""
              ? translateFloorAttribute(listing.floor)
              : "unknown"}
          </div>

          <div className="text-gray-400">
            Balcony: {translateBalconyAttribute(listing.balcony)}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-xl">{listing.sqmSize.replace(",", ".")} m²</div>
          <div className="text-gray-400">{listing.roomCount} rooms</div>
        </div>

        <div className="flex flex-col">
          <div className="text-xl">{daysFromToday(listing.datePublished)}</div>
          <div className="text-gray-400">Days on Hemnet</div>
        </div>
      </div>
    </section>
  );
}
