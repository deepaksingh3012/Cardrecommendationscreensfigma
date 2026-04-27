import { motion } from 'motion/react';
import { CardWiseLogo } from './CardWiseLogo';
import { Bell, Shield, HelpCircle, Mail, ChevronRight, LogOut } from 'lucide-react';

export function SettingsScreen({
  onBack,
  onLogout
}: {
  onBack: () => void;
  onLogout?: () => void;
}) {
  const settingSections = [
    {
      title: 'Preferences',
      items: [
        { icon: Bell, label: 'Notifications', description: 'Manage alerts and offers' },
        { icon: Shield, label: 'Privacy', description: 'Data and security settings' }
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help Center', description: 'FAQs and guides' },
        { icon: Mail, label: 'Contact Us', description: 'Get in touch with support' }
      ]
    }
  ];

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
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your preferences</p>
      </div>

      <div className="px-6">
        {settingSections.map((section, sectionIdx) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIdx * 0.1, duration: 0.3 }}
            className="mb-6"
          >
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3 px-1">
              {section.title}
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {section.items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    className={`w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                      idx < section.items.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-900">{item.label}</p>
                        <p className="text-xs text-gray-500">{item.description}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                );
              })}
            </div>
          </motion.section>
        ))}

        {/* Logout Section */}
        {onLogout && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="mb-6"
          >
            <button
              onClick={onLogout}
              className="w-full bg-white rounded-2xl shadow-sm border border-red-100 overflow-hidden px-5 py-4 flex items-center justify-between hover:bg-red-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                  <LogOut className="w-5 h-5 text-red-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-red-600">Log Out</p>
                  <p className="text-xs text-red-400">Sign out of your account</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-red-400" />
            </button>
          </motion.section>
        )}

        {/* App Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 text-sm text-gray-500"
        >
          <p>CardWise v1.0.0</p>
          <p className="mt-1">© 2026 CardWise. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
}
