# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Local REST API (localhost)

This project now includes a local backend in `server/index.js` with file storage in `server/db.json`.

Run frontend and backend in separate terminals:

```bash
npm run dev
```

```bash
npm run server
```

Base URL:

```text
http://localhost:5000/api
```

Available endpoints:

- `GET /api/health`
- `POST /api/signup`
- `POST /api/signin`
- `GET /api/users`
- `GET /api/users/:id`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`
- `GET /api/pets`
- `GET /api/pets/:id`
- `POST /api/pets`
- `PUT /api/pets/:id`
- `DELETE /api/pets/:id`

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Project Structure

```
ADOPTPET/
├── public/
│   └── assets/              # Static images (dog.jpeg, pet photos, etc.)
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx           # Top nav: logo, links, search, user icons
│   │   │   └── Footer.jsx           # Footer: logo, nav links
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.jsx             # "Adopt. Don't Shop." + hero dog image
│   │   │   ├── HowItWorks.jsx       # 3-step process: Find → Know → Take Home
│   │   │   ├── WaitingAdoption.jsx  # Pet filter tabs + pet cards grid
│   │   │   ├── WhatWeOffer.jsx      # Services section with center dog image
│   │   │   ├── Stats.jsx            # 10k Adoptions, 7k Rescued, 96k Clients, 10+ Services
│   │   │   ├── Support.jsx          # Adopt / Donate / Foster cards
│   │   │   └── Contact.jsx          # Address, phone + contact form
│   │   │
│   │   └── ui/
│   │       ├── PetCard.jsx          # Reusable card: pet image, name, age
│   │       ├── ServiceItem.jsx      # Icon + label for each service offered
│   │       ├── StatCard.jsx         # Number + label for stats section
│   │       ├── SupportCard.jsx      # Icon + title + description card
│   │       ├── StepCard.jsx         # Step number + title + description
│   │       └── FilterTabs.jsx       # Cats / Dogs / Fish / Birds / Rabbits tabs
│   │
│   ├── pages/
│   │   ├── Home.jsx                 # Assembles all sections in order
│   │   ├── About.jsx                # About page (route: /about)
│   │   ├── Services.jsx             # Services listing page (route: /services)
│   │   └── Contact.jsx              # Standalone contact page (route: /contact)
│   │
│   ├── data/
│   │   ├── pets.js                  # Array of pet objects {id, name, age, type, image}
│   │   ├── services.js              # Array of service objects {id, title, icon}
│   │   ├── stats.js                 # Array of stat objects {value, label}
│   │   └── steps.js                 # Array of step objects {step, title, description}
│   │
│   ├── hooks/
│   │   └── useFilter.js             # Custom hook for pet filter tab logic
│   │
│   ├── styles/
│   │   ├── index.css                # Global styles, CSS variables, resets
│   │   └── theme.js                 # JS color tokens (optional, for styled-components)
│   │
│   ├── App.jsx                      # Router setup (BrowserRouter + Routes)
│   └── main.jsx                     # Vite entry point
│
├── index.html
├── vite.config.js
├── package.json
└── .eslintrc.cjs
```