<a href="https://windrose.vercel.app/">
  <h1 align="center">Windrose</h1>
<a href="https://windrose.vercel.app/">
  <h1 align="center">Windrose</h1>
</a>

<p align="center">
<img alt="OG" src="public/images/windroseLogo.png" />
</p>

<!-- <p align="center">
Windrose is built on top of Next CRM, which is a CRM build on top of the Next.JS 14 using TypeScript, great UI library shadcn, Prisma and MongoDB as a database. Upload things as a S3 blob for document storage.
Windrose is built on top of Next CRM, which is a CRM build on top of the Next.JS 14 using TypeScript, great UI library shadcn, Prisma and MongoDB as a database. Upload things as a S3 blob for document storage.
</p> -->


<p align="center">
   <a href="#online-demo"><strong>Introduction</strong></a> ·
   <a href="#tech-stack--features"><strong>Tech Stack + Features</strong></a> ·
   <a href="#roadmap"><strong>Roadmap</strong></a> ·
   <a href="#installation"><strong>Installation</strong></a> ·
   <a href="#repo-activity"><strong>Repo activity</strong></a> ·
   <a href="#license"><strong>License</strong></a> ·
   <a href="https://discord.gg/dHyxhTEzUb"><strong>Discord</strong>
</p>
<br/>

## Online Demo

You can try it here [app.windrose.dev](https://app.windrose.dev), login via Google account or create new user and password.

## Tech Stack + Features

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience
- [Auth.js](https://authjs.dev/) – Handle user authentication with ease with providers like Google, Twitter, GitHub, etc.
- [Prisma](https://www.prisma.io/) – Typescript-first ORM for Node.js
- [React Email](https://react.email/) – Versatile email framework for efficient and flexible email development

### Platforms

- [Vercel](https://vercel.com/) – Easily preview & deploy changes with git
- [Mongo DB Atlas](https://mongodb.com/) – A database platform for seamless, scalable data management
- [Resend](https://resend.com/) – A powerful email framework for streamlined email development together with [react.email](https://react.email)

### Data fetching

- [SWR](https://swr.vercel.app/) – React Hooks library for remote data fetching
- [Axios](https://axios-http.com/) – Promise based HTTP client for the browser and node.js
- [Server Actions]() - for server side data fetching
- [Tanstack/react-query](https://react-query.tanstack.com/) - for server/client side data fetching

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Shadcn/ui](https://ui.shadcn.com/) – Re-usable components built using Radix UI and Tailwind CSS
- [Tremor](https://www.tremor.so/) – A platform for creating charts
- [react.email](https://react.email) - together with [resend.com](https://resend.com)

### AI

- [OpenAI API](https://openai.com/blog/openai-api) - for automated email notifications generated by AI
- [Rossum](https://rossum.ai/) - for invoice data parsing with AI

## 

## Emails

We use [resend.com](https://resend.com) + [react.email](https://react.email) as primary email sender and email templates.

## Reports

We use Tremor charts as a tool for creating charts in Windrose


## Installation

<details><summary><b>Show instructions</b></summary>

1. Clone the repository:

   ```sh
   git clone https://github.com/drod1107/windrose.git
   cd windrose
   git clone https://github.com/drod1107/windrose.git
   cd windrose
   ```

1. Install the preset:

   ```sh
   npm install
   ```

1. Copy the environment variables to .env

   ```sh
   cp .env.example .env
   ```

   ```sh
   cp .env.local.example .env.local
   ```

   **.env**

   > > - You will need mongodb URI string for Prisma ORM

   **.env.local**

   > > - NextAUTH - for auth
   > > - uploadthings - for storing files
   <!-- Rossum has been temporarily disabled with plans to migrate to Gemini OCR -->
   <!-- > > - rossum - for invoice data exporting -->
   > > - openAI - for automatic Project management assistant
   > > - SMPT and IMAP for emails

1. Init Prisma

   ```sh
    npx prisma generate
    npx prisma db push
   ```

1. Import initial data from initial-data folder

   ```sh
   npx prisma db seed
   ```

1. Run app on local

   ```sh
   npm run dev
   ```

1. http://localhost:3000

</details>

## Contact

[www.windroseandco.com](https://www.windroseandco.com)
[www.windroseandco.com](https://www.windroseandco.com)
</br>

### Issues

- [Open an issue](https://github.com/drod1107/windrose/issues) if you find a bug or have a suggestion for improvements.
- [Open an issue](https://github.com/drod1107/windrose/issues) if you find a bug or have a suggestion for improvements.

## License

Licensed under strict commercial use only for all proprietary additions. 

Originated work from NextCRM is licensed under the [MIT license](https://github.com/drod1107/windrose/blob/main/LICENSE).
