import { Bell, User, Sparkles, ShoppingCart, UtensilsCrossed, ShoppingBag, Plane, ChevronRight, TrendingUp, CreditCard, Plus, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface DashboardProps {
  onNavigate: (screen: 'dashboard' | 'addCard' | 'analyzer') => void;
}

const cards = [
  { name: 'HDFC Millennia', color: 'from-red-500 to-red-600', cashback: '5% cashback', category: 'Shopping' },
  { name: 'ICICI Amazon Pay', color: 'from-orange-500 to-orange-600', cashback: '5% on Amazon', category: 'E-commerce' },
  { name: 'Axis ACE', color: 'from-purple-500 to-purple-600', cashback: '5% rewards', category: 'Food & Bills' },
  { name: 'SBI SimplyCLICK', color: 'from-blue-500 to-blue-600', cashback: '10X rewards', category: 'Online' },
];

const categories = [
  { name: 'Groceries', icon: ShoppingCart, color: 'bg-green-100 text-green-600' },
  { name: 'Dining', icon: UtensilsCrossed, color: 'bg-orange-100 text-orange-600' },
  { name: 'Shopping', icon: ShoppingBag, color: 'bg-pink-100 text-pink-600' },
  { name: 'Travel', icon: Plane, color: 'bg-blue-100 text-blue-600' },
];

const recentRewards = [
  { merchant: 'Swiggy', amount: '₹125', points: '250 pts', date: 'Today', card: 'Axis ACE' },
  { merchant: 'Amazon', amount: '₹320', points: '640 pts', date: 'Yesterday', card: 'ICICI Amazon' },
  { merchant: 'BigBasket', amount: '₹85', points: '170 pts', date: '2 days ago', card: 'HDFC Millennia' },
];

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="min-h-screen pb-20">
      {/* Top Navigation */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl">CardSmart</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 hover:bg-slate-100 rounded-full transition-colors">
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <User className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Savings Card */}
        <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 border-0 text-white">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-emerald-100 mb-1">Total Saved This Month</p>
                <h2 className="text-4xl mb-2">₹4,580</h2>
                <div className="flex items-center gap-1 text-emerald-100">
                  <TrendingUp className="w-4 h-4" />
                  <span>23% more than last month</span>
                </div>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="w-8 h-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card Carousel */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl">Your Cards</h2>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => onNavigate('addCard')}
              className="gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Card
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {cards.map((card, idx) => (
              <div key={idx} className="min-w-[280px] snap-start">
                <div className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow h-[180px] flex flex-col justify-between`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white/80 mb-1">{card.category}</p>
                      <h3 className="text-xl">{card.name}</h3>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      Active
                    </Badge>
                  </div>
                  <div>
                    <p className="text-white/90">{card.cashback}</p>
                    <p className="text-white/70 mt-1">•••• 4567</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Recommendation */}
        <Card className="border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3>Smart Recommendation</h3>
                  <Badge variant="secondary" className="bg-indigo-600 text-white">AI</Badge>
                </div>
                <p className="text-slate-600 mb-3">
                  For Food Delivery, use <span className="text-purple-600">Axis ACE</span> — Get 5% rewards on Swiggy, Zomato & more!
                </p>
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                  onClick={() => onNavigate('analyzer')}
                >
                  Analyze Transaction
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Spend Categories */}
        <div>
          <h2 className="text-xl mb-4">Quick Spend Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <button
                  key={idx}
                  onClick={() => onNavigate('analyzer')}
                  className="p-6 bg-white rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col items-center gap-3 group"
                >
                  <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-slate-700">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recent Rewards */}
        <div>
          <h2 className="text-xl mb-4">Recent Rewards Earned</h2>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {recentRewards.map((reward, idx) => (
                  <div key={idx} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center">
                        <ShoppingBag className="w-6 h-6 text-slate-600" />
                      </div>
                      <div>
                        <p className="text-slate-900">{reward.merchant}</p>
                        <p className="text-slate-500">{reward.date} · {reward.card}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-900">{reward.amount}</p>
                      <p className="text-emerald-600">+{reward.points}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-around">
          <button className="flex flex-col items-center gap-1 text-indigo-600">
            <CreditCard className="w-6 h-6" />
            <span>Home</span>
          </button>
          <button 
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors"
            onClick={() => onNavigate('analyzer')}
          >
            <Zap className="w-6 h-6" />
            <span>Analyze</span>
          </button>
          <button 
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors"
            onClick={() => onNavigate('addCard')}
          >
            <Plus className="w-6 h-6" />
            <span>Add Card</span>
          </button>
        </div>
      </div>
    </div>
  );
}
