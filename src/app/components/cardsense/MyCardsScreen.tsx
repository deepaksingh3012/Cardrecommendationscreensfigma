import { motion } from 'motion/react';
import { CardLogo } from './CardLogo';
import { CardWiseLogo } from './CardWiseLogo';
import { Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

export function MyCardsScreen({
  onBack,
  onAddCard
}: {
  onBack: () => void;
  onAddCard: () => void;
}) {
  // Mock data - in a real app, this would come from state management
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'HDFC Regalia',
      addedDate: 'Added Mar 15, 2026',
      benefits: ['Dining rewards', 'Travel points', 'Airport lounge']
    },
    {
      id: '2',
      name: 'ICICI Amazon Pay',
      addedDate: 'Added Feb 28, 2026',
      benefits: ['Amazon cashback', 'Bill payments', 'Online shopping']
    },
    {
      id: '3',
      name: 'Axis Ace',
      addedDate: 'Added Jan 10, 2026',
      benefits: ['Google Pay cashback', 'Bill payments', 'Utility bills']
    }
  ]);

  const handleRemoveCard = (id: string) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] pb-8">
      {/* Header */}
      <div className="bg-white px-6 py-4 shadow-sm flex items-center justify-between">
        <button onClick={onBack} className="text-gray-600">
          ← Back
        </button>
        <CardWiseLogo size="small" />
        <div className="w-12"></div>
      </div>

      {/* Title Section */}
      <div className="px-6 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">My Cards</h1>
        <p className="text-gray-600">Manage your credit cards</p>
      </div>

      <div className="px-6">
        {/* Cards List */}
        <section className="mb-6">
          {cards.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 text-center border border-gray-100"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No cards added yet</h3>
              <p className="text-gray-600 text-sm mb-4">Add your first card to get personalized offers</p>
              <button
                onClick={onAddCard}
                className="px-6 py-2.5 bg-[#2156F3] text-white rounded-xl font-medium hover:bg-[#1a45c9] transition-colors"
              >
                Add Card
              </button>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {cards.map((card, idx) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <CardLogo cardName={card.name} />
                      <div>
                        <h3 className="font-bold text-gray-900">{card.name}</h3>
                        <p className="text-xs text-gray-500">{card.addedDate}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveCard(card.id)}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors group"
                    >
                      <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-600" />
                    </button>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-gray-500 uppercase">Key Benefits</p>
                    <div className="flex flex-wrap gap-2">
                      {card.benefits.map((benefit, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-50 text-[#2156F3] text-xs rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Add Card Button */}
        {cards.length > 0 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: cards.length * 0.1 + 0.1 }}
            onClick={onAddCard}
            className="w-full py-4 bg-white rounded-2xl shadow-sm border border-gray-200 text-gray-700 font-medium hover:shadow-md transition-shadow flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add another card
          </motion.button>
        )}
      </div>
    </div>
  );
}
