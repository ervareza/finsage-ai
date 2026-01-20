// Response Templates - Comprehensive variations for AI responses
export interface ResponseTemplate {
  id: string;
  category: string;
  sentiment: string;
  template: string;
}

// Technical Analysis Templates (200+ variations)
export const technicalTemplates: ResponseTemplate[] = [
  // RSI Based Responses
  {
    id: "rsi_oversold_1",
    category: "technical",
    sentiment: "bullish",
    template:
      "RSI at {rsi} indicates oversold conditions. A technical bounce is likely as buyers step in at these discounted levels.",
  },
  {
    id: "rsi_oversold_2",
    category: "technical",
    sentiment: "bullish",
    template:
      "With RSI dropping to {rsi}, we're seeing extreme oversold territory. Historical patterns suggest a mean reversion rally is imminent.",
  },
  {
    id: "rsi_oversold_3",
    category: "technical",
    sentiment: "bullish",
    template:
      "The RSI reading of {rsi} signals capitulation selling. Smart money typically accumulates at these exhaustion levels.",
  },
  {
    id: "rsi_oversold_4",
    category: "technical",
    sentiment: "bullish",
    template:
      "Current RSI of {rsi} places this asset in deeply oversold territory. Technical traders often view this as a high-probability long entry.",
  },
  {
    id: "rsi_oversold_5",
    category: "technical",
    sentiment: "bullish",
    template:
      "At {rsi} RSI, selling pressure appears exhausted. Watch for bullish divergence as a confirmation signal for entry.",
  },
  {
    id: "rsi_overbought_1",
    category: "technical",
    sentiment: "bearish",
    template:
      "RSI at {rsi} signals overbought conditions. Consider taking profits or tightening stops as a pullback becomes increasingly likely.",
  },
  {
    id: "rsi_overbought_2",
    category: "technical",
    sentiment: "bearish",
    template:
      "With RSI elevated to {rsi}, momentum is stretched. A cooling period or correction typically follows such extended readings.",
  },
  {
    id: "rsi_overbought_3",
    category: "technical",
    sentiment: "bearish",
    template:
      "The {rsi} RSI reading suggests buyers are overextended. New longs at this level carry elevated risk of near-term drawdown.",
  },
  {
    id: "rsi_overbought_4",
    category: "technical",
    sentiment: "bearish",
    template:
      "Current RSI of {rsi} indicates euphoric buying. Historical precedent suggests caution; consider scaling out of positions.",
  },
  {
    id: "rsi_overbought_5",
    category: "technical",
    sentiment: "bearish",
    template:
      "At {rsi} RSI, the asset is in overbought territory. While momentum can persist, risk-reward for new entries is unfavorable.",
  },
  {
    id: "rsi_neutral_1",
    category: "technical",
    sentiment: "neutral",
    template:
      "RSI at {rsi} sits in neutral territory, indicating balanced buying and selling pressure. Wait for directional confirmation.",
  },
  {
    id: "rsi_neutral_2",
    category: "technical",
    sentiment: "neutral",
    template:
      "With RSI at {rsi}, the asset shows neither overbought nor oversold conditions. A breakout from consolidation will set the next trend.",
  },
  {
    id: "rsi_neutral_3",
    category: "technical",
    sentiment: "neutral",
    template:
      "The {rsi} RSI reading suggests equilibrium between bulls and bears. Monitor for a decisive move above 60 or below 40.",
  },

  // MACD Based Responses
  {
    id: "macd_bullish_1",
    category: "technical",
    sentiment: "bullish",
    template:
      "MACD has crossed above the signal line, confirming bullish momentum. The histogram shows increasing buyer conviction.",
  },
  {
    id: "macd_bullish_2",
    category: "technical",
    sentiment: "bullish",
    template:
      "A bullish MACD crossover just occurred. This is a classic buy signal suggesting upward momentum is building.",
  },
  {
    id: "macd_bullish_3",
    category: "technical",
    sentiment: "bullish",
    template:
      "MACD indicator turned positive with expanding histogram bars. Trend followers should view this as a confirmed entry signal.",
  },
  {
    id: "macd_bullish_4",
    category: "technical",
    sentiment: "bullish",
    template:
      "The MACD line has decisively crossed above signal, with both lines trending higher. Strong bullish momentum confirmed.",
  },
  {
    id: "macd_bullish_5",
    category: "technical",
    sentiment: "bullish",
    template:
      "MACD bullish crossover validated by rising histogram. The trend has shifted in favor of the bulls.",
  },
  {
    id: "macd_bearish_1",
    category: "technical",
    sentiment: "bearish",
    template:
      "MACD crossed below the signal line, signaling bearish momentum. Sellers are gaining control of price action.",
  },
  {
    id: "macd_bearish_2",
    category: "technical",
    sentiment: "bearish",
    template:
      "A bearish MACD crossover has occurred. This classic sell signal suggests downward pressure is intensifying.",
  },
  {
    id: "macd_bearish_3",
    category: "technical",
    sentiment: "bearish",
    template:
      "MACD turned negative with declining histogram bars. Bears have taken control; defensive positioning recommended.",
  },
  {
    id: "macd_bearish_4",
    category: "technical",
    sentiment: "bearish",
    template:
      "The MACD line crossed below signal with both lines pointing down. Bearish trend confirmed by momentum indicators.",
  },
  {
    id: "macd_bearish_5",
    category: "technical",
    sentiment: "bearish",
    template:
      "MACD bearish crossover accompanied by expanding red histogram. Consider reducing exposure or establishing hedges.",
  },

  // Moving Average Responses
  {
    id: "ma_golden_cross_1",
    category: "technical",
    sentiment: "bullish",
    template:
      "A golden cross has formed with the 50-day MA crossing above the 200-day MA. This is a powerful long-term bullish signal.",
  },
  {
    id: "ma_golden_cross_2",
    category: "technical",
    sentiment: "bullish",
    template:
      "The golden cross pattern just triggered. Historically, this signal precedes significant upside moves over the following months.",
  },
  {
    id: "ma_golden_cross_3",
    category: "technical",
    sentiment: "bullish",
    template:
      "50-day moving average has crossed above the 200-day. Institutional algorithms often increase buying on this confirmed uptrend signal.",
  },
  {
    id: "ma_death_cross_1",
    category: "technical",
    sentiment: "bearish",
    template:
      "A death cross has formed with the 50-day MA crossing below the 200-day MA. This signals a potential long-term downtrend.",
  },
  {
    id: "ma_death_cross_2",
    category: "technical",
    sentiment: "bearish",
    template:
      "The death cross pattern has triggered. This bearish signal often precedes extended periods of underperformance.",
  },
  {
    id: "ma_death_cross_3",
    category: "technical",
    sentiment: "bearish",
    template:
      "50-day MA crossed below 200-day, forming the death cross. Risk management is crucial; consider stop-losses.",
  },
  {
    id: "ma_above_1",
    category: "technical",
    sentiment: "bullish",
    template:
      "Price trading above all major moving averages (20/50/200 SMA) confirms a healthy uptrend. Dips to MAs offer buying opportunities.",
  },
  {
    id: "ma_above_2",
    category: "technical",
    sentiment: "bullish",
    template:
      "With price above stacked moving averages, the trend structure remains bullish. MAs act as dynamic support levels.",
  },
  {
    id: "ma_below_1",
    category: "technical",
    sentiment: "bearish",
    template:
      "Price trading below all major moving averages signals a confirmed downtrend. Rallies to MAs often face selling pressure.",
  },
  {
    id: "ma_below_2",
    category: "technical",
    sentiment: "bearish",
    template:
      "With price below stacked moving averages, bearish trend structure is intact. MAs now act as dynamic resistance.",
  },

  // Support/Resistance Responses
  {
    id: "support_1",
    category: "technical",
    sentiment: "bullish",
    template:
      "Price is testing strong support at ${support}. Buyers have defended this level multiple times; a bounce is probable.",
  },
  {
    id: "support_2",
    category: "technical",
    sentiment: "bullish",
    template:
      "The ${support} support zone has held. This confluence area of previous lows and volume profile suggests renewed buying interest.",
  },
  {
    id: "support_3",
    category: "technical",
    sentiment: "bullish",
    template:
      "Key support at ${support} is being tested. Watch for bullish candlestick patterns to confirm the hold.",
  },
  {
    id: "support_4",
    category: "technical",
    sentiment: "bullish",
    template:
      "Price approaching major support at ${support}. Historical data shows a 75% probability of bounce from this level.",
  },
  {
    id: "support_5",
    category: "technical",
    sentiment: "bullish",
    template:
      "Critical support at ${support} aligns with the 200-day MA. This confluence zone typically attracts significant buying.",
  },
  {
    id: "resistance_1",
    category: "technical",
    sentiment: "bearish",
    template:
      "Price facing resistance at ${resistance}. Previous rallies have stalled here; expect selling pressure.",
  },
  {
    id: "resistance_2",
    category: "technical",
    sentiment: "bearish",
    template:
      "The ${resistance} resistance zone is being tested. This area has rejected price multiple times previously.",
  },
  {
    id: "resistance_3",
    category: "technical",
    sentiment: "bearish",
    template:
      "Key resistance at ${resistance} caps the upside. A decisive break above is needed to continue the rally.",
  },
  {
    id: "resistance_4",
    category: "technical",
    sentiment: "bearish",
    template:
      "Approaching resistance at ${resistance}. Historical patterns show significant supply at this price level.",
  },
  {
    id: "resistance_5",
    category: "technical",
    sentiment: "neutral",
    template:
      "Price at ${resistance} resistance. A breakout triggers bullish continuation; rejection signals range-bound trading.",
  },
  {
    id: "breakout_1",
    category: "technical",
    sentiment: "bullish",
    template:
      "Breakout confirmed above ${resistance}! Volume surge validates the move. Previous resistance becomes new support.",
  },
  {
    id: "breakout_2",
    category: "technical",
    sentiment: "bullish",
    template:
      "Clean breakout through ${resistance} with strong momentum. Expect continuation as shorts cover and new longs enter.",
  },
  {
    id: "breakdown_1",
    category: "technical",
    sentiment: "bearish",
    template:
      "Breakdown confirmed below ${support}! Increased volume on the move signals conviction. Further downside likely.",
  },
  {
    id: "breakdown_2",
    category: "technical",
    sentiment: "bearish",
    template:
      "Support at ${support} has failed. The breakdown suggests accelerating selling; next support zone lower.",
  },

  // Volume Analysis
  {
    id: "volume_surge_1",
    category: "technical",
    sentiment: "bullish",
    template:
      "Volume surged 200% above average on today's rally. This conviction buying often precedes continued upside.",
  },
  {
    id: "volume_surge_2",
    category: "technical",
    sentiment: "bullish",
    template:
      "Breakout accompanied by massive volume expansion. Institutional participation is evident in today's price action.",
  },
  {
    id: "volume_weak_1",
    category: "technical",
    sentiment: "bearish",
    template:
      "Rally occurring on below-average volume. Without strong participation, this bounce may be a bull trap.",
  },
  {
    id: "volume_weak_2",
    category: "technical",
    sentiment: "bearish",
    template:
      "Price rise on declining volume signals lack of conviction. Smart money appears to be distributing into strength.",
  },
  {
    id: "volume_distribution_1",
    category: "technical",
    sentiment: "bearish",
    template:
      "Heavy volume on down days versus light volume on up days suggests distribution. Institutional selling detected.",
  },
  {
    id: "volume_accumulation_1",
    category: "technical",
    sentiment: "bullish",
    template:
      "Volume analysis shows accumulation pattern. Big players are quietly building positions at these levels.",
  },

  // Chart Patterns
  {
    id: "pattern_bull_flag_1",
    category: "technical",
    sentiment: "bullish",
    template:
      "Bull flag pattern forming after recent surge. Consolidation typically resolves higher with measured move to ${target}.",
  },
  {
    id: "pattern_bull_flag_2",
    category: "technical",
    sentiment: "bullish",
    template:
      "Classic bull flag consolidation in progress. The tight range suggests bulls are absorbing all selling pressure.",
  },
  {
    id: "pattern_cup_handle_1",
    category: "technical",
    sentiment: "bullish",
    template:
      "Cup and handle pattern nearing completion. Breakout above handle resistance targets the pattern's measured move.",
  },
  {
    id: "pattern_cup_handle_2",
    category: "technical",
    sentiment: "bullish",
    template:
      "Beautiful cup and handle formation developing. This bullish continuation pattern has high success rate historically.",
  },
  {
    id: "pattern_double_bottom_1",
    category: "technical",
    sentiment: "bullish",
    template:
      "Double bottom pattern confirmed. The W-formation signals reversal; neckline breakout projects higher targets.",
  },
  {
    id: "pattern_double_bottom_2",
    category: "technical",
    sentiment: "bullish",
    template:
      "Second bottom held above first, forming a double bottom. Bulls defended key support; reversal likely.",
  },
  {
    id: "pattern_inverse_hs_1",
    category: "technical",
    sentiment: "bullish",
    template:
      "Inverse head and shoulders pattern forming. This major reversal signal suggests the downtrend is ending.",
  },
  {
    id: "pattern_inverse_hs_2",
    category: "technical",
    sentiment: "bullish",
    template:
      "Inverted H&S pattern nearing completion. Neckline break projects significant upside based on head-to-neckline distance.",
  },
  {
    id: "pattern_bear_flag_1",
    category: "technical",
    sentiment: "bearish",
    template:
      "Bear flag pattern forming after sharp decline. Consolidation typically resolves lower with continuation.",
  },
  {
    id: "pattern_bear_flag_2",
    category: "technical",
    sentiment: "bearish",
    template:
      "Classic bear flag consolidation in progress. The bounce is likely a pause before the next leg down.",
  },
  {
    id: "pattern_double_top_1",
    category: "technical",
    sentiment: "bearish",
    template:
      "Double top pattern confirmed. The M-formation signals reversal; breakdown projects lower targets.",
  },
  {
    id: "pattern_double_top_2",
    category: "technical",
    sentiment: "bearish",
    template:
      "Failed to break above prior high, forming double top. Distribution at resistance complete; sellers in control.",
  },
  {
    id: "pattern_head_shoulders_1",
    category: "technical",
    sentiment: "bearish",
    template:
      "Head and shoulders pattern forming. This classic reversal signal suggests the uptrend is exhausting.",
  },
  {
    id: "pattern_head_shoulders_2",
    category: "technical",
    sentiment: "bearish",
    template:
      "H&S pattern nearing completion. Watch the neckline; breakdown confirms bearish reversal.",
  },
  {
    id: "pattern_triangle_1",
    category: "technical",
    sentiment: "neutral",
    template:
      "Symmetrical triangle forming, indicating compression. Direction of breakout will set the next major trend.",
  },
  {
    id: "pattern_wedge_falling_1",
    category: "technical",
    sentiment: "bullish",
    template:
      "Falling wedge pattern in progress. This bullish formation typically breaks upward with conviction.",
  },
  {
    id: "pattern_wedge_rising_1",
    category: "technical",
    sentiment: "bearish",
    template:
      "Rising wedge pattern forming. Despite higher highs, this is a bearish pattern that typically breaks down.",
  },
];

