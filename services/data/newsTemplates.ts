// News Headlines and Market Commentary Templates
export interface NewsHeadline {
  id: string;
  category: string;
  sentiment: string;
  headline: string;
  summary: string;
}

export const newsHeadlines: NewsHeadline[] = [
  // Bullish Market Headlines
  {
    id: "news_bull_1",
    category: "market",
    sentiment: "bullish",
    headline:
      "Wall Street rallies as inflation data comes in cooler than expected",
    summary:
      "Major indices surged 2%+ after CPI showed inflation moderating faster than anticipated, boosting rate cut hopes.",
  },
  {
    id: "news_bull_2",
    category: "market",
    sentiment: "bullish",
    headline: "S&P 500 hits new all-time high on strong earnings season",
    summary:
      "The benchmark index reached record territory as 80% of reporting companies beat analyst expectations.",
  },
  {
    id: "news_bull_3",
    category: "market",
    sentiment: "bullish",
    headline: "Fed signals potential rate cuts later this year",
    summary:
      "Federal Reserve Chair indicated openness to easing monetary policy if inflation continues declining.",
  },
  {
    id: "news_bull_4",
    category: "market",
    sentiment: "bullish",
    headline: "Tech sector leads market higher on AI optimism",
    summary:
      "Technology stocks outperformed as companies reported strong AI-related revenue growth and investment.",
  },
  {
    id: "news_bull_5",
    category: "market",
    sentiment: "bullish",
    headline: "Global markets surge on China stimulus announcement",
    summary:
      "Asian and emerging markets rallied after China unveiled significant economic support measures.",
  },
  {
    id: "news_bull_6",
    category: "market",
    sentiment: "bullish",
    headline: "Consumer spending remains robust despite higher rates",
    summary:
      "Retail sales data exceeded expectations, signaling resilient consumer demand and soft landing prospects.",
  },
  {
    id: "news_bull_7",
    category: "market",
    sentiment: "bullish",
    headline: "Corporate buybacks reach record levels in Q4",
    summary:
      "Companies announced over $300B in share repurchases, providing significant technical support for equities.",
  },
  {
    id: "news_bull_8",
    category: "market",
    sentiment: "bullish",
    headline: "M&A activity surges as dealmaking confidence returns",
    summary:
      "Merger and acquisition volume doubled year-over-year as companies pursue strategic growth opportunities.",
  },

  // Bearish Market Headlines
  {
    id: "news_bear_1",
    category: "market",
    sentiment: "bearish",
    headline: "Markets tumble on hotter-than-expected inflation print",
    summary:
      "Stocks fell sharply after CPI came in above consensus, pushing back rate cut expectations.",
  },
  {
    id: "news_bear_2",
    category: "market",
    sentiment: "bearish",
    headline: "Wall Street plunges on recession fears",
    summary:
      "Major indices dropped 3%+ as economic data signaled potential contraction ahead.",
  },
  {
    id: "news_bear_3",
    category: "market",
    sentiment: "bearish",
    headline: "Fed hawkish surprise sends markets lower",
    summary:
      "Federal Reserve signaled rates will stay higher for longer, disappointing investors hoping for cuts.",
  },
  {
    id: "news_bear_4",
    category: "market",
    sentiment: "bearish",
    headline: "Tech selloff accelerates amid valuation concerns",
    summary:
      "Growth stocks led the decline as rising yields pressure stretched valuations in the sector.",
  },
  {
    id: "news_bear_5",
    category: "market",
    sentiment: "bearish",
    headline: "Geopolitical tensions spark risk-off move",
    summary:
      "Global markets sold off as escalating international conflicts drove investors to safe-haven assets.",
  },
  {
    id: "news_bear_6",
    category: "market",
    sentiment: "bearish",
    headline: "Bank earnings disappoint on credit concerns",
    summary:
      "Financial stocks fell after major banks increased loan loss provisions on economic uncertainty.",
  },
  {
    id: "news_bear_7",
    category: "market",
    sentiment: "bearish",
    headline: "Oil prices spike on supply disruption fears",
    summary:
      "Energy costs surged following Middle East tensions, raising inflation and stagflation concerns.",
  },
  {
    id: "news_bear_8",
    category: "market",
    sentiment: "bearish",
    headline: "Consumer confidence drops to 6-month low",
    summary:
      "Survey data showed waning consumer sentiment, raising concerns about spending and growth outlook.",
  },

  // Technology News
  {
    id: "news_tech_1",
    category: "technology",
    sentiment: "bullish",
    headline:
      "NVIDIA unveils next-generation AI chips with 3x performance gains",
    summary:
      "The chip giant announced breakthrough GPU architecture expected to dominate the AI training market.",
  },
  {
    id: "news_tech_2",
    category: "technology",
    sentiment: "bullish",
    headline: "Apple Vision Pro sales exceed expectations in launch quarter",
    summary:
      "The mixed reality headset sold 500,000 units despite premium pricing, validating Apple's spatial computing bet.",
  },
  {
    id: "news_tech_3",
    category: "technology",
    sentiment: "bullish",
    headline: "Microsoft Azure revenue growth accelerates on AI demand",
    summary:
      "Cloud business reported 35% growth driven by surging demand for AI infrastructure and services.",
  },
  {
    id: "news_tech_4",
    category: "technology",
    sentiment: "bullish",
    headline: "Alphabet announces major AI breakthrough in drug discovery",
    summary:
      "DeepMind's latest model predicts protein interactions with unprecedented accuracy, revolutionizing pharma research.",
  },
  {
    id: "news_tech_5",
    category: "technology",
    sentiment: "bearish",
    headline: "Meta faces regulatory headwinds in EU over data practices",
    summary:
      "European regulators proposed stricter oversight, potentially impacting ad targeting capabilities.",
  },
  {
    id: "news_tech_6",
    category: "technology",
    sentiment: "bearish",
    headline: "Semiconductor shortages return amid AI chip demand surge",
    summary:
      "Leading chip manufacturers report extended lead times as AI demand overwhelms capacity.",
  },
  {
    id: "news_tech_7",
    category: "technology",
    sentiment: "neutral",
    headline: "Apple reports flat iPhone sales as upgrade cycle slows",
    summary:
      "While services revenue hit records, hardware growth remained muted amid lengthening replacement cycles.",
  },
  {
    id: "news_tech_8",
    category: "technology",
    sentiment: "bullish",
    headline: "Tesla announces affordable Model 2 with $25,000 price tag",
    summary:
      "The EV maker unveiled entry-level vehicle targeting mass market adoption with full self-driving capability.",
  },

  // Crypto News
  {
    id: "news_crypto_1",
    category: "crypto",
    sentiment: "bullish",
    headline: "Bitcoin ETFs see record $1B inflows in single day",
    summary:
      "Institutional adoption accelerated as spot Bitcoin ETFs attracted massive capital following approval.",
  },
  {
    id: "news_crypto_2",
    category: "crypto",
    sentiment: "bullish",
    headline: "Ethereum staking yields surge on network activity",
    summary:
      "Validator rewards reached 5%+ APY as DeFi and NFT activity drove transaction fees higher.",
  },
  {
    id: "news_crypto_3",
    category: "crypto",
    sentiment: "bullish",
    headline: "Major bank announces Bitcoin custody services for institutions",
    summary:
      "One of the largest US banks began offering cryptocurrency storage, expanding institutional access.",
  },
  {
    id: "news_crypto_4",
    category: "crypto",
    sentiment: "bullish",
    headline:
      "Bitcoin halving approaches with mining hashrate at all-time high",
    summary:
      "Network security reached record levels ahead of the supply-reducing event, historically bullish for price.",
  },
  {
    id: "news_crypto_5",
    category: "crypto",
    sentiment: "bearish",
    headline: "SEC intensifies crypto enforcement actions",
    summary:
      "Regulatory agency brought charges against multiple exchanges, creating uncertainty for the industry.",
  },
  {
    id: "news_crypto_6",
    category: "crypto",
    sentiment: "bearish",
    headline: "Major DeFi protocol suffers $100M exploit",
    summary:
      "Smart contract vulnerability led to significant losses, raising concerns about protocol security.",
  },
  {
    id: "news_crypto_7",
    category: "crypto",
    sentiment: "neutral",
    headline: "Countries divided on CBDC implementation timelines",
    summary:
      "While some nations advance digital currency plans, others cite privacy concerns and delay rollouts.",
  },
  {
    id: "news_crypto_8",
    category: "crypto",
    sentiment: "bullish",
    headline: "Solana ecosystem TVL hits new record amid meme coin mania",
    summary:
      "The high-speed blockchain saw locked value surge as speculative activity returned to crypto markets.",
  },

  // Economy Headlines
  {
    id: "news_econ_1",
    category: "economy",
    sentiment: "bullish",
    headline: "Jobs report crushes expectations with 300,000 new positions",
    summary:
      "Labor market remains resilient with strong hiring, low unemployment, and moderate wage growth.",
  },
  {
    id: "news_econ_2",
    category: "economy",
    sentiment: "bullish",
    headline: "GDP growth revised higher to 3.5% annualized rate",
    summary:
      "The economy grew faster than initially reported, defying recession predictions.",
  },
  {
    id: "news_econ_3",
    category: "economy",
    sentiment: "bullish",
    headline: "Manufacturing PMI returns to expansion territory",
    summary:
      "Factory activity grew for the first time in 18 months, signaling industrial sector recovery.",
  },
  {
    id: "news_econ_4",
    category: "economy",
    sentiment: "bearish",
    headline: "Unemployment claims spike to 10-month high",
    summary:
      "Weekly jobless filings rose sharply, suggesting potential labor market cooling.",
  },
  {
    id: "news_econ_5",
    category: "economy",
    sentiment: "bearish",
    headline: "Yield curve inversion reaches deepest level since 1980s",
    summary:
      "Bond market continues signaling recession risk as short-term rates exceed long-term.",
  },
  {
    id: "news_econ_6",
    category: "economy",
    sentiment: "neutral",
    headline: "Housing market stabilizes after rapid price declines",
    summary:
      "Home prices flattened as higher mortgage rates balanced with resilient demand.",
  },
  {
    id: "news_econ_7",
    category: "economy",
    sentiment: "bullish",
    headline: "Small business optimism improves to 2-year high",
    summary:
      "Survey shows entrepreneurs increasingly confident about economic outlook and expansion plans.",
  },
  {
    id: "news_econ_8",
    category: "economy",
    sentiment: "bearish",
    headline: "Credit card delinquencies rise to decade high",
    summary:
      "Consumer stress signals emerge as missed payments increase across income levels.",
  },
];

