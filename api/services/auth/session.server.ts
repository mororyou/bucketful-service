import { createCookieSessionStorage } from '@remix-run/node';
const SESSION_SECRET = process.env.NODE_ENV || '';

if (!SESSION_SECRET) {
  throw new Error('SESSION_SECRETを設定してください。');
}

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secrets: [SESSION_SECRET],
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 30,
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;
