import { CardLogo } from './CardLogo';

export function RecommendationCard({
  cardName,
  reason,
  isPrimary = false
}: {
  cardName: string;
  reason: string;
  isPrimary?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 ${
        isPrimary
          ? 'bg-gradient-to-br from-[#2156F3] to-[#1a45c9] text-white shadow-lg'
          : 'bg-white border border-gray-100 shadow-sm'
      }`}
    >
      {isPrimary && (
        <div className="text-sm font-medium mb-3 opacity-90">
          Best card to use
        </div>
      )}
      <div className="flex items-center gap-3 mb-3">
        <CardLogo cardName={cardName} />
        <h3 className={`font-bold text-lg ${isPrimary ? 'text-white' : 'text-gray-900'}`}>
          {cardName}
        </h3>
      </div>
      <p className={`text-sm ${isPrimary ? 'text-blue-100' : 'text-gray-600'}`}>
        {reason}
      </p>
    </div>
  );
}
