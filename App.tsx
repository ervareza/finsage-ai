import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import MarketMovers from './pages/MarketMovers';
import AIPicks from './pages/AIPicks';
import GenericPage from './pages/GenericPage'; // Keeping GenericPage for safety, though unused now in main links
import Academy from './pages/Academy';
import TradeAlerts from './pages/TradeAlerts';
import History from './pages/History';
import Explore from './pages/Explore';
import MarketLens from './pages/MarketLens';
import SmartSignals from './pages/SmartSignals';
import Tools from './pages/Tools';
import Pricing from './pages/Pricing';
import Affiliate from './pages/Affiliate';
import APIPage from './pages/API';
import Podcast from './pages/Podcast';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import InvestGPT from './pages/InvestGPT';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="market-movers" element={<MarketMovers />} />
          <Route path="ai-picks" element={<AIPicks />} />
          
          <Route path="trade-alerts" element={<TradeAlerts />} />
          <Route path="history" element={<History />} />
          <Route path="explore" element={<Explore />} />
          
          <Route path="academy" element={<Academy />} />
          <Route path="market-lens" element={<MarketLens />} />
          <Route path="smart-signals" element={<SmartSignals />} />
          
          <Route path="invest-gpt" element={<InvestGPT />} />
          <Route path="tools" element={<Tools />} />
          
          <Route path="affiliate" element={<Affiliate />} />
          <Route path="api" element={<APIPage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="podcast" element={<Podcast />} />
          
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;