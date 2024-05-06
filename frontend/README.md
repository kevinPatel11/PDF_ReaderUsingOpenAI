# Capstone Project - Web Development

## Overview
This repository is for the Capstone project for Group 7, Section 3, of the Web Development course at Conestoga College.

## Getting Started

Install the node_modules first by :

```bash
npm install
```
### Environment Variables
Create a file named `.env.local` in the root directory of the project and add the following content to configure the environment variables needed for authentication and services:

```plaintext
# Google OAuth Credentials
GOOGLE_ID=173164704887-o09orq83rvd46hhh2db3hma1qb0ehdsv.apps.googleusercontent.com
GOOGLE_SECRET=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

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=ThiISAUthetucationShhssshSecretkey

```

### Start the development server:

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
