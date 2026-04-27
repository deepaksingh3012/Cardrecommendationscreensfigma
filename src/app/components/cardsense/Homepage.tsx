import { motion } from 'motion/react';
import { CategoryChip } from './CategoryChip';
import { OfferCard } from './OfferCard';
import { CardWiseLogo } from './CardWiseLogo';
import { ProfileMenu } from './ProfileMenu';

export function Homepage({
  onNavigateToCategory,
  onNavigateToAddCard,
  onNavigateToOffer,
  onNavigateToMyCards,
  onNavigateToSettings
}: {
  onNavigateToCategory: (category: string) => void;
  onNavigateToAddCard: () => void;
  onNavigateToOffer: (offerId: string) => void;
  onNavigateToMyCards: () => void;
  onNavigateToSettings: () => void;
}) {
  const categories = [
    { emoji: '🍔', label: 'Food', id: 'food' },
    { emoji: '🛒', label: 'Shopping', id: 'shopping' },
    { emoji: '✈️', label: 'Travel', id: 'travel' },
    { emoji: '⛽', label: 'Fuel', id: 'fuel' }
  ];

  const offers = [
    {
      id: 'swiggy-20',
      merchant: 'Swiggy',
      discount: '20% OFF',
      cardTag: 'Works with your HDFC card'
    },
    {
      id: 'amazon-10',
      merchant: 'Amazon',
      discount: '10% cashback',
      cardTag: 'Works with your ICICI card'
    },
    {
      id: 'flipkart-15',
      merchant: 'Flipkart',
      discount: '₹150 OFF',
      cardTag: 'Works with your Axis card'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA] pb-8">
      {/* Header */}
      <div className="bg-white px-6 py-6 shadow-sm flex items-center justify-between">
        <CardWiseLogo size="default" />
        <ProfileMenu
          onNavigateToMyCards={onNavigateToMyCards}
          onNavigateToSettings={onNavigateToSettings}
        />
      </div>

      <div className="px-6 pt-8">
        {/* Category Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            What are you paying for today?
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
              >
                <CategoryChip
                  emoji={cat.emoji}
                  label={cat.label}
                  onClick={() => onNavigateToCategory(cat.id)}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Offers Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Offers for you
          </h2>
          <div className="space-y-4">
            {offers.map((offer, idx) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.3 }}
              >
                <OfferCard
                  merchant={offer.merchant}
                  discount={offer.discount}
                  cardTag={offer.cardTag}
                  onClick={() => onNavigateToOffer(offer.id)}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Add Card CTA */}
        <button
          onClick={onNavigateToAddCard}
          className="w-full py-4 bg-white rounded-2xl shadow-sm border border-gray-200 text-gray-700 font-medium hover:shadow-md transition-shadow"
        >
          + Add more cards to unlock more offers
        </button>
      </div>
    </div>
  );
}
