<div align="center">

# 🏋️ Iron Core Gym

**A full-stack-style gym management web application built with Vue 3, Vite, Vue Router, and Tailwind CSS.**

[
[
[
[
[

</div>

***

## 📖 Overview

Iron Core Gym is a Single Page Application (SPA) that combines a public-facing gym website with a full admin dashboard. The project was originally built as a static HTML/CSS template and has been fully migrated into a component-driven Vue 3 application.

The frontend showcases the gym's services, trainers, pricing plans, and classes. The admin panel provides a protected dashboard to manage members, trainers, classes, pricing plans, blog posts, messages from the contact form, and general settings — all with a dark, high-contrast design aesthetic using a neon-green accent color.

***

## ✨ Features

### Public Frontend
- **Home Page** — Hero section, gym features, programs, trainers teaser, BMI calculator, pricing overview, and a join CTA
- **About Page** — Gym story, values, and mission
- **Classes Page** — Full listing of available fitness classes
- **Trainers Page** — Trainer profiles and specializations
- **Pricing Page** — Membership plan comparison
- **Blog Page** — Articles and fitness tips
- **Contact Page** — Contact form with map and details

### Admin Panel
- **Protected Routes** — All admin routes require authentication via `meta: { requiresAuth: true }`
- **Dashboard** — KPI cards, recent activity, and summary charts
- **Members** — Full CRUD: add, edit, delete members with search and status filtering
- **Trainers** — Add and manage trainer profiles with specialization and schedule
- **Classes** — Manage class schedule, capacity, and assigned trainers
- **Pricing** — Create and edit membership plans with feature lists
- **Blog** — Write, edit, publish/draft, and delete blog posts
- **Messages** — Two-panel inbox for contact form submissions with read/unread tracking
- **Settings** — Gym info, opening hours per day, social media links, and a danger zone for data reset

***

## 🛠️ Tech Stack

| Technology | Version | Role |
|---|---|---|
| [Vue 3](https://vuejs.org/) | ^3.5.24 | UI framework (Composition API + `<script setup>`) |
| [Vite](https://vitejs.dev/) | ^7.2.4 | Build tool and dev server |
| [Vue Router](https://router.vuejs.org/) | ^4.6.4 | Client-side routing (Web History mode) |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.1.18 | Utility-first CSS framework |
| [Font Awesome 6](https://fontawesome.com/) | CDN | Icon library |
| JavaScript (ES Modules) | — | No TypeScript |

***

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ahnaf00/Iron-Core-Gym---Vue-JS.git

# 2. Navigate into the project directory
cd Iron-Core-Gym---Vue-JS

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173** by default.

### Build for Production

```bash
npm run build
```

The compiled output will be placed in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

***

## 📁 Project Structure

```
Iron-Core-Gym---Vue-JS/
│
├── index.html                        # Vite entry HTML — mounts the Vue app
├── vite.config.js                    # Vite + Tailwind CSS plugin config
├── package.json                      # Project metadata and dependencies
├── postcss.config.js                 # PostCSS config (autoprefixer)
│
├── public/                           # Static assets served as-is
│
└── src/                              # All application source code
    │
    ├── main.js                       # App bootstrap — creates Vue app, registers router
    ├── App.vue                       # Root component — contains <RouterView />
    ├── style.css                     # Global base styles + Tailwind directives
    │
    ├── router/
    │   └── router.js                 # All route definitions (see Routes section below)
    │
    └── components/
        │
        ├── common/                   # Shared layout components used across all pages
        │   ├── Header.vue            # Public site navigation bar
        │   └── Footer.vue            # Public site footer
        │
        ├── ui/                       # Reusable generic UI atoms (buttons, badges, etc.)
        │
        ├── frontend/                 # Section-level components for public pages
        │   ├── home/                 # All sections that make up the Home page
        │   │   ├── HeroSection.vue
        │   │   ├── FeaturesSection.vue
        │   │   ├── AboutTeaserSection.vue
        │   │   ├── ProgramsSection.vue
        │   │   ├── TrainersSection.vue
        │   │   ├── TrainerCard-home.vue
        │   │   ├── BMICalculatorSection.vue
        │   │   ├── PricingSection.vue
        │   │   ├── PricingCard.vue
        │   │   └── JoinNowSection.vue
        │   ├── about/                # About page sections
        │   ├── classes/              # Classes page sections
        │   ├── trainers/             # Trainers page sections
        │   ├── pricing/              # Pricing page sections
        │   ├── blog/                 # Blog page sections
        │   └── contact/              # Contact page sections
        │
        ├── pages/
        │   └── frontend/             # Page-level components — assembled from frontend/ sections
        │       ├── HomePage.vue      # Composes all home/* section components
        │       ├── AboutPage.vue
        │       ├── ClassesPage.vue
        │       ├── Trainers.vue
        │       ├── Pricing.vue
        │       ├── Blog.vue
        │       └── Contact.vue       # ⚠️ Note: file is named 'Contac.vue' in repo (typo)
        │
        └── admin/                    # All admin panel components
            │
            ├── Adminlogin.vue        # Public admin login page (route: /admin/login)
            │
            ├── layout/
            │   └── AdminLayout.vue   # Admin shell — sidebar + topbar + <RouterView> slot
            │
            ├── AdminDashboard.vue    # KPI cards + activity overview (route: /admin)
            ├── AdminMembers.vue      # Member management table (route: /admin/members)
            ├── AdminTrainers.vue     # Trainer management (route: /admin/trainers)
            ├── AdminClasses.vue      # Class schedule management (route: /admin/classes)
            ├── AdminPricing.vue      # Membership plan cards (route: /admin/pricing)
            ├── AdminBlog.vue         # Blog post management (route: /admin/blog)
            ├── AdminMessages.vue     # Two-panel contact inbox (route: /admin/messages)
            ├── AdminSettings.vue     # Gym settings form (route: /admin/settings)
            │
            ├── dashboard/            # Sub-components for AdminDashboard
            ├── members/              # Sub-components for AdminMembers (table + modal)
            ├── trainers/             # Sub-components for AdminTrainers (table + modal)
            ├── classes/              # Sub-components for AdminClasses (table + modal)
            ├── pricing/              # Sub-components for AdminPricing (cards + modal)
            └── blog/                 # Sub-components for AdminBlog (table + modal)
```

***

## 🗺️ Routes

All routes are defined in `src/router/router.js` using Vue Router 4 with Web History mode.

### Public Frontend Routes

| Path | Name | Component | Description |
|---|---|---|---|
| `/` | `home` | `HomePage.vue` | Landing page |
| `/about` | `about` | `AboutPage.vue` | About the gym |
| `/classes` | `classes` | `ClassesPage.vue` | Class schedule |
| `/trainers` | `trainers` | `Trainers.vue` | Trainer profiles |
| `/pricing` | `pricing` | `Pricing.vue` | Membership plans |
| `/blog` | `blog` | `Blog.vue` | Blog articles |
| `/contact` | `contact` | `Contact.vue` | Contact form |

### Admin Routes

| Path | Name | Component | Auth Required |
|---|---|---|---|
| `/admin/login` | `admin.login` | `Adminlogin.vue` | No (guest only) |
| `/admin` | `admin.dashboard` | `AdminDashboard.vue` | ✅ Yes |
| `/admin/members` | `admin.members` | `AdminMembers.vue` | ✅ Yes |
| `/admin/trainers` | `admin.trainers` | `AdminTrainers.vue` | ✅ Yes |
| `/admin/classes` | `admin.classes` | `AdminClasses.vue` | ✅ Yes |
| `/admin/pricing` | `admin.pricing` | `AdminPricing.vue` | ✅ Yes |
| `/admin/blog` | `admin.blog` | `AdminBlog.vue` | ✅ Yes |
| `/admin/messages` | `admin.messages` | `AdminMessages.vue` | ✅ Yes |
| `/admin/settings` | `admin.settings` | `AdminSettings.vue` | ✅ Yes |

> **Route meta flags:**
> - `meta: { requiresAuth: true }` — protected admin routes. Navigation guards should redirect unauthenticated users to `/admin/login`.
> - `meta: { guestOnly: true }` — the login page. Authenticated users should be redirected away from this route.
> - Any unmatched path (`/:pathMatch(.*)*`) redirects to `/`.

***

## 🧩 Component Architecture

The project follows a **3-tier component pattern**:

```
Page Component  (pages/frontend/)
    └── Section Components  (frontend/<page>/)
            └── Atom/Card Components  (frontend/<page>/ or ui/)
```

For example, `HomePage.vue` imports and arranges all section components from `frontend/home/`. Each section component is self-contained with its own template, styles, and local state.

The admin panel follows a **layout + page + sub-component** pattern:

```
AdminLayout.vue  (sidebar + topbar shell)
    └── Admin Page Component  (e.g. AdminMembers.vue)
            └── Sub-components  (admin/members/ → MembersTable.vue, MemberModal.vue)
```

`AdminLayout.vue` wraps all protected admin routes via Vue Router's nested routes. It renders the sidebar navigation, top bar, and a `<RouterView />` slot where each child page component is injected.

***

## 🎨 Design System

The project uses a **dark gym aesthetic** with these core design tokens:

| Token | Value | Usage |
|---|---|---|
| Background | `#0a0a0a` (near black) | Page and panel backgrounds |
| Surface | `#111111` / `#1a1a1a` | Cards, sidebars, modals |
| Neon Green | `#CCFF00` | Primary accent — buttons, badges, active states |
| White | `#FFFFFF` | Primary text |
| Gray | `#6b7280` to `#9ca3af` | Secondary and muted text |
| Red | `#ef4444` | Destructive actions and error states |
| Font (Heading) | Custom `font-heading` class | Uppercase tracking for all headings |

Tailwind CSS v4 is used with the `@tailwindcss/vite` plugin for zero-config integration.

***

## 📝 Known Issues

- `Contact.vue` page file has a typo in the filename — it is saved as `Contac.vue` in the repository.
- All data in the admin panel is **mock/static data** defined directly inside each component using Vue's `ref()` and `reactive()`. There is no backend API or database connected.
- Route guards (`beforeEach`) for `requiresAuth` and `guestOnly` route meta are defined on the routes but the navigation guard implementation should be added to `router.js` for full auth protection.

***

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open a pull request or file an issue in the [GitHub repository](https://github.com/ahnaf00/Iron-Core-Gym---Vue-JS).

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add: your feature description'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

***

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

***

<div align="center">
Built with ❤️ using Vue 3 + Vite
</div>