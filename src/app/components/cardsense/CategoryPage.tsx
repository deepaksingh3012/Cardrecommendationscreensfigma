import { motion } from 'motion/react';
import { RecommendationCard } from './RecommendationCard';
import { OfferCard } from './OfferCard';
import { CardWiseLogo } from './CardWiseLogo';

export function CategoryPage({
  category,
  onBack,
  onNavigateToOffer
}: {
  category: string;
  onBack: () => void;
  onNavigateToOffer: (offerId: string) => void;
}) {
  const categoryData: Record<string, any> = {
    food: {
      emoji: '🍔',
      name: 'Food',
      bestCard: {
        name: 'HDFC Regalia',
        reason: 'Best rewards for dining'
      },
      backupCards: [
        { name: 'Axis Ace', reason: '5% cashback on bills' },
        { name: 'ICICI Amazon Pay', reason: '3% on food apps' }
      ],
      offers: [
        {
          id: 'swiggy-20',
          merchant: 'Swiggy',
          discount: '20% OFF',
          cardTag: 'Use HDFC Regalia'
        },
        {
          id: 'zomato-150',
          merchant: 'Zomato',
          discount: '₹150 OFF',
          cardTag: 'Use Axis Ace'
        },
        {
          id: 'ubereats-10',
          merchant: 'Uber Eats',
          discount: '10% cashback',
          cardTag: 'Use ICICI Amazon Pay'
        }
      ]
    },
    shopping: {
      emoji: '🛒',
      name: 'Shopping',
      bestCard: {
        name: 'ICICI Amazon Pay',
        reason: 'Best for online shopping'
      },
      backupCards: [
        { name: 'Axis Flipkart', reason: '5% on Flipkart' },
        { name: 'SBI SimplyCLICK', reason: '10X rewards points' }
      ],
      offers: [
        {
          id: 'amazon-10',
          merchant: 'Amazon',
          discount: '10% cashback',
          cardTag: 'Use ICICI Amazon Pay'
        },
        {
          id: 'flipkart-15',
          merchant: 'Flipkart',
          discount: '₹150 OFF',
          cardTag: 'Use Axis Flipkart'
        }
      ]
    }
  };

  const data = categoryData[category] || categoryData.food;

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

      {/* Category Title */}
      <div className="px-6 py-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <span>{data.emoji}</span>
          {data.name}
        </h1>
      </div>

      <div className="px-6">
        {/* Best Card Recommendation */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <RecommendationCard
            cardName={data.bestCard.name}
            reason={data.bestCard.reason}
            isPrimary={true}
          />
        </motion.section>

        {/* Backup Options */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Other good options
          </h2>
          <div className="space-y-3">
            {data.backupCards.map((card: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.3 }}
              >
                <RecommendationCard
                  cardName={card.name}
                  reason={card.reason}
                  isPrimary={false}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Offers */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Active offers
          </h2>
          <div className="space-y-4">
            {data.offers.map((offer: any, idx: number) => (
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
      </div>
    </div>
  );
}
