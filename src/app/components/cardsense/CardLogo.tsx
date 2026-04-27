export function CardLogo({ cardName }: { cardName: string }) {
  const cardStyles: Record<string, { bg: string; text: string; accent: string }> = {
    'HDFC Regalia': { bg: 'bg-gradient-to-br from-red-600 to-red-800', text: 'text-white', accent: 'bg-yellow-400' },
    'HDFC Millennia': { bg: 'bg-gradient-to-br from-orange-500 to-orange-700', text: 'text-white', accent: 'bg-white' },
    'HDFC Diners Club': { bg: 'bg-gradient-to-br from-gray-800 to-black', text: 'text-white', accent: 'bg-blue-400' },
    'ICICI Amazon Pay': { bg: 'bg-gradient-to-br from-blue-600 to-blue-800', text: 'text-white', accent: 'bg-orange-400' },
    'ICICI Coral': { bg: 'bg-gradient-to-br from-pink-500 to-pink-700', text: 'text-white', accent: 'bg-white' },
    'ICICI Platinum': { bg: 'bg-gradient-to-br from-gray-400 to-gray-600', text: 'text-white', accent: 'bg-white' },
    'Axis Ace': { bg: 'bg-gradient-to-br from-red-700 to-red-900', text: 'text-white', accent: 'bg-yellow-300' },
    'Axis Flipkart': { bg: 'bg-gradient-to-br from-blue-500 to-blue-700', text: 'text-white', accent: 'bg-yellow-400' },
    'Axis Magnus': { bg: 'bg-gradient-to-br from-purple-900 to-black', text: 'text-white', accent: 'bg-gold-400' },
    'SBI SimplyCLICK': { bg: 'bg-gradient-to-br from-blue-700 to-blue-900', text: 'text-white', accent: 'bg-orange-400' },
    'SBI Card PRIME': { bg: 'bg-gradient-to-br from-green-600 to-green-800', text: 'text-white', accent: 'bg-yellow-400' },
    'SBI Elite': { bg: 'bg-gradient-to-br from-gray-700 to-gray-900', text: 'text-white', accent: 'bg-gold-400' },
    'Kotak Zen': { bg: 'bg-gradient-to-br from-purple-600 to-purple-800', text: 'text-white', accent: 'bg-white' },
    'Kotak 811': { bg: 'bg-gradient-to-br from-red-600 to-red-800', text: 'text-white', accent: 'bg-white' },
    'Kotak White': { bg: 'bg-gradient-to-br from-gray-100 to-gray-300', text: 'text-gray-800', accent: 'bg-black' }
  };

  const style = cardStyles[cardName] || { bg: 'bg-gradient-to-br from-gray-600 to-gray-800', text: 'text-white', accent: 'bg-white' };

  // Extract bank name and card name
  const parts = cardName.split(' ');
  const bank = parts[0];
  const card = parts.slice(1).join(' ');

  return (
    <div className={`${style.bg} rounded-lg p-3 w-20 h-12 flex flex-col justify-between shadow-md relative overflow-hidden`}>
      {/* Chip */}
      <div className={`${style.accent} w-6 h-5 rounded opacity-80`}></div>

      {/* Card details */}
      <div className={`${style.text} text-[8px] font-semibold leading-tight`}>
        <div className="opacity-90">{bank}</div>
        <div className="opacity-70 text-[7px]">{card}</div>
      </div>

      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-white opacity-5 rounded-full -mr-8 -mt-8"></div>
    </div>
  );
}
