export function OfferCard({
  merchant,
  discount,
  cardTag,
  onClick
}: {
  merchant: string;
  discount: string;
  cardTag: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">{merchant}</h3>
          <p className="text-2xl font-bold text-[#2156F3]">{discount}</p>
        </div>
      </div>
      <div className="inline-block px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium">
        {cardTag}
      </div>
      <button className="mt-3 w-full py-2.5 text-[#2156F3] font-medium text-sm">
        View offer →
      </button>
    </div>
  );
}