// Fundamental Analysis Templates (100+ variations)
export const fundamentalTemplates: ResponseTemplate[] = [
  // P/E Ratio Analysis
  {
    id: "pe_undervalued_1",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "P/E ratio of {pe} is significantly below sector average of {sectorPE}. This value discount presents an attractive entry point.",
  },
  {
    id: "pe_undervalued_2",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "At {pe}x earnings, valuation appears compelling versus historical average of {histAvg}x. Potential multiple expansion ahead.",
  },
  {
    id: "pe_undervalued_3",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "Current P/E of {pe} trades at 30% discount to peers. The market may be underappreciating growth potential.",
  },
  {
    id: "pe_undervalued_4",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "P/E ratio compressed to {pe} despite stable fundamentals. This valuation gap often corrects higher over 12 months.",
  },
  {
    id: "pe_overvalued_1",
    category: "fundamental",
    sentiment: "bearish",
    template:
      "P/E ratio of {pe} significantly exceeds sector average of {sectorPE}. Premium valuation leaves little margin for error.",
  },
  {
    id: "pe_overvalued_2",
    category: "fundamental",
    sentiment: "bearish",
    template:
      "At {pe}x earnings, valuation stretched versus historical norms. Any earnings disappointment could trigger multiple contraction.",
  },
  {
    id: "pe_overvalued_3",
    category: "fundamental",
    sentiment: "bearish",
    template:
      "Current P/E of {pe} trades at 40% premium to peers. Growth expectations may be priced in; upside limited.",
  },
  {
    id: "pe_justified_1",
    category: "fundamental",
    sentiment: "neutral",
    template:
      "P/E of {pe} appears fair relative to growth rate. PEG ratio near 1.0 suggests reasonable valuation.",
  },

  // Revenue/Earnings Growth
  {
    id: "growth_accelerating_1",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "Revenue growth accelerated to {growth}% YoY, up from {prevGrowth}% last quarter. Positive momentum building.",
  },
  {
    id: "growth_accelerating_2",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "EPS growth of {growth}% significantly beat consensus by {beat}%. Analysts likely to revise estimates higher.",
  },
  {
    id: "growth_accelerating_3",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "Triple-digit revenue growth at {growth}% demonstrates powerful product-market fit. Hypergrowth phase continues.",
  },
  {
    id: "growth_decelerating_1",
    category: "fundamental",
    sentiment: "bearish",
    template:
      "Revenue growth decelerated to {growth}% from {prevGrowth}%. Law of large numbers weighing on expansion.",
  },
  {
    id: "growth_decelerating_2",
    category: "fundamental",
    sentiment: "bearish",
    template:
      "EPS growth of {growth}% missed estimates by {miss}%. Guidance may need revision lower.",
  },
  {
    id: "growth_negative_1",
    category: "fundamental",
    sentiment: "bearish",
    template:
      "Revenue declined {decline}% YoY, marking third consecutive quarter of contraction. Turnaround not yet evident.",
  },

  // Margins & Profitability
  {
    id: "margin_expanding_1",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "Operating margin expanded to {margin}%, up {expansion} bps YoY. Demonstrates pricing power and operational efficiency.",
  },
  {
    id: "margin_expanding_2",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "Gross margin at {margin}% exceeds industry average. Premium brand positioning driving superior profitability.",
  },
  {
    id: "margin_expanding_3",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "EBITDA margin of {margin}% reflects strong operating leverage. Incremental revenue dropping to bottom line.",
  },
  {
    id: "margin_contracting_1",
    category: "fundamental",
    sentiment: "bearish",
    template:
      "Operating margin compressed to {margin}%, down {contraction} bps YoY. Cost pressures impacting profitability.",
  },
  {
    id: "margin_contracting_2",
    category: "fundamental",
    sentiment: "bearish",
    template:
      "Gross margin at {margin}% trails industry peers. Competitive pressure limiting pricing power.",
  },

  // Balance Sheet & Cash Flow
  {
    id: "balance_strong_1",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "Net cash position of {cash}B provides significant financial flexibility. Zero debt concerns for this name.",
  },
  {
    id: "balance_strong_2",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "Current ratio of {ratio} indicates ample liquidity. Short-term obligations easily covered by liquid assets.",
  },
  {
    id: "balance_strong_3",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "Free cash flow of {fcf}B enables buybacks, dividends, and reinvestment. Shareholder-friendly capital allocation.",
  },
  {
    id: "balance_weak_1",
    category: "fundamental",
    sentiment: "bearish",
    template:
      "Debt-to-equity of {ratio} elevated versus peers. Leverage concerns could limit strategic flexibility.",
  },
  {
    id: "balance_weak_2",
    category: "fundamental",
    sentiment: "bearish",
    template:
      "Negative free cash flow of {fcf}B raises funding concerns. Additional capital raises possible.",
  },

  // Dividend Analysis
  {
    id: "dividend_aristocrat_1",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "Dividend Aristocrat with {years}+ years of consecutive increases. Current yield of {yield}% with {growth}% annual growth.",
  },
  {
    id: "dividend_yield_1",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "Dividend yield of {yield}% significantly above sector average. Sustainable payout ratio of {payout}% supports income.",
  },
  {
    id: "dividend_growth_1",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "Dividend increased {growth}% this year, marking {years}th consecutive annual raise. Management committed to shareholder returns.",
  },
  {
    id: "dividend_cut_1",
    category: "fundamental",
    sentiment: "bearish",
    template:
      "Dividend reduced by {cut}% to preserve cash. Signals management concern about near-term outlook.",
  },
  {
    id: "dividend_risk_1",
    category: "fundamental",
    sentiment: "bearish",
    template:
      "Payout ratio of {payout}% appears unsustainable. Dividend at risk if earnings don't recover.",
  },

  // Industry Position
  {
    id: "moat_wide_1",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "Wide economic moat from {source}. Competitive advantages should sustain above-average returns on capital.",
  },
  {
    id: "moat_wide_2",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "Market leader with {share}% share in growing TAM. Network effects create barriers to entry.",
  },
  {
    id: "moat_narrow_1",
    category: "fundamental",
    sentiment: "neutral",
    template:
      "Narrow moat business facing increased competition. Must continue innovating to maintain margins.",
  },
  {
    id: "moat_none_1",
    category: "fundamental",
    sentiment: "bearish",
    template:
      "Commoditized business with limited pricing power. Competition eroding margins and returns.",
  },

  // Management & Governance
  {
    id: "mgmt_strong_1",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "CEO with proven track record of value creation. Insider buying signals management confidence.",
  },
  {
    id: "mgmt_insider_1",
    category: "fundamental",
    sentiment: "bullish",
    template:
      "Significant insider ownership aligns management with shareholders. Skin in the game promotes long-term focus.",
  },
  {
    id: "mgmt_weak_1",
    category: "fundamental",
    sentiment: "bearish",
    template:
      "Recent management turnover creates execution uncertainty. New leadership needs to prove credibility.",
  },
  {
    id: "mgmt_selling_1",
    category: "fundamental",
    sentiment: "bearish",
    template:
      "Insider selling activity elevated in recent months. While not always bearish, warrants attention.",
  },
];

