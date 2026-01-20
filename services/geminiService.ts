// DUMMY AI SERVICE
// This replaces the real Google GenAI integration to allow the app to run without an API key.

// Helper to simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper to get random number between min and max
const randomInRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Helper to get a random item from an array
const randomItem = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

export const askFinancialAI = async (prompt: string): Promise<string> => {
  // Simulate network latency
  await delay(1000 + Math.random() * 1000);

  const lowerPrompt = prompt.toLowerCase();

  // 1. Check for specific Tickers/Assets
  const tickerMatch = prompt.match(/\b([A-Z]{2,5})\b/); // Simple regex for potential tickers
  const hasCrypto =
    lowerPrompt.includes("crypto") ||
    lowerPrompt.includes("btc") ||
    lowerPrompt.includes("eth") ||
    lowerPrompt.includes("bitcoin");
  const hasStock =
    lowerPrompt.includes("stock") ||
    lowerPrompt.includes("market") ||
    lowerPrompt.includes("buy") ||
    lowerPrompt.includes("sell");

  // 2. Generate Context-Aware Dummy Responses

  // Scenario A: Asking about a specific Ticker (e.g., "Analyze NVDA")
  if (tickerMatch || hasCrypto || hasStock) {
    const ticker = tickerMatch ? tickerMatch[1] : hasCrypto ? "BTC-USD" : "SPY";
    const sentiment = randomItem(["Bullish", "Bearish", "Neutral", "Volatile"]);
    const score = randomInRange(40, 95);
    const rsi = randomInRange(30, 80);
    const support = randomInRange(100, 500);
    const resistance = support + randomInRange(20, 100);

    let analysis = "";
    if (sentiment === "Bullish") {
      analysis = `Strong buy signal detected. Momentum indicators are trending upward with increasing volume. Key resistance at $${resistance} is likely to be tested soon.`;
    } else if (sentiment === "Bearish") {
      analysis = `Caution advised. The asset is facing strong headwinds and technical indicators suggest a potential pullback to the $${support} support level.`;
    } else {
      analysis = `Market is currently consolidating. We recommend waiting for a clear breakout above $${resistance} or a bounce from $${support} before entering a position.`;
    }

    return (
      `**FinSage Analysis for ${ticker}:**\n\n` +
      `• **Sentiment:** ${sentiment} (Confidence: ${score}%)\n` +
      `• **RSI:** ${rsi} ${rsi > 70 ? "(Overbought)" : rsi < 30 ? "(Oversold)" : "(Neutral)"}\n` +
      `• **Key Levels:** Support @ $${support} | Resistance @ $${resistance}\n\n` +
      `${analysis}\n\n` +
      `*Disclaimer: This is a simulation. Not financial advice.*`
    );
  }

  // Scenario B: General Financial Questions
  if (
    lowerPrompt.includes("invest") ||
    lowerPrompt.includes("strategy") ||
    lowerPrompt.includes("plan")
  ) {
    const strategies = [
      "Dollar-Cost Averaging (DCA) into low-cost index funds.",
      "Diversifying 60/40 between global equities and government bonds.",
      "Focusing on high-dividend yield aristocrats for passive income.",
      "Allocating 5-10% to speculative growth assets while keeping the core defensive.",
    ];
    return (
      `**Strategic Insight:**\n\n` +
      `Based on current market conditions, a prudent approach would be: **${randomItem(strategies)}**\n\n` +
      `Remember to maintain an emergency fund and assess your risk tolerance before making any moves. Markets are currently ${randomItem(["volatile", "stable", "trending upwards"])}.`
    );
  }

  // Scenario C: Generic/Fallback Response
  const genericResponses = [
    "I'm analyzing the latest market feeds. Could you be more specific about which asset you're interested in?",
    "Market data is mixed right now. Are you looking for technical analysis or fundamental data?",
    "I can help you analyze stocks, crypto, or forex. Just type a ticker symbol (e.g., AAPL) to get started.",
    "The financial markets are complex. Try asking about 'NVDA' or 'Bitcoin' for a detailed report.",
  ];

  return `**FinSage Assistant:**\n\n${randomItem(genericResponses)}`;
};
