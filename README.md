# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

---

# Lumino Developer Guide

Welcome to the Lumino Developer Guide. This document outlines the conventions, standards, and best practices for working on Lumino. Following these guidelines ensures code consistency, maintainability, and a smooth onboarding experience for all team members.

---


## Table of Contents
- [Create T3 App](#create-t3-app)
  - [What's next? How do I make an app with this?](#whats-next-how-do-i-make-an-app-with-this)
  - [Learn More](#learn-more)
  - [How do I deploy this?](#how-do-i-deploy-this)
- [Lumino Developer Guide](#lumino-developer-guide)
  - [Table of Contents](#table-of-contents)
  - [TypeScript Rules](#typescript-rules)
  - [JSDoc Rules](#jsdoc-rules)
  - [Accessibility Rules](#accessibility-rules)
  - [Naming Conventions \& Best Practices](#naming-conventions--best-practices)
  - [Onboarding New Developers](#onboarding-new-developers)

---

## TypeScript Rules

1. **No `any` Type**
- **Rule**: Do not use the `any` type in any TypeScript project.
- **Reason**: Using `any` reduces type safety and negates the benefits of TypeScript.
- **Alternatives**:
  - Explicit types (e.g., `string`, `number`).
  - Generics for flexibility.
  - Use `unknown` if a specific type is not applicable.

```typescript
// Good
const myVariable: string = "Hello, world!";

// Bad
const myVariable: any = "Hello, world!";
```

  

2. Strict TypeScript Settings
- Ensure that TypeScript is set to strict mode in tsconfig.json:
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true
  }
}
```

3. Use `const` for Enums
- Use as const for constant values instead of enums:
```
export const themeNames = ['DEFAULT', 'LIGHT', 'DARK'] as const;
```

  

## JSDoc Rules

1. Mandatory JSDoc for Exports
- Every exported function, class, constant, or type must have a JSDoc comment.
2. Optional Comments for Clarification
- Use additional comments to clarify complex logic or provide context where necessary.

1. JSDoc Structure
- Description: Briefly describe what the function/type does
- Parameters: List each parameter with its type.
- Returns: Describe the return value and its type.
- Example: Provide an example usage.

```typescript
/**
 * Adds two numbers together.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 *
 * @example
 * const result = add(2, 3);
 * console.log(result); // Output: 5
 */
export function add(a: number, b: number): number {
  return a + b;
}
```

## Accessibility Rules
1. Semantic HTML: Use semantic HTML elements to convey structure (e.g., <header>, <footer>, <section>, <nav>).
2. ARIA Roles: Use ARIA attributes where necessary for custom components (e.g., `role="button"`).
3. Keyboard Accessibility: Ensure all interactive elements are keyboard-accessible.
4. Visual Accessibility: Maintain color contrast standards and provide text alternatives for images.
5. Form Accessibility: Associate labels with form controls and provide clear instructions.
6. Testing and Evaluation: Use accessibility testing tools and follow WCAG guidelines (aim for AA compliance).

## Naming Conventions & Best Practices
1. File and Folder Naming:
   - Use PascalCase for component names (e.g., UserProfile.tsx).
   - Use camelCase for utility functions and hooks (e.g., useLocalStorage.ts).
   - Use UPPER_SNAKE_CASE for constants and environment variables.
2. Folder Structure:
   - `/apps` and `/pages`: Organize pages and routes here.
   - `/components`: Store reusable components in their own folders.
   - `/hooks`: Custom hooks, prefixed with "use" (e.g., useAuth.ts).
   - `/utils`: Utility functions; organize hierarchically.
   - `/styles`: Styles specific to components and pages.
   - `/constants`: Application constants, named in uppercase snake case (e.g., COLOR_PRIMARY).
   - `/lib`: External library integrations and configurations.
   - `/types`: Type definitions and interfaces.
   - `/server`: Server-side code and APIs.
   - `/store`: Global state management files.
1. Environment Variables:
   - Use uppercase snake case (e.g., `DATABASE_URL`, `API_KEY`).
   - Include a .env.example file for reference.
1. Development Process
2. Branching Strategy:
   - Follow GitFlow or a similar branching strategy with main, development, and feature branches.
1. Code Review:
   - All changes must go through code review. Ensure adherence to coding standards.
1. Testing:
   - Unit Testing: Jest and React Testing Library.
1. API Testing: Use Postman for API endpoint testing.
2. CI/CD:
   - Automated CI/CD with GitLab, Docker, and edge deployment configuration.

## Onboarding New Developers
1. Initial Setup:
   - Follow the README for project setup instructions.
   - Review this Developer Guide thoroughly.
2. Familiarization Tasks:
   - Begin with small UI tasks or documentation updates.
   - Review existing code to understand structure and conventions.
3. Mentorship and Support:
   - Pair with a senior developer for the first month to answer questions and guide you through workflow practices.