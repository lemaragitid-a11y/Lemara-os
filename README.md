# Lemara OS — Full-stack starter

Next.js frontend + authenticated API routes + Supabase PostgreSQL/Auth. Recommended host: Vercel.

## Setup
1. Create a project at https://supabase.com.
2. Run `supabase/schema.sql` in Supabase → SQL Editor.
3. Copy `.env.example` to `.env.local` and fill in the Supabase Project URL and anon/public key from Project Settings → API.
4. Install Node.js 20+, then run `npm install` and `npm run dev`.
5. Open http://localhost:3000.

## Deploy
1. Upload this folder to a new GitHub repository.
2. Import that repository at https://vercel.com.
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel Project Settings → Environment Variables.
4. Deploy. Vercel supplies a public `*.vercel.app` URL.
5. In Supabase → Authentication → URL Configuration, set Site URL and Redirect URL to your deployed Vercel URL.

## API routes
Authenticated JSON endpoints: `GET/POST /api/tasks`, `PATCH/DELETE /api/tasks/:id`, `GET/POST /api/projects`, `/api/reports`, `/api/contacts`, `/api/notes`.

## Security
The schema enables Row Level Security and ties records to `auth.uid()`. Never expose a service-role key in browser code or commit it to GitHub. Confirm you are authorized before storing confidential employer, school, student or community records.

This is a deploy-ready starter, not a live website yet. Publishing requires your Supabase/Vercel accounts and authorization; those accounts cannot be created or published into on your behalf from this chat.
