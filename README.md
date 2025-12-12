# Multilingual Portfolio (React + Tailwind)

This is a modern, multilingual portfolio website built with React, Tailwind CSS, and Wouter. It supports English, Azerbaijani, and Russian languages.

## Project Structure

- `src/pages/[lang]/`: Dynamic routes for Home, Portfolio, and CV.
- `src/lib/i18n.ts`: Centralized translation dictionary.
- `src/components/LanguageSwitcher.tsx`: Handles language routing logic.
- `src/index.css`: Custom Tailwind configuration and design tokens.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5000`.

### 3. Build for Production

```bash
npm run build
```

This will generate static files in the `dist` directory.

## Deployment to GitHub Pages

Since this is a Single Page Application (SPA) using client-side routing, you need a special setup for GitHub Pages to handle the routing (redirecting 404s to index.html).

1.  **Update `vite.config.ts`**:
    Ensure your `base` is set to your repository name if it's not a user site.
    ```ts
    // vite.config.ts
    export default defineConfig({
      base: '/your-repo-name/', // If deploying to https://username.github.io/your-repo-name/
      // ...
    })
    ```

2.  **Deploy Script**:
    You can use the `gh-pages` package to deploy easily.
    
    ```bash
    npm install --save-dev gh-pages
    ```
    
    Add to `package.json`:
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```

3.  **Deploy**:
    ```bash
    npm run deploy
    ```