// Market Condition Templates (50+ variations)
export const marketConditionTemplates: ResponseTemplate[] = [
  {
    id: "bull_market_1",
    category: "market",
    sentiment: "bullish",
    template:
      "Broad market in confirmed bull trend with major indices at new highs. Risk-on environment favors growth assets.",
  },
  {
    id: "bull_market_2",
    category: "market",
    sentiment: "bullish",
    template:
      "Market breadth strong with 70% of stocks above 200-day MA. Healthy participation confirms bull market health.",
  },
  {
    id: "bull_market_3",
    category: "market",
    sentiment: "bullish",
    template:
      "VIX at {vix} signals low fear and complacency. Bull markets climb walls of worry; trend remains up.",
  },
  {
    id: "bear_market_1",
    category: "market",
    sentiment: "bearish",
    template:
      "Broad market in bear territory, down 20%+ from highs. Defensive positioning and capital preservation key.",
  },
  {
    id: "bear_market_2",
    category: "market",
    sentiment: "bearish",
    template:
      "Market breadth deteriorating with 65% of stocks below 200-day MA. Bear market conditions require caution.",
  },
  {
    id: "bear_market_3",
    category: "market",
    sentiment: "bearish",
    template:
      "VIX spiking to {vix} reflects elevated fear. Bear markets tend to be faster and more violent than bulls.",
  },
  {
    id: "correction_1",
    category: "market",
    sentiment: "neutral",
    template:
      "Market correction of 10-15% from highs. Normal pullback in ongoing bull trend; may present buying opportunity.",
  },
  {
    id: "correction_2",
    category: "market",
    sentiment: "neutral",
    template:
      "Healthy correction underway after extended rally. Corrections are normal and necessary for bull market health.",
  },
  {
    id: "consolidation_1",
    category: "market",
    sentiment: "neutral",
    template:
      "Market in range-bound consolidation between {low} and {high}. Await breakout direction for next trend signal.",
  },
  {
    id: "rotation_1",
    category: "market",
    sentiment: "neutral",
    template:
      "Sector rotation underway from {from} to {to}. Relative strength shifting; portfolio rebalancing recommended.",
  },
  {
    id: "fed_hawkish_1",
    category: "market",
    sentiment: "bearish",
    template:
      "Fed signaling hawkish stance with rate hikes likely. Higher rates typically pressure equity valuations.",
  },
  {
    id: "fed_dovish_1",
    category: "market",
    sentiment: "bullish",
    template:
      "Fed pivot to dovish tone supporting risk assets. Rate cuts historically bullish for equities.",
  },
  {
    id: "inflation_high_1",
    category: "market",
    sentiment: "bearish",
    template:
      "Inflation running at {rate}% pressuring margins and consumer spending. Value and dividend stocks may outperform.",
  },
  {
    id: "inflation_low_1",
    category: "market",
    sentiment: "bullish",
    template:
      "Inflation cooling to {rate}%, easing pressure on Fed to tighten. Goldilocks scenario for risk assets.",
  },
  {
    id: "earnings_season_1",
    category: "market",
    sentiment: "neutral",
    template:
      "Earnings season underway with {beat}% of companies beating estimates. Corporate fundamentals remain solid.",
  },
  {
    id: "geopolitical_1",
    category: "market",
    sentiment: "bearish",
    template:
      "Geopolitical tensions creating uncertainty. Risk-off flows benefiting safe havens; maintain defensive bias.",
  },
  {
    id: "geopolitical_2",
    category: "market",
    sentiment: "neutral",
    template:
      "Geopolitical situation stabilizing. Markets historically resilient to political risks; focus on fundamentals.",
  },
];

