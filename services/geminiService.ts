// COMPREHENSIVE DUMMY AI SERVICE
// Integrates all data files for 1000+ unique response combinations

import { techStocks, StockData } from "./data/stocksData1";
import { techStocks2, healthcareStocks } from "./data/stocksData2";
import {
  financialStocks,
  consumerStocks,
  industrialStocks,
} from "./data/stocksData3";
import { cryptoAssets, CryptoData } from "./data/cryptoData";
import { forexPairs, etfData, ForexPair, ETFData } from "./data/forexEtfData";
import {
  technicalTemplates,
  fundamentalTemplates,
  marketConditionTemplates,
  strategyTemplates,
} from "./data/responseTemplates";
import {
  newsHeadlines,
  analystReports,
  generalCommentary,
  disclaimers,
} from "./data/newsTemplates";

// Combine all stock data
const allStocks: StockData[] = [
  ...techStocks,
  ...techStocks2,
  ...healthcareStocks,
  ...financialStocks,
  ...consumerStocks,
  ...industrialStocks,
];

// Helper functions
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const randomInRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const randomFloat = (min: number, max: number) =>
  (Math.random() * (max - min) + min).toFixed(2);
const randomItem = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];
const randomItems = <T>(arr: T[], count: number): T[] => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Price variation for realism
const varyPrice = (price: number): number => {
  const variation = price * (Math.random() * 0.02 - 0.01); // ±1%
  return parseFloat((price + variation).toFixed(2));
};

// Template processor
const processTemplate = (
  template: string,
  data: Record<string, string | number>,
): string => {
  let result = template;
  for (const [key, value] of Object.entries(data)) {
    result = result.replace(new RegExp(`\\{${key}\\}`, "g"), String(value));
    result = result.replace(new RegExp(`\\$\\{${key}\\}`, "g"), String(value));
  }
  return result;
};

// Generate detailed stock analysis
const generateStockAnalysis = (stock: StockData): string => {
  const currentPrice = varyPrice(stock.price);
  const sentiment = stock.sentiment;
  const rsiStatus =
    stock.rsi > 70 ? "Overbought" : stock.rsi < 30 ? "Oversold" : "Neutral";

  // Select appropriate templates based on sentiment
  const techTemplates = technicalTemplates.filter((t) =>
    sentiment === "Bullish" || sentiment === "Very Bullish"
      ? t.sentiment === "bullish"
      : sentiment === "Bearish"
        ? t.sentiment === "bearish"
        : true,
  );
  const fundTemplates = fundamentalTemplates.filter((t) =>
    sentiment === "Bullish" || sentiment === "Very Bullish"
      ? t.sentiment === "bullish"
      : sentiment === "Bearish"
        ? t.sentiment === "bearish"
        : true,
  );
  const stratTemplates = strategyTemplates.filter((t) =>
    sentiment === "Bullish" || sentiment === "Very Bullish"
      ? t.sentiment === "bullish"
      : sentiment === "Bearish"
        ? t.sentiment === "bearish"
        : true,
  );

  const techAnalysis = randomItem(techTemplates);
  const fundAnalysis = randomItem(fundTemplates);
  const strategy = randomItem(stratTemplates);
  const news = randomItem(
    newsHeadlines.filter(
      (n) => n.category === "technology" || n.category === "market",
    ),
  );

  const templateData = {
    ticker: stock.ticker,
    name: stock.name,
    price: currentPrice,
    change: stock.change,
    changePercent: stock.changePercent,
    rsi: stock.rsi,
    support: stock.support,
    resistance: stock.resistance,
    pe: stock.peRatio,
    sectorPE: randomInRange(15, 35),
    histAvg: randomInRange(18, 28),
    margin: randomInRange(15, 40),
    target: Math.round(stock.priceTarget),
    entry: Math.round(currentPrice * 0.98),
    stop: Math.round(stock.support * 0.97),
    size: randomInRange(2, 5),
    growth: randomInRange(8, 45),
    prevGrowth: randomInRange(5, 30),
    beat: randomInRange(2, 15),
    expansion: randomInRange(50, 200),
    cash: randomFloat(1, 50),
    yield: randomFloat(0.5, 4.5),
    payout: randomInRange(25, 65),
    years: randomInRange(5, 25),
    share: randomInRange(15, 45),
    source: randomItem([
      "network effects",
      "switching costs",
      "brand value",
      "scale advantages",
      "patents",
    ]),
  };

  return `## 📊 FinSage Analysis: ${stock.ticker} (${stock.name})

### Current Price: $${currentPrice} (${stock.change >= 0 ? "+" : ""}${stock.changePercent}%)

---

### 🎯 Summary
| Metric | Value |
|--------|-------|
| **Sentiment** | ${stock.sentiment} |
| **Analyst Rating** | ${stock.analystRating} |
| **Price Target** | $${stock.priceTarget} (${((stock.priceTarget / currentPrice - 1) * 100).toFixed(1)}% upside) |
| **Market Cap** | ${stock.marketCap} |
| **P/E Ratio** | ${stock.peRatio}x |
| **Dividend Yield** | ${((stock.dividend / currentPrice) * 100).toFixed(2)}% |

---

### 📈 Technical Analysis
- **RSI**: ${stock.rsi} (${rsiStatus})
- **MACD**: ${stock.macd}
- **SMA 20/50/200**: $${stock.sma20} / $${stock.sma50} / $${stock.sma200}
- **Support**: $${stock.support} | **Resistance**: $${stock.resistance}

${processTemplate(techAnalysis.template, templateData)}

---

### 📋 Fundamental Analysis
- **EPS**: $${stock.eps}
- **Beta**: ${stock.beta}
- **52-Week Range**: $${stock.low52} - $${stock.high52}
- **Volume**: ${stock.volume} (Avg: ${stock.avgVolume})

${processTemplate(fundAnalysis.template, templateData)}

---

### 💼 Strategy Recommendation
${processTemplate(strategy.template, templateData)}

---

### 📰 Related News
**${news.headline}**
${news.summary}

---

${randomItem(disclaimers)}`;
};

