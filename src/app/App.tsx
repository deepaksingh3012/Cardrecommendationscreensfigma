import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LoginScreen } from './components/cardsense/LoginScreen';
import { Homepage } from './components/cardsense/Homepage';
import { AddCardScreen } from './components/cardsense/AddCardScreen';
import { CategoryPage } from './components/cardsense/CategoryPage';
import { OfferDetailPage } from './components/cardsense/OfferDetailPage';
import { MyCardsScreen } from './components/cardsense/MyCardsScreen';
import { SettingsScreen } from './components/cardsense/SettingsScreen';

type Screen =
  | { type: 'home' }
  | { type: 'addCard' }
  | { type: 'category'; category: string }
  | { type: 'offer'; offerId: string }
  | { type: 'myCards' }
  | { type: 'settings' };

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screen>({ type: 'home' });

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const getDirection = (from: string, to: string) => {
    const order = ['home', 'category', 'offer', 'addCard', 'myCards', 'settings'];
    return order.indexOf(to) > order.indexOf(from) ? 1 : -1;
  };

  const [direction, setDirection] = useState(1);
  const [prevScreen, setPrevScreen] = useState<Screen>({ type: 'home' });

  const handleScreenChange = (newScreen: Screen) => {
    setDirection(getDirection(prevScreen.type, newScreen.type));
    setPrevScreen(currentScreen);
    setCurrentScreen(newScreen);
  };

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] max-w-[375px] mx-auto overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        {currentScreen.type === 'home' && (
          <motion.div
            key="home"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <Homepage
              onNavigateToCategory={(category) =>
                handleScreenChange({ type: 'category', category })
              }
              onNavigateToAddCard={() =>
                handleScreenChange({ type: 'addCard' })
              }
              onNavigateToOffer={(offerId) =>
                handleScreenChange({ type: 'offer', offerId })
              }
              onNavigateToMyCards={() =>
                handleScreenChange({ type: 'myCards' })
              }
              onNavigateToSettings={() =>
                handleScreenChange({ type: 'settings' })
              }
            />
          </motion.div>
        )}
        {currentScreen.type === 'addCard' && (
          <motion.div
            key="addCard"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <AddCardScreen
              onBack={() => handleScreenChange({ type: 'home' })}
            />
          </motion.div>
        )}
        {currentScreen.type === 'category' && (
          <motion.div
            key={`category-${currentScreen.category}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <CategoryPage
              category={currentScreen.category}
              onBack={() => handleScreenChange({ type: 'home' })}
              onNavigateToOffer={(offerId) =>
                handleScreenChange({ type: 'offer', offerId })
              }
            />
          </motion.div>
        )}
        {currentScreen.type === 'offer' && (
          <motion.div
            key={`offer-${currentScreen.offerId}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <OfferDetailPage
              offerId={currentScreen.offerId}
              onBack={() => handleScreenChange({ type: 'home' })}
            />
          </motion.div>
        )}
        {currentScreen.type === 'myCards' && (
          <motion.div
            key="myCards"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <MyCardsScreen
              onBack={() => handleScreenChange({ type: 'home' })}
              onAddCard={() => handleScreenChange({ type: 'addCard' })}
            />
          </motion.div>
        )}
        {currentScreen.type === 'settings' && (
          <motion.div
            key="settings"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <SettingsScreen
              onBack={() => handleScreenChange({ type: 'home' })}
              onLogout={() => setIsAuthenticated(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
