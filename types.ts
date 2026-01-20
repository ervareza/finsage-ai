export interface TickerItem {
  symbol: string;
  change: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface StockInsight {
  title: string;
  content: string;
  type: 'analysis' | 'news' | 'alert';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