// Generate crypto analysis
const generateCryptoAnalysis = (crypto: CryptoData): string => {
  const currentPrice = varyPrice(crypto.price);
  const rsiStatus =
    crypto.rsi > 70 ? "Overbought" : crypto.rsi < 30 ? "Oversold" : "Neutral";
  const distanceFromATH = (
    ((crypto.allTimeHigh - currentPrice) / crypto.allTimeHigh) *
    100
  ).toFixed(1);

  const techAnalysis = randomItem(
    technicalTemplates.filter((t) =>
      crypto.sentiment === "Bullish" || crypto.sentiment === "Very Bullish"
        ? t.sentiment === "bullish"
        : t.sentiment === "neutral" ||
          t.sentiment === crypto.sentiment.toLowerCase(),
    ),
  );

  const news = randomItem(newsHeadlines.filter((n) => n.category === "crypto"));

  const strategies = [
    `**DCA Approach**: Consider dollar-cost averaging into ${crypto.symbol} over the next 4-6 weeks to build position.`,
    `**Swing Trade**: Entry at $${(currentPrice * 0.95).toFixed(2)} with target at $${(currentPrice * 1.15).toFixed(2)}. Stop at $${(currentPrice * 0.88).toFixed(2)}.`,
    `**HODL Strategy**: ${crypto.name} fundamentals support long-term accumulation. Add on significant pullbacks.`,
    `**Momentum Play**: ${crypto.sentiment} momentum suggests riding the trend with trailing stops to protect gains.`,
    `**Wait for Pullback**: Current levels extended. Better risk/reward at $${(currentPrice * 0.85).toFixed(2)} support.`,
  ];

  return `## 🪙 FinSage Crypto Analysis: ${crypto.symbol} (${crypto.name})

### Current Price: $${currentPrice} (${crypto.change24h >= 0 ? "+" : ""}${crypto.changePercent24h.toFixed(2)}% 24h)

---

### 🎯 Summary
| Metric | Value |
|--------|-------|
| **Sentiment** | ${crypto.sentiment} |
| **Category** | ${crypto.category} |
| **Market Cap** | ${crypto.marketCap} |
| **24h Volume** | ${crypto.volume24h} |
| **Circulating Supply** | ${crypto.circulatingSupply} |
| **Max Supply** | ${crypto.maxSupply} |

---

### 📈 Technical Indicators
- **RSI (14)**: ${crypto.rsi} (${rsiStatus})
- **All-Time High**: $${crypto.allTimeHigh.toLocaleString()} (${distanceFromATH}% below)
- **All-Time Low**: $${crypto.allTimeLow}

${processTemplate(techAnalysis.template, { rsi: crypto.rsi, support: (currentPrice * 0.9).toFixed(2), resistance: (currentPrice * 1.1).toFixed(2) })}

---

### 🔍 About ${crypto.name}
${crypto.description}

---

### 💼 Strategy Recommendation
${randomItem(strategies)}

---

### 📰 Crypto Market News
**${news.headline}**
${news.summary}

---

${randomItem(disclaimers)}`;
};

