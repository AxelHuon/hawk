# 1. Introduction

Explore contemporary role-playing narratives inspired by real-time news with Hawk. Dive into modern adventures where real-world events become the backdrop for your stories, offering an immersive and dynamic experience for Game Masters and their players.

# 2. Prerequisites

`Node.js [20.11.1]`<br>

# 3. Installation

```bash
git clone https://github.com/AxelHuon/hawk
```

```bash
cd hawk
```

```bash
npm i
```

# 4. Structure

Project Structure

Here is a general overview all inside of `src`:<br>

- `app/`: Contains the application's page files. Each file represents a route.

- `components/`: Folder for reusable React components.
- - **Atomic Design:**
    - `Atoms`: The smallest, basic building blocks of the application, such as buttons, input fields, or any other standalone UI elements.
    - `Molecules`: Groups of atoms bonded together to represent slightly more complex UI components, like a search box combining a text input atom with a button atom.
    - `Organisms`: Complex UI components consisting of groups of molecules and possibly atoms as well. Examples include entire sections of a page like a header.

  <br>Also put the style in `styled-components` inside a file like `component-name.style.ts`

  **Exemple of a Button component :** <br>

  `/src/components/Atomes/Button/Button.tsx`<br>
  `/src/components/Atomes/Button/Button.style.tsx`<br><br>

- `public/`: For static files such as images.

- `utils/`: Utility functions to assist in various tasks.

- `hooks/`: Custom React hooks for reusable logic across components or pages.

## 5. Techno and lib

### Styling

We use `styled-component` for styling with a SSR loading of CSS

### File extensions

We use `TypeScript` for all files extensions, so we have only file `*.tsx` or `*.ts`

## 6. Contributing

This project utilizes a structured approach within our Git workflow, focusing on two main branches: `master` and `dev`, alongside a specific nomenclature for branches and commits. Understanding the purpose, use, and naming conventions of these elements is crucial for effective collaboration and contribution to the project.

### Branches Overview

- **`master` Branch**: Represents the production-ready state of our project. It's stable and deployable at all times. Updates are made through a controlled process of code reviews and extensive testing to ensure the production environment's reliability and stability.

- **`dev` Branch**: Serves as the primary development branch. All new features, enhancements, and non-critical bug fixes are merged into `dev` first, maintaining an active development environment that's separate from the production system, thereby allowing continuous development without compromising production stability.

### Naming Conventions

#### Branch Naming

Branch names should be descriptive, reflecting the purpose of the work. They should be prefixed by the type of work (`feat`, `fix`, `opti`), followed by a concise description. For example, `feat/use-auth-hook` for a new authentication feature.

#### Commit Messages

Commit messages should follow the format `[branch][type]: commit message`, where `[branch]` is the branch name, `[type]` indicates the nature of the change (`feat`, `fix`, `opti`), and `commit message` provides a clear description of the changes.

### Contributing to the Project

Contributions are warmly welcomed. To contribute effectively, adhere to the following guidelines:

- **Branching**: Always create a new branch from `dev` for your work. This ensures contributions are based on the latest development efforts. The branch name should accurately reflect the work being undertaken.

- **Pull Requests**: Submit a pull request (PR) against the `dev` branch upon completing your feature or fix. Ensure the PR title and description succinctly describe the changes and their motivations.

- **Code Review**: PRs require approval before merging into `dev`. This maintains quality standards and adherence to the project's coding practices and architectural decisions.

- **Adherence to Standards**: Contributions must respect the project's architecture and coding conventions. Consistency is vital for maintaining quality and ease of maintenance.

By following these guidelines and naming conventions, we foster a more organized, navigable, and understandable project structure, facilitating smoother project management and collaboration.
