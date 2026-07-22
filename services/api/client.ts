// ── API Client ──
// Abstracts fetch() so service modules don't depend on the transport.
// Phase 3: returns null (mock data used instead)
// Phase 5: connects to Cloudflare Workers

import { config } from "@/lib";

type ApiResult<T> =
  | { success: true; data: T }
  | { success: false; error: { code: string; message: string } };

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<ApiResult<T>> {
  if (config.useMock) {
    // In mock mode, return null — services will use mock data instead
    return { success: false, error: { code: "MOCK", message: "Mock mode — no API call made" } };
  }

  try {
    const res = await fetch(`${config.api.baseUrl}${path}`, {
      ...options,
      headers: { "Content-Type": "application/json", ...options?.headers },
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({ message: "Network error" }));
      return { success: false, error: { code: String(res.status), message: error.message } };
    }

    const data = await res.json();
    return { success: true, data };
  } catch (err) {
    return {
      success: false,
      error: { code: "NETWORK", message: err instanceof Error ? err.message : "Unknown error" },
    };
  }
}
