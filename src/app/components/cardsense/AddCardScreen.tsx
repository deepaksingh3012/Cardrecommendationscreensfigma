import { useState } from 'react';
import { ChevronDown, Shield } from 'lucide-react';
import { CardWiseLogo } from './CardWiseLogo';

export function AddCardScreen({ onBack }: { onBack: () => void }) {
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedCard, setSelectedCard] = useState('');
  const [showBankDropdown, setShowBankDropdown] = useState(false);
  const [showCardDropdown, setShowCardDropdown] = useState(false);

  const banks = ['HDFC Bank', 'ICICI Bank', 'Axis Bank', 'SBI', 'Kotak Mahindra'];

  const cards: Record<string, string[]> = {
    'HDFC Bank': ['Regalia', 'Millennia', 'Diners Club'],
    'ICICI Bank': ['Amazon Pay', 'Coral', 'Platinum'],
    'Axis Bank': ['Ace', 'Flipkart', 'Magnus'],
    'SBI': ['SimplyCLICK', 'Card PRIME', 'Elite'],
    'Kotak Mahindra': ['Zen', '811', 'White']
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <div className="bg-white px-6 py-4 shadow-sm flex items-center justify-between">
        <button onClick={onBack} className="text-gray-600">
          ← Back
        </button>
        <CardWiseLogo size="small" />
        <div className="w-12"></div>
      </div>

      <div className="px-6 pt-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Add your credit card</h1>
        <p className="text-gray-600 mb-6">Tell us which cards you have</p>
      </div>

      <div className="px-6">
        {/* Bank Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Bank
          </label>
          <div className="relative">
            <button
              onClick={() => setShowBankDropdown(!showBankDropdown)}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 flex items-center justify-between text-left shadow-sm"
            >
              <span className={selectedBank ? 'text-gray-900' : 'text-gray-400'}>
                {selectedBank || 'Choose your bank'}
              </span>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </button>
            {showBankDropdown && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto">
                {banks.map((bank) => (
                  <button
                    key={bank}
                    onClick={() => {
                      setSelectedBank(bank);
                      setSelectedCard('');
                      setShowBankDropdown(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 text-gray-900"
                  >
                    {bank}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Card Selection */}
        {selectedBank && (
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Card
            </label>
            <div className="relative">
              <button
                onClick={() => setShowCardDropdown(!showCardDropdown)}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 flex items-center justify-between text-left shadow-sm"
              >
                <span className={selectedCard ? 'text-gray-900' : 'text-gray-400'}>
                  {selectedCard || 'Choose your card'}
                </span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
              {showCardDropdown && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                  {cards[selectedBank]?.map((card) => (
                    <button
                      key={card}
                      onClick={() => {
                        setSelectedCard(card);
                        setShowCardDropdown(false);
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 text-gray-900"
                    >
                      {selectedBank} {card}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Add Another Card */}
        <button className="w-full py-3 mb-8 text-[#2156F3] font-medium bg-white rounded-xl border border-gray-200 shadow-sm">
          + Add another card
        </button>

        {/* Trust Section */}
        <div className="bg-blue-50 rounded-2xl p-5 mb-8 flex items-start gap-3">
          <Shield className="w-5 h-5 text-[#2156F3] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700">
            We never ask for card number, OTP, or bank access
          </p>
        </div>

        {/* Save Button */}
        <button
          disabled={!selectedCard}
          className={`w-full py-4 rounded-xl font-semibold shadow-lg transition-all ${
            selectedCard
              ? 'bg-[#2156F3] text-white hover:bg-[#1a45c9]'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Save Cards
        </button>
      </div>
    </div>
  );
}
