# SavvinaBanti

## About the website

This is a simple single-page website for **Savvina Banti**.  
It presents information about Savvina’s work and services, with separate sections/pages such as home and about me, services, contact and blog.

The site was **designed and built using Vue.js** (Vue 3) and the Vite build tool.

## How this website was built

- **1. Create the Vue project**
  - Used the Vite + Vue starter (`npm create vite@latest`) to scaffold a basic Vue 3 project.

- **2. Set up the main layout and pages**
  - Edited the main Vue components to match the design for Savvina Banti.
  - Added views for the key sections (Home(+About), Services, Contact, Blog).

- **3. Add routing**
  - Configured **Vue Router** so that each main section has its own route (e.g. `/`, `/services`, `/contact`, `/blog`).

- **4. Style the pages**
  - Customized the styles in the CSS files under `src/assets/` to match the look and feel I wanted for the site.

## Run the project locally

```sh
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173/`) to view the site.