// Generate forex analysis
const generateForexAnalysis = (pair: ForexPair): string => {
  const currentRate = varyPrice(pair.rate);

  const trendAnalysis =
    pair.sentiment === "Bullish"
      ? `${pair.symbol} is trending higher with momentum favoring the base currency. Look for pullbacks to ${pair.support.toFixed(4)} as buying opportunities.`
      : pair.sentiment === "Bearish"
        ? `${pair.symbol} faces downward pressure. Resistance at ${pair.resistance.toFixed(4)} capping upside. Consider shorts on rallies.`
        : `${pair.symbol} is range-bound between ${pair.support.toFixed(4)} and ${pair.resistance.toFixed(4)}. Trade the range or wait for breakout.`;

  return `## 💱 FinSage Forex Analysis: ${pair.symbol}

### Current Rate: ${currentRate.toFixed(4)} (${pair.change >= 0 ? "+" : ""}${pair.changePercent.toFixed(2)}%)

---

### Market Data
| Metric | Value |
|--------|-------|
| **Bid/Ask** | ${pair.bid.toFixed(4)} / ${pair.ask.toFixed(4)} |
| **24h High** | ${pair.high24h.toFixed(4)} |
| **24h Low** | ${pair.low24h.toFixed(4)} |
| **Volume** | ${pair.volume} |
| **Sentiment** | ${pair.sentiment} |

---

### Technical Levels
- **Support**: ${pair.support.toFixed(4)}
- **Resistance**: ${pair.resistance.toFixed(4)}

---

### Analysis
${trendAnalysis}

**${pair.description}**

---

${randomItem(disclaimers)}`;
};

// Generate ETF analysis
const generateETFAnalysis = (etf: ETFData): string => {
  const currentPrice = varyPrice(etf.price);
  const rsiStatus =
    etf.rsi > 70 ? "Overbought" : etf.rsi < 30 ? "Oversold" : "Neutral";

  return `## 📦 FinSage ETF Analysis: ${etf.ticker} (${etf.name})

### Current Price: $${currentPrice} (${etf.change >= 0 ? "+" : ""}${etf.changePercent.toFixed(2)}%)

---

### Fund Overview
| Metric | Value |
|--------|-------|
| **AUM** | ${etf.aum} |
| **Expense Ratio** | ${etf.expenseRatio}% |
| **Dividend Yield** | ${etf.yield}% |
| **Holdings** | ${etf.holdings} |
| **Sector Focus** | ${etf.sector} |

---

### Technical Indicators
- **RSI**: ${etf.rsi} (${rsiStatus})
- **Sentiment**: ${etf.sentiment}

---

### About This ETF
${etf.description}

---

### Investment Thesis
${
  etf.sentiment === "Bullish"
    ? `${etf.ticker} shows positive momentum with favorable sector dynamics. Consider for core portfolio allocation.`
    : etf.sentiment === "Bearish"
      ? `${etf.ticker} facing headwinds. Consider reducing exposure or waiting for better entry point.`
      : `${etf.ticker} fairly valued at current levels. Suitable for long-term diversified portfolios.`
}

---

${randomItem(disclaimers)}`;
};

// Generate market overview
const generateMarketOverview = (): string => {
  const marketNews = randomItems(
    newsHeadlines.filter((n) => n.category === "market"),
    3,
  );
  const topPerformers = randomItems(
    allStocks.filter((s) => s.changePercent > 0),
    5,
  );
  const bottomPerformers = randomItems(
    allStocks.filter((s) => s.changePercent < 0),
    5,
  );
  const marketCondition = randomItem(marketConditionTemplates);

  return `## 🌍 FinSage Market Overview

### Market Sentiment: ${randomItem(["Bullish", "Neutral", "Cautiously Optimistic", "Mixed"])}

---

### 📈 Today's Top Performers
${topPerformers.map((s) => `- **${s.ticker}** (${s.name}): +${s.changePercent.toFixed(2)}%`).join("\n")}

### 📉 Today's Biggest Decliners
${bottomPerformers.map((s) => `- **${s.ticker}** (${s.name}): ${s.changePercent.toFixed(2)}%`).join("\n")}

---

### Market Analysis
${processTemplate(marketCondition.template, { vix: randomInRange(12, 28), low: randomInRange(4200, 4500), high: randomInRange(4600, 4900), from: "Growth", to: "Value", rate: randomFloat(2.5, 4.5), beat: randomInRange(70, 85) })}

---

### 📰 Top Headlines
${marketNews.map((n) => `**${n.headline}**\n${n.summary}`).join("\n\n")}

---

### 💡 Trading Ideas
${randomItems(generalCommentary, 3).join("\n\n")}

---

${randomItem(disclaimers)}`;
};

