import { motion } from 'motion/react';
import { Calendar, CreditCard } from 'lucide-react';
import { CardLogo } from './CardLogo';
import { CardWiseLogo } from './CardWiseLogo';

export function OfferDetailPage({
  offerId,
  onBack
}: {
  offerId: string;
  onBack: () => void;
}) {
  const offers: Record<string, any> = {
    'swiggy-20': {
      merchant: 'Swiggy',
      discount: '20% OFF',
      description: 'Get 20% off on orders above ₹300',
      eligibleCards: ['HDFC Regalia', 'Axis Ace'],
      recommendedCard: 'HDFC Regalia',
      expiryDate: 'April 30, 2026',
      terms: [
        'Valid on orders above ₹300',
        'Maximum discount: ₹150',
        'Valid once per card per month'
      ]
    },
    'zomato-150': {
      merchant: 'Zomato',
      discount: '₹150 OFF',
      description: 'Flat ₹150 off on orders above ₹500',
      eligibleCards: ['Axis Ace', 'ICICI Amazon Pay'],
      recommendedCard: 'Axis Ace',
      expiryDate: 'May 15, 2026',
      terms: [
        'Valid on orders above ₹500',
        'Valid 2 times per month',
        'Use code: ZOMATO150'
      ]
    },
    'amazon-10': {
      merchant: 'Amazon',
      discount: '10% cashback',
      description: 'Get 10% cashback up to ₹500',
      eligibleCards: ['ICICI Amazon Pay', 'SBI SimplyCLICK'],
      recommendedCard: 'ICICI Amazon Pay',
      expiryDate: 'May 31, 2026',
      terms: [
        'Valid on all categories',
        'Maximum cashback: ₹500',
        'Cashback credited within 90 days'
      ]
    },
    'flipkart-15': {
      merchant: 'Flipkart',
      discount: '₹150 OFF',
      description: 'Get ₹150 off on orders above ₹1000',
      eligibleCards: ['Axis Flipkart', 'HDFC Millennia'],
      recommendedCard: 'Axis Flipkart',
      expiryDate: 'April 28, 2026',
      terms: [
        'Valid on orders above ₹1000',
        'Valid once per card',
        'Not valid on electronics'
      ]
    }
  };

  const offer = offers[offerId] || offers['swiggy-20'];

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

      {/* Hero Section */}
      <div className="bg-white px-6 py-8 mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {offer.merchant}
        </h2>
        <p className="text-4xl font-bold text-[#2156F3] mb-3">
          {offer.discount}
        </p>
        <p className="text-gray-600">
          {offer.description}
        </p>
      </div>

      <div className="px-6 pb-8">
        {/* Recommended Card */}
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-gradient-to-br from-[#2156F3] to-[#1a45c9] rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <CreditCard className="w-5 h-5" />
              <span className="text-sm font-medium opacity-90">
                Recommended for you
              </span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <CardLogo cardName={offer.recommendedCard} />
              <h3 className="text-2xl font-bold">
                {offer.recommendedCard}
              </h3>
            </div>
            <p className="text-blue-100 text-sm">
              This card gives you the best value for this offer
            </p>
          </div>
        </motion.section>

        {/* Eligible Cards */}
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Eligible cards
          </h3>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            {offer.eligibleCards.map((card: string, idx: number) => (
              <div
                key={idx}
                className={`py-3 flex items-center gap-3 ${
                  idx < offer.eligibleCards.length - 1
                    ? 'border-b border-gray-100'
                    : ''
                }`}
              >
                <CardLogo cardName={card} />
                <p className="text-gray-900 font-medium">{card}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Expiry Date */}
        <section className="mb-6">
          <div className="bg-orange-50 rounded-2xl p-4 flex items-center gap-3">
            <Calendar className="w-5 h-5 text-orange-600" />
            <div>
              <p className="text-sm text-gray-600">Expires on</p>
              <p className="font-semibold text-gray-900">{offer.expiryDate}</p>
            </div>
          </div>
        </section>

        {/* Terms & Conditions */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Terms & Conditions
          </h3>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <ul className="space-y-3">
              {offer.terms.map((term: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-[#2156F3] mt-1">•</span>
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Button */}
        <button className="w-full py-4 bg-[#2156F3] text-white rounded-xl font-semibold shadow-lg hover:bg-[#1a45c9] transition-colors">
          Go to {offer.merchant} →
        </button>
      </div>
    </div>
  );
}
