// ── Application Configuration ──

export const config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "",
    wsUrl: process.env.NEXT_PUBLIC_WS_URL ?? "",
  },
  useMock: true,
} as const;