// Generate portfolio recommendation
const generatePortfolioRecommendation = (): string => {
  const stockPicks = randomItems(
    allStocks.filter(
      (s) => s.sentiment === "Bullish" || s.sentiment === "Very Bullish",
    ),
    5,
  );
  const cryptoPicks = randomItems(
    cryptoAssets.filter(
      (c) => c.sentiment === "Bullish" || c.sentiment === "Very Bullish",
    ),
    3,
  );
  const etfPicks = randomItems(
    etfData.filter((e) => e.sentiment === "Bullish"),
    3,
  );

  return `## 💼 FinSage Portfolio Recommendations

### Allocation Strategy
| Asset Class | Recommended Allocation |
|-------------|----------------------|
| US Equities | 45% |
| International | 15% |
| Fixed Income | 20% |
| Crypto | 10% |
| Cash | 10% |

---

### 🎯 Stock Picks
${stockPicks
  .map(
    (s) => `
#### ${s.ticker} - ${s.name}
- **Price**: $${s.price} | **Target**: $${s.priceTarget}
- **Rating**: ${s.analystRating} | **Sentiment**: ${s.sentiment}
- **Thesis**: ${s.description.substring(0, 100)}...
`,
  )
  .join("")}

---

### 🪙 Crypto Picks
${cryptoPicks
  .map(
    (c) => `
#### ${c.symbol} - ${c.name}
- **Price**: $${c.price} | **Category**: ${c.category}
- **Market Cap**: ${c.marketCap} | **Sentiment**: ${c.sentiment}
`,
  )
  .join("")}

---

### 📦 ETF Picks
${etfPicks
  .map(
    (e) => `
#### ${e.ticker} - ${e.name}
- **Price**: $${e.price} | **Yield**: ${e.yield}%
- **Expense Ratio**: ${e.expenseRatio}% | **Sector**: ${e.sector}
`,
  )
  .join("")}

---

${randomItem(disclaimers)}`;
};

// Generate generic financial response
const generateGenericResponse = (prompt: string): string => {
  const lowerPrompt = prompt.toLowerCase();

  // Investing strategy questions
  if (
    lowerPrompt.includes("invest") ||
    lowerPrompt.includes("strategy") ||
    lowerPrompt.includes("how to")
  ) {
    const strategies = [
      `**Investment Strategy Guidance**\n\nBased on current market conditions, consider:\n\n1. **Diversification**: Spread investments across asset classes, sectors, and geographies\n2. **Dollar-Cost Averaging**: Regular investments reduce timing risk\n3. **Quality Focus**: Prioritize companies with strong balance sheets and proven business models\n4. **Risk Management**: Never invest more than you can afford to lose; use stop-losses\n5. **Long-term Perspective**: Ignore short-term noise; focus on fundamentals\n\n${randomItem(generalCommentary)}`,
      `**Building Your Portfolio**\n\nFor most investors, a simple approach works best:\n\n- **60% Stocks** (VTI or SPY for broad exposure)\n- **30% Bonds** (BND for stability)\n- **10% Alternatives** (REITs, commodities, crypto)\n\nRebalance quarterly and stay the course through volatility.\n\n${randomItem(disclaimers)}`,
      `**Smart Investing Principles**\n\n✅ Start early - compound interest is powerful\n✅ Keep costs low - expense ratios matter\n✅ Stay diversified - don't put all eggs in one basket\n✅ Be patient - wealth builds over decades\n✅ Stay informed - but don't over-trade\n\n${randomItem(generalCommentary)}`,
    ];
    return randomItem(strategies);
  }

  // Market questions
  if (lowerPrompt.includes("market") || lowerPrompt.includes("outlook")) {
    return generateMarketOverview();
  }

  // Portfolio questions
  if (
    lowerPrompt.includes("portfolio") ||
    lowerPrompt.includes("recommend") ||
    lowerPrompt.includes("pick")
  ) {
    return generatePortfolioRecommendation();
  }

  // News questions
  if (lowerPrompt.includes("news") || lowerPrompt.includes("headline")) {
    const news = randomItems(newsHeadlines, 5);
    return `## 📰 Latest Financial News\n\n${news.map((n) => `### ${n.headline}\n${n.summary}\n`).join("\n")}`;
  }

  // Default response
  const defaultResponses = [
    `**FinSage AI Assistant**\n\nI can help you with:\n\n- **Stock Analysis**: Ask about any ticker (e.g., "Analyze AAPL" or "What about NVDA?")\n- **Crypto Insights**: Get analysis on Bitcoin, Ethereum, and 30+ altcoins\n- **Forex**: Currency pair analysis for major and minor pairs\n- **ETFs**: Comprehensive ETF analysis for portfolio building\n- **Market Overview**: Current market conditions and top movers\n- **Portfolio Ideas**: Personalized investment recommendations\n\nTry asking: "Should I buy TSLA?" or "What's your view on Bitcoin?"`,
    `**Financial Analysis Available**\n\nI'm FinSage, your AI financial analyst. I can provide:\n\n📊 Technical analysis with RSI, MACD, moving averages\n📋 Fundamental analysis with P/E, growth rates, margins\n💼 Investment strategies and recommendations\n📰 Market news and sentiment analysis\n🪙 Cryptocurrency market insights\n💱 Forex trading analysis\n\nJust name a ticker symbol or ask about market conditions!`,
    `**Welcome to FinSage**\n\nI analyze:\n- 100+ stocks across all sectors\n- 30+ cryptocurrencies\n- 15+ forex pairs\n- 25+ ETFs\n\nWith 1000+ unique response variations based on real-time simulated data.\n\nHow can I help you today?`,
  ];

  return randomItem(defaultResponses);
};

