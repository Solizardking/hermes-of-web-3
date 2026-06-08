/**
 * x402 + P-Token Tool Suite for Solana Clawd MCP
 *
 * These tools expose the x402 payment protocol and p-token metered billing
 * directly to Claude and any MCP-connected agent:
 *
 *   x402_status              — Protocol config + p-token stats
 *   x402_payment_history     — Local JSONL payment log
 *   x402_billing_status      — Session spend meter
 *   x402_ptoken_stats        — CU savings report (all-time)
 *   x402_session_open        — Open a p-token metered stream session
 *   x402_session_meter       — Record tokens consumed in a session
 *   x402_session_close       — Close session → final bill
 *   x402_facilitator_ping    — Health check pay.solanaclawd.com
 *   clawd_holder_check       — CLAWD token holder status + discount tier
 *
 * The metered session model (open → meter → close) is the core innovation:
 * p-token's 98% CU reduction makes per-output-token billing viable for the
 * first time. Agents can pre-authorise a budget, stream inference, and pay
 * only for what they consume — to the token.
 */
import type { ToolDef, ToolHandler, SessionMeter } from "../orchestrator.js";
export declare const X402_TOOLS: Array<[ToolDef, ToolHandler]>;
export declare function withMeter(tools: Array<[ToolDef, ToolHandler]>, meter: SessionMeter): Array<[ToolDef, ToolHandler]>;
