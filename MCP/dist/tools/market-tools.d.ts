/**
 * Composite Market Intelligence Tools for Solana Clawd MCP
 *
 * These tools aggregate signals from multiple sources into actionable
 * market intelligence — going beyond individual data points:
 *
 *   market_signal          — Composite signal: trending + pump + price + regime
 *   market_regime          — Bull / bear / crab / pump regime detection
 *   smart_money_flow       — Multi-wallet flow analysis (follow smart money)
 *   compute_unit_optimizer — P-token vs SPL fee comparison for any tx profile
 *   token_heat_map         — Visualise trending momentum across the market
 *
 * These are the "premium" tools — they synthesise multiple API calls into
 * a single structured intelligence report.
 */
import type { ToolDef, ToolHandler } from "../orchestrator.js";
export declare const MARKET_TOOLS: Array<[ToolDef, ToolHandler]>;