// Analyst Report Templates
export interface AnalystReport {
  id: string;
  rating: string;
  priceTarget: string;
  headline: string;
  summary: string;
}

export const analystReports: AnalystReport[] = [
  {
    id: "analyst_upgrade_1",
    rating: "Buy",
    priceTarget: "Raised to ${target}",
    headline: "Upgrading to Buy on Improving Fundamentals",
    summary:
      "We're upgrading our rating following better-than-expected Q3 results and raised guidance. Multiple expansion justified by accelerating growth.",
  },
  {
    id: "analyst_upgrade_2",
    rating: "Strong Buy",
    priceTarget: "Raised to ${target}",
    headline: "Adding to Best Ideas List",
    summary:
      "Compelling risk/reward with multiple catalysts ahead. PT raised based on higher earnings estimates and premium multiple.",
  },
  {
    id: "analyst_upgrade_3",
    rating: "Outperform",
    priceTarget: "Raised to ${target}",
    headline: "Upgrade on Market Share Gains",
    summary:
      "Competitive wins driving better-than-expected revenue trajectory. Raising estimates and price target accordingly.",
  },
  {
    id: "analyst_upgrade_4",
    rating: "Buy",
    priceTarget: "Raised to ${target}",
    headline: "Initiating with Buy Rating",
    summary:
      "Attractive entry point after recent pullback. Strong fundamentals and improving sentiment warrant premium valuation.",
  },
  {
    id: "analyst_downgrade_1",
    rating: "Hold",
    priceTarget: "Lowered to ${target}",
    headline: "Downgrading on Valuation Concerns",
    summary:
      "While fundamentals remain solid, current valuation fully reflects positive scenarios. Moving to the sidelines.",
  },
  {
    id: "analyst_downgrade_2",
    rating: "Sell",
    priceTarget: "Lowered to ${target}",
    headline: "Downgrade on Deteriorating Outlook",
    summary:
      "Cutting estimates following disappointing guidance. Competitive pressures and margin headwinds warrant caution.",
  },
  {
    id: "analyst_downgrade_3",
    rating: "Underperform",
    priceTarget: "Lowered to ${target}",
    headline: "Reducing Rating on Execution Risks",
    summary:
      "Management changes and strategic uncertainty warrant lower rating. Estimates trimmed on integration concerns.",
  },
  {
    id: "analyst_maintain_1",
    rating: "Buy",
    priceTarget: "Maintained at ${target}",
    headline: "Reiterating Buy on Long-Term Thesis",
    summary:
      "Near-term noise doesn't change long-term opportunity. Maintaining conviction in growth trajectory and market position.",
  },
  {
    id: "analyst_maintain_2",
    rating: "Hold",
    priceTarget: "Maintained at ${target}",
    headline: "Results In-Line, Holding Rating",
    summary:
      "Quarter met expectations without notable surprises. Fair valued at current levels; maintaining neutral stance.",
  },
  {
    id: "analyst_maintain_3",
    rating: "Strong Buy",
    priceTarget: "Raised to ${target}",
    headline: "Best-in-Class Execution Continues",
    summary:
      "Another stellar quarter reinforces market leadership. Raising PT on higher estimates; remain buyers on any weakness.",
  },
  {
    id: "analyst_sector_1",
    rating: "Overweight",
    priceTarget: "Sector",
    headline: "Technology Sector Outlook: Bullish",
    summary:
      "AI tailwinds creating multi-year growth opportunity across software and semiconductor names. Raising sector allocation.",
  },
  {
    id: "analyst_sector_2",
    rating: "Underweight",
    priceTarget: "Sector",
    headline: "Financials Face Headwinds",
    summary:
      "Net interest margin compression and credit concerns warrant reduced exposure. Rotate to defensive sectors.",
  },
  {
    id: "analyst_sector_3",
    rating: "Market Weight",
    priceTarget: "Sector",
    headline: "Healthcare Outlook: Mixed Signals",
    summary:
      "Drug pricing reform risks balanced by innovation pipeline. Staying selective within the sector.",
  },
];