// Investment Strategy Templates (100+ variations)
export const strategyTemplates: ResponseTemplate[] = [
  // Buy Recommendations
  {
    id: "buy_strong_1",
    category: "strategy",
    sentiment: "bullish",
    template:
      "**Strong Buy**: Technical and fundamental indicators aligned bullish. Consider initiating position with {size}% portfolio allocation.",
  },
  {
    id: "buy_strong_2",
    category: "strategy",
    sentiment: "bullish",
    template:
      "**Conviction Buy**: Risk/reward highly favorable at current levels. Target entry at ${entry} with stop at ${stop}.",
  },
  {
    id: "buy_strong_3",
    category: "strategy",
    sentiment: "bullish",
    template:
      "**Accumulate**: Quality asset at attractive valuation. Dollar-cost average over next {weeks} weeks.",
  },
  {
    id: "buy_dip_1",
    category: "strategy",
    sentiment: "bullish",
    template:
      "**Buy the Dip**: Pullback to support offers entry in ongoing uptrend. Use weakness as accumulation opportunity.",
  },
  {
    id: "buy_dip_2",
    category: "strategy",
    sentiment: "bullish",
    template:
      "**Tactical Entry**: Oversold bounce setup developing. Scale into position with defined risk at ${stop}.",
  },
  {
    id: "buy_breakout_1",
    category: "strategy",
    sentiment: "bullish",
    template:
      "**Breakout Trade**: Buy on confirmed break above ${resistance} with volume. Trail stop to lock profits.",
  },
  {
    id: "buy_breakout_2",
    category: "strategy",
    sentiment: "bullish",
    template:
      "**Momentum Entry**: Breakout with relative strength. Enter on retest of prior resistance as new support.",
  },

  // Hold Recommendations
  {
    id: "hold_1",
    category: "strategy",
    sentiment: "neutral",
    template:
      "**Hold**: Current price reflects fair value. No compelling reason to add or reduce at these levels.",
  },
  {
    id: "hold_2",
    category: "strategy",
    sentiment: "neutral",
    template:
      "**Maintain Position**: Thesis intact but near-term catalysts limited. Continue holding for long-term appreciation.",
  },
  {
    id: "hold_3",
    category: "strategy",
    sentiment: "neutral",
    template:
      "**Hold with Caution**: Mixed signals suggest patience. Wait for clearer direction before position changes.",
  },
  {
    id: "hold_tighten_1",
    category: "strategy",
    sentiment: "neutral",
    template:
      "**Hold - Tighten Stops**: Momentum weakening. Raise stop-loss to ${stop} to protect gains.",
  },

  // Sell Recommendations
  {
    id: "sell_1",
    category: "strategy",
    sentiment: "bearish",
    template:
      "**Sell**: Risk/reward turned unfavorable. Take profits and reallocate to higher conviction ideas.",
  },
  {
    id: "sell_2",
    category: "strategy",
    sentiment: "bearish",
    template:
      "**Strong Sell**: Technical breakdown and deteriorating fundamentals. Exit position to preserve capital.",
  },
  {
    id: "sell_partial_1",
    category: "strategy",
    sentiment: "neutral",
    template:
      "**Trim Position**: After strong run, reduce exposure by {percent}%. Let remaining position ride with trailing stop.",
  },
  {
    id: "sell_partial_2",
    category: "strategy",
    sentiment: "neutral",
    template:
      "**Take Partial Profits**: Secure gains on {percent}% of position. Maintain core holding for long-term upside.",
  },
  {
    id: "sell_stop_1",
    category: "strategy",
    sentiment: "bearish",
    template:
      "**Stop-Loss Triggered**: Exit immediately as risk management protocol activated. Reassess after dust settles.",
  },

  // Risk Management
  {
    id: "risk_position_1",
    category: "strategy",
    sentiment: "neutral",
    template:
      "**Position Sizing**: Limit position to {max}% of portfolio to manage risk. Volatility requires prudent allocation.",
  },
  {
    id: "risk_stop_1",
    category: "strategy",
    sentiment: "neutral",
    template:
      "**Stop-Loss**: Place protective stop at ${stop}, risking {risk}% of position. Never risk more than 2% per trade.",
  },
  {
    id: "risk_hedge_1",
    category: "strategy",
    sentiment: "neutral",
    template:
      "**Hedge Recommendation**: Consider protective puts or collar strategy to limit downside exposure.",
  },
  {
    id: "risk_diversify_1",
    category: "strategy",
    sentiment: "neutral",
    template:
      "**Diversification Alert**: Sector concentration elevated. Consider rebalancing across uncorrelated assets.",
  },

  // Time Horizon
  {
    id: "horizon_short_1",
    category: "strategy",
    sentiment: "neutral",
    template:
      "**Short-Term Trade**: Technical setup for 1-4 week hold. Target ${target} with stop at ${stop}.",
  },
  {
    id: "horizon_medium_1",
    category: "strategy",
    sentiment: "neutral",
    template:
      "**Medium-Term Position**: 3-6 month investment horizon. Fundamental catalyst expected by {date}.",
  },
  {
    id: "horizon_long_1",
    category: "strategy",
    sentiment: "bullish",
    template:
      "**Long-Term Investment**: Buy and hold for 1-3 years. Compounding thesis intact; ignore short-term noise.",
  },

  // Entry Strategies
  {
    id: "entry_scale_1",
    category: "strategy",
    sentiment: "bullish",
    template:
      "**Scaling Strategy**: Enter 1/3 position now, add at ${level1} and ${level2} on confirmed strength.",
  },
  {
    id: "entry_limit_1",
    category: "strategy",
    sentiment: "bullish",
    template:
      "**Limit Order**: Set buy order at ${limit}, targeting pullback to support for optimal entry.",
  },
  {
    id: "entry_wait_1",
    category: "strategy",
    sentiment: "neutral",
    template:
      "**Wait for Confirmation**: On watchlist pending breakout above ${trigger} with volume confirmation.",
  },
];
