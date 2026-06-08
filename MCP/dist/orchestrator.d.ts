/**
 * MCP Orchestrator — Tool Registry & Pay-Per-Use Dispatch
 *
 * The architectural centrepiece of Solana Clawd MCP v2.
 *
 * Every tool is a `ToolDef` datum — description, schema, category, optional
 * cost in micro-USDC, and a handler. The Orchestrator owns the registry and
 * the per-session billing ledger. Premium tools (leviathan_tick,
 * market_signal, etc.) deduct from the session's USDC budget before running.
 *
 * Payment is tracked locally for now; the ledger is written to
 * ~/.config/solana-claude/x402-payments.jsonl and can be settled on-chain
 * via pay.solanaclawd.com at session end.
 */
export type ToolCategory = "solana" | "helius" | "x402" | "leviathan" | "pump" | "memory" | "agents" | "chess" | "market";
export interface InputSchema {
    type: "object";
    properties: Record<string, unknown>;
    required?: string[];
}
export interface ToolDef {
    name: string;
    description: string;
    inputSchema: InputSchema;
    category: ToolCategory;
    /**
     * Pay-per-use cost in micro-USDC (1 USDC = 1,000,000 µUSDC).
     * Tools with a cost deduct from the session meter before executing.
     * Omit for free tools.
     */
    cost?: number;
}
export type ToolHandler = (args: Record<string, unknown>) => Promise<unknown>;
export interface BillingEntry {
    tool: string;
    costMicro: number;
    at: string;
}
export declare class SessionMeter {
    private spent;
    private log;
    readonly maxMicro: number;
    constructor(maxUSDC?: number);
    remainingBudget(): number;
    charge(micro: number, tool: string): void;
    summary(): {
        spentUSDC: string;
        remainingUSDC: string;
        maxUSDC: string;
        calls: BillingEntry[];
    };
    private persistAsync;
}
export declare class Orchestrator {
    private readonly defs;
    private readonly handlers;
    register(def: ToolDef, handler: ToolHandler): this;
    registerAll(entries: Array<[ToolDef, ToolHandler]>): this;
    list(): ToolDef[];
    categories(): Record<ToolCategory, string[]>;
    dispatch(name: string, args: Record<string, unknown>, meter: SessionMeter): Promise<unknown>;
}
