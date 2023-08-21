
# Full Stack MERN Next.js 13 Threads App | React, Next JS, TypeScript, MongoDB

![Screenshot (274)](https://github.com/raahulvinod/project_threads/assets/120365941/4394fc83-e924-4370-ab4f-e865b38b0490)

This is a repository for a Full Stack Thread Clone with Next.js 13 App Router: React, Tailwind, MongoDB, Clerk.


- Tailwind design
- Full responsiveness
- Clerk for authentication
- Handle file uploads with UploadThing
- Using Shadcn components
- Listen to real-time events with webhooks
- middleware, API actions, and authorization
- Validate data with Zod
- Manage forms with react hook form
- Create reusable components

### Cloning the repository

```shell
git clone https://github.com/raahulvinod/project_threads.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

MONGODB_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
