// ── Application Configuration ──

export const config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8787",
    wsUrl: process.env.NEXT_PUBLIC_WS_URL ?? "ws://localhost:8787/ws",
  },
  useMock: process.env.NEXT_PUBLIC_USE_MOCK !== "false", // Default to mock
} as const;
