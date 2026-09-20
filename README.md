# AI Trade Tutor — Expanded V1

A scalable vocational-learning platform foundation with 40+ trade paths, visual lessons, AI tutoring, practice scenarios, quizzes, progress tracking and certificates planned.

## Included trade paths
Electrical, Solar, Electronics, Inverter/Battery, CCTV, Networking, Generator Maintenance, Auto Mechanics, Motorcycle Mechanics, Diesel, Mechanical Engineering, Machine Maintenance, Welding, Metalwork, Carpentry, Plumbing, Masonry, Tiling, Painting, Roofing, POP/Ceiling, Aluminium & Glass, Refrigeration, Air Conditioning/HVAC, Appliance Repair, Washing Machine Repair, Industrial Production, Machine Operation, CNC, Technical Drawing, Quality Control, Computer Hardware, Web Development, Mobile Development, Robotics, Fashion, Shoe Making/Leatherwork, Furniture, Barbering, Beauty, Poultry, Fish Farming and Food Processing.

## Run
npm install
cp .env.example .env.local
npm run dev

## Next implementation
Wire Supabase Auth, database-driven courses/lessons, Supabase Storage visuals, AI Gateway tutor API, quizzes/scoring, progress, certificates and admin content management.


## Supabase connection
1. Create a Supabase project.
2. In SQL Editor, run `supabase/schema.sql`. This creates the expanded trade catalogue, courses/modules/lessons, RLS policies, auth profile trigger, and the `lesson-assets` storage bucket.
3. Copy the Project URL and anon/publishable key into `.env.local` as `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. In Authentication > URL Configuration, add your Vercel site URL and local `http://localhost:3000` as allowed URLs.
5. Run `npm install && npm run dev`.

The app now uses Supabase Auth for signup/login, Supabase Postgres for trades and lessons, Storage URLs for lesson visuals, and Supabase RLS for student progress.
