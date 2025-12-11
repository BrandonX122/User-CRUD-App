This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
User App

A simple Next.js CRUD application that allows you to create, view, edit, and delete user profiles.
Each profile includes first name, last name, email, and birthday, and the app automatically calculates the user's age.
The UI uses shadcn/ui and Tailwind CSS, and the backend runs on JSON Server using lib/db.json.

🚀 Tech Stack

Next.js (App Router)

TypeScript

shadcn/ui

Tailwind CSS

JSON Server (local REST API)

📁 Project Structure
/app
  /users
    page.tsx
    [id]/page.tsx
/components
/lib
  db.json

🛠️ Getting Started
1. Install dependencies
npm install

▶️ Running the Next.js App
npm run dev


Open your browser and visit:

http://localhost:3000

🗄️ Running JSON Server

This project uses lib/db.json as a small local database.

Run JSON Server on port 3001:

npx json-server lib/db.json --port 3001