// General Commentary Templates
export const generalCommentary: string[] = [
  "Markets are digesting mixed economic signals. Stay nimble and maintain diversified exposure across asset classes.",
  "Current volatility creates opportunities for disciplined investors. Focus on quality names with strong fundamentals.",
  "The macro environment remains supportive for risk assets, though positioning is increasingly crowded.",
  "Sector rotation is healthy and suggests broadening market participation. Consider adding small-cap exposure.",
  "Earnings season has been better than feared, supporting current valuations. Guidance will be key for next leg.",
  "Technical indicators suggest near-term consolidation before the next directional move. Patience recommended.",
  "Global central banks are signaling coordination on policy normalization. Currency volatility may increase.",
  "Corporate balance sheets remain healthy with strong cash positions and manageable debt levels.",
  "Consumer resilience continues to surprise, supporting economic growth despite higher borrowing costs.",
  "AI investment cycle is creating opportunities across the technology supply chain. Semis particularly well-positioned.",
  "Value stocks showing renewed leadership after years of growth outperformance. Consider style diversification.",
  "Bond yields stabilizing at current levels may provide tailwind for duration-sensitive equities.",
  "International markets offering better valuations than US, but currency headwinds remain a consideration.",
  "Small caps historically outperform coming out of rate pause cycles. Risk/reward improving for IWM.",
  "Quality factors outperforming as investors prioritize profitability over growth at any price.",
  "Credit spreads remain tight, signaling corporate bond market confidence in economic outlook.",
  "Seasonality turns favorable entering historically strong period for equities. Santa Claus rally in play.",
  "Options market pricing in elevated volatility around upcoming Fed meeting and jobs report.",
  "Institutional flows showing rotation from mega-caps to mid-cap growth names. Breadth improving.",
  "Momentum strategies outperforming as trends extend. Consider trailing stops on extended winners.",
];

// Disclaimer Templates
export const disclaimers: string[] = [
  "*Disclaimer: This analysis is for informational purposes only and should not be considered financial advice. Always conduct your own research and consult with a qualified financial advisor before making investment decisions.*",
  "*Note: Past performance does not guarantee future results. All investments carry risk, including potential loss of principal. This is a simulation and not a recommendation to buy or sell any security.*",
  "*Important: The information provided is based on simulated data and should not be used as the sole basis for investment decisions. Market conditions can change rapidly; trade responsibly.*",
  "*Caution: This is an AI-generated analysis for educational purposes. Real trading involves significant risks. Never invest more than you can afford to lose.*",
  "*Reminder: Financial markets are inherently unpredictable. This analysis represents one possible interpretation of market conditions and is not a guarantee of future performance.*",
];
