/**
 * solana-clawd MCP Server v2 — Orchestrated Command & Control
 *
 * Architecture: every tool is a registered ToolDef dispatched through the
 * Orchestrator. Premium tools deduct from the session billing meter.
 * The MCP layer is now the control plane for the entire Solana Clawd framework.
 *
 * Tool categories:
 *   solana   (11) — Public Solana market data, free
 *   helius   (8)  — Helius RPC/DAS/Webhooks, requires HELIUS_API_KEY
 *   x402     (8)  — Payment protocol + p-token metered billing
 *   leviathan(9)  — OODA loop + autonomous agent control
 *   market   (5)  — Composite intelligence, some premium
 *   pump     (8)  — Pump.fun bonding curve
 *   memory   (4)  — Persistent agent memory + autoDream
 *   agents   (3)  — Agent fleet management
 *   chess    (7)  — Chess.com (autonomous agent chess)
 */
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
export declare function createServer(): Server;
export declare function validateSrcRoot(): Promise<void>;
