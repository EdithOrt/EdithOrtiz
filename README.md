# Edith Ortiz Portfolio

<div align="center">

  <img alt="GitHub deployments" src="https://img.shields.io/github/deployments/EdithOrt/EdithOrtiz/Production">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EdithOrt/EdithOrtiz">
  
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/t/EdithOrt/EdithOrtiz?color=FF9341">

  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/EdithOrt/EdithOrtiz">

  <img alt="Followers" src="https://img.shields.io/github/followers/EdithOrt">

</div>

Personal portfolio as a front end developer with Javascript, Typescript, React, Next js, CSS, HTML, etc.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Folder Structure](#folder-structure)
- [Contributors](#contributors)

## Installation

```bash
git clone https://github.com/EdithOrt/EdithOrtiz.git
cd EdithOrtiz
npm install
```

## Usage

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open http://localhost:3000 in your browser
```

## Dependencies

- React
- React-dom
- Next
- Next-images
- hookform/resolvers
- dotenv
- Typescript
- react-hook-form
- resend
- swiper
- Eslint
- zod
- sass

## Folder Structure

```bash
EdithOrtiz/
│
├── public/
│ ├── favicon.ico
│ ├── EDITH-ORTIZ-CV-en.pdf
│ ├── edith-ortiz.png
│ └── logo-eoc.svg
│
│
├── app/
│ ├── lib/
│ │ ├── emailTemplate.tsx
│ │ ├── sendEmail.tsx
│ │ └── getProjectsImages.tsx
│ ├── ui/
│ │ ├── buttons/
│ │ │ ├── buttonAction.tsx
│ │ │ ├── buttonIcon.tsx
│ │ │ ├── buttonScroll.tsx
│ │ │ └── buttonScroll.tsx
│ │ │
│ │ ├── styles/
│ │ │ ├── aboutMe.module.scss
│ │ │ ├── buttons.module.scss
│ │ │ ├── contact.module.scss
│ │ │ ├── home.module.scss
│ │ │ ├── mixins.module.scss
│ │ │ ├── navbar.module.scss
│ │ │ ├── projects.module.scss
│ │ │ ├── skills.module.scss
│ │ │ ├── texts.module.scss
│ │ │ └── variables.module.scss
│ │ │
│ │ ├── aboutMeContainer.tsx
│ │ ├── contactForm.tsx
│ │ ├── fonts.ts
│ │ ├── homeContainer.tsx
│ │ ├── logo.tsx
│ │ ├── navbar.tsx
│ │ ├── paragraph.tsx
│ │ ├── projectItem.tsx
│ │ ├── projectsContainer.tsx
│ │ ├── skillsContainer.tsx
│ │ ├── svgComponent.tsx
│ │ └── title.tsx
│ │
│ ├── globals.scss
│ ├── layout.tsx
│ ├── page.tsx
│ └── page.module.scss
│
├── contexts/
│ └── getSection.tsx
│
├── .eslintrc.json
├── .gitignore
├── .env
├── aditional.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## Contributors

<a href="https://github.com/EdithOrt/EdithOrtiz/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=EdithOrt/EdithOrtiz" />
</a>
