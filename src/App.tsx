import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Storefront from './pages/Storefront';
import Merchant from './pages/Merchant';
import Policies from './components/Policies';

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/storefront" element={<Storefront />} />
        <Route path="/merchant" element={<Merchant />} />
        <Route path="merchant/policies" element={<Policies />}/>
        <Route path="*" element={<Navigate to="/storefront" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;