// ── Auth Module ──
// Phase 7: mock authentication with Better Auth-compatible interface
// Phase 8: connects to Better Auth + D1

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  tier: string;
  initials: string;
}

export interface AuthSession {
  user: AuthUser;
  expires: string;
}

// Mock user database
const MOCK_USERS: Record<string, { password: string; user: AuthUser }> = {
  "nasrul@tradings.io": {
    password: "password123",
    user: {
      id: "user-1",
      name: "Nasrul",
      email: "nasrul@tradings.io",
      tier: "Premium",
      initials: "N",
    },
  },
};

// Mock session storage (in-memory — resets on server restart)
let currentSession: AuthSession | null = null;

export async function signIn(email: string, password: string): Promise<AuthSession | null> {
  const entry = MOCK_USERS[email];
  if (!entry || entry.password !== password) {
    return null;
  }

  currentSession = {
    user: entry.user,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };

  return currentSession;
}

export async function signUp(name: string, email: string, password: string): Promise<AuthSession | null> {
  if (MOCK_USERS[email]) {
    return null; // Email already exists
  }

  const user: AuthUser = {
    id: `user-${Date.now()}`,
    name,
    email,
    tier: "Free",
    initials: name.charAt(0).toUpperCase(),
  };

  MOCK_USERS[email] = { password, user };

  currentSession = {
    user,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };

  return currentSession;
}

export async function signOut(): Promise<void> {
  currentSession = null;
}

export async function getSession(): Promise<AuthSession | null> {
  if (currentSession && new Date(currentSession.expires) > new Date()) {
    return currentSession;
  }
  currentSession = null;
  return null;
}
