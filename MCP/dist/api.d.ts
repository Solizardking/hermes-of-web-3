/**
 * Shared API helpers for all MCP tool modules.
 * Read from env at call time so the module can be imported before env is set.
 */
export declare const HELIUS_KEY: () => string;
export declare const HELIUS_RPC: () => string;
export declare function solanaTracker(path: string): Promise<unknown>;
export declare function coingeckoPrice(ids: string): Promise<unknown>;
export declare function jupiterPrice(mint: string): Promise<unknown>;
export declare function heliusRPC(method: string, params: unknown[]): Promise<unknown>;
export declare function heliusREST(endpoint: string, opts?: {
    method?: string;
    body?: unknown;
}): Promise<unknown>;
