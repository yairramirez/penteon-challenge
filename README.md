# PENTEON CHALLENGE - YAIR RAMIREZ

## Objective

Your goal is to build a simple web application using React that interacts with
multiple external APIs. You will need to fetch a list of cat facts using the free cat
fact API and display them in a list. Each cat fact should be paired with a random
person, courtesy of the Random User API.

## Requirements

- Use TailwindCSS to style your components.
- Use React-Query to fetch + cache the data from the APIs.
- Add a skeleton loading state while you fetch the APIs.
- Gracefully handle errors from the API.

## Bonus

- Use TypeScript
- Implement infinite scroll pagination

## Notes

I can't complete the task using react-query, to complete successfully that part I need 1 day to take a look on how react-query works properly, I tried but I don't feel I have the correct implementation so that's the reason I solve it using axios.

Maybe if it works for you in a future, I solve the tailwind issue doing this in my `vite.config.ts`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})

```

Anyway, thanks for the opportunity!
Best regards!
Yair Ramirez
