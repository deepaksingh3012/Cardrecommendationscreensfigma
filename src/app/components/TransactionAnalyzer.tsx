import { useState } from 'react';
import { ArrowLeft, Sparkles, TrendingUp, CreditCard, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { Badge } from './ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

interface TransactionAnalyzerProps {
  onNavigate: (screen: 'dashboard' | 'addCard' | 'analyzer') => void;
}

const merchantCategories = [
  { value: 'food-delivery', label: 'Food Delivery', emoji: '🍔' },
  { value: 'groceries', label: 'Groceries', emoji: '🛒' },
  { value: 'dining', label: 'Dining & Restaurants', emoji: '🍽️' },
  { value: 'shopping', label: 'Online Shopping', emoji: '🛍️' },
  { value: 'travel', label: 'Travel & Hotels', emoji: '✈️' },
  { value: 'entertainment', label: 'Entertainment', emoji: '🎬' },
  { value: 'fuel', label: 'Fuel', emoji: '⛽' },
  { value: 'utilities', label: 'Utilities & Bills', emoji: '💡' },
];

const cardRecommendations = {
  'food-delivery': {
    best: {
      name: 'Axis ACE',
      reward: '5% cashback',
      points: 250,
      cashValue: 250,
      color: 'from-purple-500 to-purple-600',
    },
    others: [
      { name: 'HDFC Millennia', reward: '2.5% cashback', points: 125, cashValue: 125 },
      { name: 'ICICI Amazon Pay', reward: '1% cashback', points: 50, cashValue: 50 },
      { name: 'SBI SimplyCLICK', reward: '1% cashback', points: 50, cashValue: 50 },
    ],
  },
  'groceries': {
    best: {
      name: 'HDFC Millennia',
      reward: '5% cashback',
      points: 250,
      cashValue: 250,
      color: 'from-red-500 to-red-600',
    },
    others: [
      { name: 'Axis ACE', reward: '2% cashback', points: 100, cashValue: 100 },
      { name: 'SBI SimplyCLICK', reward: '1% cashback', points: 50, cashValue: 50 },
      { name: 'ICICI Amazon Pay', reward: '1% cashback', points: 50, cashValue: 50 },
    ],
  },
  'shopping': {
    best: {
      name: 'ICICI Amazon Pay',
      reward: '5% on Amazon',
      points: 250,
      cashValue: 250,
      color: 'from-orange-500 to-orange-600',
    },
    others: [
      { name: 'SBI SimplyCLICK', reward: '10X rewards', points: 200, cashValue: 200 },
      { name: 'HDFC Millennia', reward: '2.5% cashback', points: 125, cashValue: 125 },
      { name: 'Axis ACE', reward: '1% cashback', points: 50, cashValue: 50 },
    ],
  },
  'default': {
    best: {
      name: 'SBI SimplyCLICK',
      reward: '10X rewards',
      points: 200,
      cashValue: 200,
      color: 'from-blue-500 to-blue-600',
    },
    others: [
      { name: 'HDFC Millennia', reward: '2.5% cashback', points: 125, cashValue: 125 },
      { name: 'Axis ACE', reward: '2% cashback', points: 100, cashValue: 100 },
      { name: 'ICICI Amazon Pay', reward: '1% cashback', points: 50, cashValue: 50 },
    ],
  },
};

export function TransactionAnalyzer({ onNavigate }: TransactionAnalyzerProps) {
  const [merchantType, setMerchantType] = useState('food-delivery');
  const [spendAmount, setSpendAmount] = useState([5000]);

  const selectedCategory = merchantCategories.find(cat => cat.value === merchantType);
  const recommendations = (cardRecommendations as any)[merchantType] || cardRecommendations.default;
  
  const bestCard = recommendations.best;
  const calculatedPoints = Math.round((spendAmount[0] / 5000) * bestCard.points);
  const calculatedCash = Math.round((spendAmount[0] / 5000) * bestCard.cashValue);

  return (
    <div className="min-h-screen pb-6">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => onNavigate('dashboard')}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <div>
            <h1 className="text-xl">Smart Transaction Analyzer</h1>
            <p className="text-slate-500">Find the best card for your purchase</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Merchant Type Selector */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <div>
              <Label className="mb-3 block">Merchant Type</Label>
              <Select value={merchantType} onValueChange={setMerchantType}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {merchantCategories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      <div className="flex items-center gap-2">
                        <span>{category.emoji}</span>
                        <span>{category.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-slate-500 mt-2">Select category or let us auto-detect</p>
            </div>

            {/* Spend Amount Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <Label>Spend Amount</Label>
                <span className="text-2xl text-indigo-600">₹{spendAmount[0].toLocaleString()}</span>
              </div>
              <Slider
                value={spendAmount}
                onValueChange={setSpendAmount}
                min={100}
                max={50000}
                step={100}
                className="mb-2"
              />
              <div className="flex justify-between text-slate-400">
                <span>₹100</span>
                <span>₹50,000</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Card Recommendation */}
        <Card className="border-2 border-indigo-300 bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <CardContent className="p-6 relative">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span className="text-slate-600">Best Card for You</span>
              <Badge className="bg-indigo-600 text-white ml-auto">Recommended</Badge>
            </div>

            {/* Card Display */}
            <div className={`bg-gradient-to-br ${bestCard.color} rounded-2xl p-6 text-white mb-6 shadow-xl`}>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-white/80 mb-1">{selectedCategory?.label}</p>
                  <h3 className="text-2xl">{bestCard.name}</h3>
                </div>
                <CreditCard className="w-10 h-10 text-white/80" />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-white/80 mb-1">Reward Rate</p>
                  <p className="text-xl">{bestCard.reward}</p>
                </div>
                <p className="text-white/90">•••• 4567</p>
              </div>
            </div>

            {/* Rewards Breakdown */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4">
                <p className="text-slate-600 mb-1">Points Earned</p>
                <p className="text-2xl text-indigo-600">{calculatedPoints}</p>
                <div className="flex items-center gap-1 text-emerald-600 mt-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>Max rewards</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="text-slate-600 mb-1">Cashback Value</p>
                <p className="text-2xl text-indigo-600">₹{calculatedCash}</p>
                <div className="flex items-center gap-1 text-emerald-600 mt-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>Best value</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700" size="lg">
                Use This Card
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="lg">
                    Compare
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="max-h-[80vh] overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Compare All Cards</SheetTitle>
                    <SheetDescription>
                      See how all your cards perform for this transaction
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6 space-y-4">
                    {/* Best Card in Comparison */}
                    <div className="border-2 border-indigo-300 rounded-xl p-4 bg-indigo-50">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3>{bestCard.name}</h3>
                            <Badge className="bg-indigo-600 text-white">Best</Badge>
                          </div>
                          <p className="text-slate-600">{bestCard.reward}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl text-indigo-600">₹{calculatedCash}</p>
                          <p className="text-slate-600">{calculatedPoints} pts</p>
                        </div>
                      </div>
                      <div className="h-2 bg-indigo-200 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600" style={{ width: '100%' }}></div>
                      </div>
                    </div>

                    {/* Other Cards */}
                    {recommendations.others.map((card: any, idx: number) => {
                      const calcPoints = Math.round((spendAmount[0] / 5000) * card.points);
                      const calcCash = Math.round((spendAmount[0] / 5000) * card.cashValue);
                      const percentage = (calcCash / calculatedCash) * 100;
                      
                      return (
                        <div key={idx} className="border rounded-xl p-4 bg-white">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="mb-1">{card.name}</h3>
                              <p className="text-slate-600">{card.reward}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-2xl text-slate-900">₹{calcCash}</p>
                              <p className="text-slate-600">{calcPoints} pts</p>
                            </div>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-slate-400"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </CardContent>
        </Card>

        {/* Quick Tips */}
        <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
          <CardContent className="p-6">
            <h3 className="mb-3 text-amber-900">💡 Pro Tips</h3>
            <ul className="space-y-2 text-amber-800">
              <li>• Using the right card saves you ₹{calculatedCash} on this transaction</li>
              <li>• {selectedCategory?.label} typically offers better rewards with {bestCard.name}</li>
              <li>• Track your category spends to maximize rewards</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
