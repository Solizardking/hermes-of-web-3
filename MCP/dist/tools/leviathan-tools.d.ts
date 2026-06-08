/**
 * Leviathan + OODA Control Tools for Solana Clawd MCP
 *
 * These tools wire the MCP layer directly to the Leviathan autonomous agent
 * and the OODA loop system. Claude (or any MCP client) can now:
 *
 *   leviathan_status      — Read current agent state (depth, tick, SHELL.md)
 *   leviathan_journal     — Inspect recent SENSE→THINK→STRIKE→DRIFT entries
 *   leviathan_shell_read  — Read the agent's working memory (SHELL.md)
 *   leviathan_shell_write — Append observations to SHELL.md
 *   leviathan_three_laws  — Print the Three Laws constitution
 *   leviathan_tick_request — Write a tick request file (loop polls it)
 *   ooda_observe          — Structured OBSERVE phase with market signals
 *   ooda_orient           — ORIENT: pattern match against memory + SHELL
 *   ooda_decide           — DECIDE: structured decision block
 *   ooda_act              — ACT: record action to journal + SHELL
 *
 * Communication with the Leviathan process is file-based:
 *   ~/.openclawd/leviathan/state.json    — agent heartbeat (written by loop)
 *   ~/.openclawd/leviathan/SHELL.md      — agent working memory
 *   ~/.openclawd/leviathan/journal.jsonl — strike history
 *   ~/.openclawd/leviathan/tick.request  — MCP → loop signal
 */
import type { ToolDef, ToolHandler } from "../orchestrator.js";
export declare const LEVIATHAN_TOOLS: Array<[ToolDef, ToolHandler]>;
