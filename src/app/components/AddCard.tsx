import { useState } from 'react';
import { ArrowLeft, Search, Upload, CreditCard, CheckCircle2, Building2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface AddCardProps {
  onNavigate: (screen: 'dashboard' | 'addCard' | 'analyzer') => void;
}

const banks = [
  { name: 'HDFC Bank', logo: '🏦' },
  { name: 'ICICI Bank', logo: '🏦' },
  { name: 'Axis Bank', logo: '🏦' },
  { name: 'SBI', logo: '🏦' },
];

const cardsByBank: Record<string, string[]> = {
  'HDFC Bank': ['HDFC Millennia', 'HDFC Regalia', 'HDFC Diners Club Black', 'HDFC Freedom'],
  'ICICI Bank': ['ICICI Amazon Pay', 'ICICI Platinum', 'ICICI Coral', 'ICICI Rubyx'],
  'Axis Bank': ['Axis ACE', 'Axis Flipkart', 'Axis Magnus', 'Axis Neo'],
  'SBI': ['SBI SimplyCLICK', 'SBI Cashback', 'SBI BPCL', 'SBI Prime'],
};

export function AddCard({ onNavigate }: AddCardProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBank, setSelectedBank] = useState<string>('');
  const [selectedCard, setSelectedCard] = useState<string>('');
  const [cardName, setCardName] = useState('');
  const [lastFourDigits, setLastFourDigits] = useState('');
  const [cardVariant, setCardVariant] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const filteredBanks = banks.filter(bank =>
    bank.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddCard = () => {
    if (selectedCard && cardName && lastFourDigits) {
      setShowSuccess(true);
      setTimeout(() => {
        onNavigate('dashboard');
      }, 1500);
    }
  };

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
            <h1 className="text-xl">Add New Card</h1>
            <p className="text-slate-500">Add your credit card to get personalized recommendations</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {showSuccess ? (
          <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl text-emerald-900 mb-2">Card Added Successfully!</h2>
              <p className="text-emerald-700">Redirecting to dashboard...</p>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Search Bank */}
            <div>
              <Label className="mb-3 block">Search Your Bank</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  placeholder="Search HDFC, ICICI, Axis, SBI..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Bank Selection */}
            <div>
              <Label className="mb-3 block">Select Bank</Label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {filteredBanks.map((bank, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedBank(bank.name);
                      setSelectedCard('');
                    }}
                    className={`p-4 rounded-xl border-2 transition-all hover:shadow-md ${
                      selectedBank === bank.name
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-slate-200 bg-white hover:border-indigo-300'
                    }`}
                  >
                    <div className="text-3xl mb-2">{bank.logo}</div>
                    <p className="text-slate-700">{bank.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Card Selection */}
            {selectedBank && (
              <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                <Label className="mb-3 block">Select Your Card</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cardsByBank[selectedBank].map((card, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedCard(card)}
                      className={`p-4 rounded-xl border-2 transition-all hover:shadow-md text-left ${
                        selectedCard === card
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-slate-200 bg-white hover:border-indigo-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                          <CreditCard className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <p className="text-slate-900">{card}</p>
                          <p className="text-slate-500">Credit Card</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Card Details Form */}
            {selectedCard && (
              <Card className="animate-in fade-in slide-in-from-top-4 duration-300">
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-center gap-3 pb-4 border-b">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-900">{selectedCard}</p>
                      <p className="text-slate-500">{selectedBank}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input
                        id="cardName"
                        placeholder="Enter name as on card"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="lastFour">Last 4 Digits</Label>
                      <Input
                        id="lastFour"
                        placeholder="••••"
                        maxLength={4}
                        value={lastFourDigits}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          setLastFourDigits(value);
                        }}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="variant">Card Variant (Optional)</Label>
                      <Select value={cardVariant} onValueChange={setCardVariant}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select card variant" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic</SelectItem>
                          <SelectItem value="premium">Premium</SelectItem>
                          <SelectItem value="platinum">Platinum</SelectItem>
                          <SelectItem value="signature">Signature</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-slate-500 mt-1">Auto-fetch benefits based on variant</p>
                    </div>
                  </div>

                  {/* OCR Upload */}
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-indigo-400 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Upload className="w-6 h-6 text-indigo-600" />
                    </div>
                    <p className="text-slate-700 mb-1">Scan Card Details Securely</p>
                    <p className="text-slate-500">Upload card image for quick entry</p>
                  </div>

                  {/* Add Card Button */}
                  <Button
                    onClick={handleAddCard}
                    disabled={!cardName || !lastFourDigits}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                    size="lg"
                  >
                    Add Card
                  </Button>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>
    </div>
  );
}
