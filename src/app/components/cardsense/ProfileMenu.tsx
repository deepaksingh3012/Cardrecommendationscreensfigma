import { useState, useRef, useEffect } from 'react';
import { User, CreditCard, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ProfileMenu({
  onNavigateToMyCards,
  onNavigateToSettings
}: {
  onNavigateToMyCards: () => void;
  onNavigateToSettings: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 bg-gradient-to-br from-[#2156F3] to-[#1a45c9] rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
      >
        <User className="w-5 h-5 text-white" />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
          >
            <div className="py-2">
              <button
                onClick={() => {
                  onNavigateToMyCards();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left"
              >
                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-[#2156F3]" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">My Cards</p>
                  <p className="text-xs text-gray-500">View all cards</p>
                </div>
              </button>

              <button
                onClick={() => {
                  onNavigateToSettings();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left"
              >
                <div className="w-9 h-9 bg-gray-50 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Settings</p>
                  <p className="text-xs text-gray-500">Preferences</p>
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
