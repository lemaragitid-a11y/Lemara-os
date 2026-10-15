# Publish Lemara OS online (phone-friendly guide)

You need accounts you control on GitHub, Supabase and Vercel. Do not send passwords or secret keys in chat.

## Step 1 — Create Supabase database
1. Open https://supabase.com and sign in. Create a new project named `lemara-os`.
2. Wait until the project finishes setting up.
3. Open SQL Editor → New query.
4. Open `supabase/schema.sql` from this project, copy all its text into the SQL Editor, then press Run.
5. Go to Project Settings → API (or Connect, depending on the current dashboard). Copy the Project URL and the anon/public key. Never use or expose the service-role/secret key.

## Step 2 — Put the code in GitHub
1. Open https://github.com and create a new **private** repository named `lemara-os`.
2. On a computer, extract this ZIP, open the `Lemara_OS_Fullstack` folder and upload its files/folders to the repository (not the ZIP itself). Keep the folder structure.
3. If using only a phone, the GitHub web uploader may be awkward for many nested files; use a computer or a browser-based coding workspace that can import a ZIP. Do not publish `.env.local` or credentials.

## Step 3 — Deploy with Vercel
1. Open https://vercel.com and sign in with GitHub.
2. Choose Add New → Project and import the `lemara-os` repository.
3. Framework should be detected as Next.js. Root Directory should be the repository root (the folder containing `package.json`).
4. Before deploying, add Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon/public key
5. Click Deploy and wait for the build. Vercel will provide a `https://...vercel.app` address.

## Step 4 — Connect login callbacks
1. In Supabase, open Authentication → URL Configuration.
2. Set Site URL to your Vercel address.
3. Add the same Vercel address to the allowed Redirect URLs. Save.
4. Open the Vercel URL and create your account.

## Step 5 — Smoke test
- Sign up and sign in.
- Add a task, project, report and contact.
- Refresh the page and confirm they remain.
- Sign out and confirm dashboard requires sign-in.
- If you see a build/runtime error, open Vercel → project → Deployments → failed deployment → Build Logs and use the error to fix it.

## API endpoints
All endpoints require a signed-in user session:
- `GET/POST /api/tasks`
- `PATCH/DELETE /api/tasks/:id`
- `GET/POST /api/projects`
- `GET/POST /api/reports`
- `GET/POST /api/contacts`
- `GET/POST /api/notes`

This is a starter application. Before using it for sensitive workplace records, test permissions carefully and only store data you are authorized to keep. Hosting is not complete until the repository is imported, environment variables are added and Vercel reports a successful deployment.
