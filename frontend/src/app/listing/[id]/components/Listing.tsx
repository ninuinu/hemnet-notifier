import formatNumberWithSpaces from "@/lib/formatNumberWithSpaces";

type Props = {
  listing: any;
};

export default async function Listing({ listing }: Props) {
  const price = formatNumberWithSpaces(listing.price);
  const monthlyFee = formatNumberWithSpaces(listing.monthlyFee);
  const sqmPrice = formatNumberWithSpaces(listing.sqmPrice);
  const [day, month, year] = listing.datePublished.replace("-", "/");

  const balcony: any = {
    Ja: "Yes",
    Nej: "No",
    "": "No",
  };

  function daysFromToday(dateString: string) {
    const [day, month, year] = dateString.split("-").map(Number);
    const date: any = new Date(year, month - 1, day);
    const today: any = new Date();

    today.setHours(0, 0, 0, 0); // Set today's time to midnight
    const diff = Math.abs(date - today);

    return Math.round(diff / (1000 * 60 * 60 * 24));
  }

  return (
    <section key={listing.id} className="w-full">
      <img
        className="rounded-lg"
        src={listing.imageUrl}
        alt={listing.address}
        height="100%"
        width="100%"
      />

      <section className="flex py-10  justify-between">
        <div className="text-2xl">{listing.address}</div>
        <div className="text-2xl">{price} kr</div>
      </section>

      <div className="flex grow  justify-between">
        <div className="flex flex-col">
          <div className="text-xl">{monthlyFee} kr/mån</div>

          <div className="text-gray-400">{sqmPrice} kr/m²</div>
        </div>

        <div className="flex flex-col">
          <div className="text-xl">{sqmPrice} kr/m²</div>

          <div className="text-gray-400">
            Balcony: {balcony[listing.balcony]}
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