// Main export function
export const askFinancialAI = async (prompt: string): Promise<string> => {
  // Simulate network latency (800-2000ms)
  await delay(800 + Math.random() * 1200);

  const lowerPrompt = prompt.toLowerCase();
  const upperPrompt = prompt.toUpperCase();

  // Check for stock tickers
  for (const stock of allStocks) {
    if (
      upperPrompt.includes(stock.ticker) ||
      lowerPrompt.includes(stock.name.toLowerCase())
    ) {
      return generateStockAnalysis(stock);
    }
  }

  // Check for crypto
  for (const crypto of cryptoAssets) {
    if (
      upperPrompt.includes(crypto.symbol) ||
      lowerPrompt.includes(crypto.name.toLowerCase())
    ) {
      return generateCryptoAnalysis(crypto);
    }
  }

  // Check for forex pairs
  for (const pair of forexPairs) {
    if (
      upperPrompt.includes(pair.symbol.replace("/", "")) ||
      lowerPrompt.includes(pair.name.toLowerCase())
    ) {
      return generateForexAnalysis(pair);
    }
  }

  // Check for ETFs
  for (const etf of etfData) {
    if (
      upperPrompt.includes(etf.ticker) ||
      lowerPrompt.includes(etf.name.toLowerCase())
    ) {
      return generateETFAnalysis(etf);
    }
  }

  // Generic keywords
  if (lowerPrompt.includes("bitcoin") || lowerPrompt.includes("btc")) {
    return generateCryptoAnalysis(
      cryptoAssets.find((c) => c.symbol === "BTC")!,
    );
  }
  if (lowerPrompt.includes("ethereum") || lowerPrompt.includes("eth")) {
    return generateCryptoAnalysis(
      cryptoAssets.find((c) => c.symbol === "ETH")!,
    );
  }
  if (lowerPrompt.includes("solana") || lowerPrompt.includes("sol")) {
    return generateCryptoAnalysis(
      cryptoAssets.find((c) => c.symbol === "SOL")!,
    );
  }

  // S&P 500 and indices
  if (
    lowerPrompt.includes("s&p") ||
    lowerPrompt.includes("spy") ||
    lowerPrompt.includes("index")
  ) {
    return generateETFAnalysis(etfData.find((e) => e.ticker === "SPY")!);
  }
  if (
    lowerPrompt.includes("nasdaq") ||
    lowerPrompt.includes("qqq") ||
    lowerPrompt.includes("tech")
  ) {
    return generateETFAnalysis(etfData.find((e) => e.ticker === "QQQ")!);
  }

  // Generic response
  return generateGenericResponse(prompt);
};
