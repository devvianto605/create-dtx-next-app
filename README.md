
<h1 align="center">
  DEVVIANTEX NEXT APP </br>
  create-dtx-next-app
</h1>

<p align="center">
  Extended version of create-t3-app created by Devviantex: create-dtx-next-app
</p>

<div align="center">
![image](https://github.com/user-attachments/assets/5ae5dce7-9d10-45d7-a0b4-10e6cfe8f37e)
</div>

<h2 id="about">The Devviantex Stack and its processor (T3 Stack)</h2>

The _"T3 Stack"_ is a web development stack made by [Theo](https://twitter.com/t3dotgg) focused on **simplicity**, **modularity**, and **full-stack typesafety**. It consists of:

- [Next.js](https://nextjs.org)
- [tRPC](https://trpc.io)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://typescriptlang.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [NextAuth.js](https://next-auth.js.org)

### So... what is `create-t3-app`? A template? and what's added in `create-dtx-app`?

Kind of? `create-t3-app` is a CLI built by seasoned T3 Stack devs to streamline the setup of a modular T3 Stack app. This means each piece is optional, and the "template" is generated based on your specific needs.

After countless projects and many years on this tech, we have lots of opinions and insights. We’ve done our best to encode them into this CLI.

This is **NOT** an all-inclusive template. We **expect** you to bring your own libraries that solve the needs of **YOUR** application. While we don’t want to prescribe solutions to more specific problems like state management and deployment, we [do have some recommendations listed here](https://create.t3.gg/en/other-recs).

Thus the t3 excellence, I - Devviantex decide to extend it with my often used stack as listed below.

<h2 id="about">The Deviantex Stack - What's added?</h2>

- [TanStack Query](https://tanstack.com/query/latest)
- [Axios](https://axios-http.com/)
- [React Hook Form](https://www.react-hook-form.com/)
- [chakra-ui](https://v2.chakra-ui.com/)
- [shadcn](https://ui.shadcn.com/)
- [NextAuth-FirebaseAdapter](https://next-auth.js.org/v3/adapters/firebase)
- [CryptoJS](https://cryptojs.gitbook.io/docs)
- [next-intl](https://next-intl-docs.vercel.app/)

<h2 id="getting-started">Getting Started</h2>

To scaffold an app using `create-dtx-next-app`, run any of the following four commands and answer the command prompt questions:

only npm is available for now!
### npm

```bash
npm create dtx-next-app@latest
```

For more advanced usage, check out the [CLI docs](https://create.t3.gg/en/installation).

Specifically for Devviantex version of CLI, the documentation is <u>coming soon</u>.
