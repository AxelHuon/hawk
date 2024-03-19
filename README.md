# 1. Introduction

Explore contemporary role-playing narratives inspired by real-time news with Hawk. Dive into modern adventures where real-world events become the backdrop for your stories, offering an immersive and dynamic experience for Game Masters and their players.

# 2. Prerequisites

`Node.js [20.11.1]`<br>
`yarn`

# 3. Installation

```bash
git clone https://github.com/AxelHuon/hawk
```

# 4. Structure

Project Structure

Here is a general overview all inside of `src`:<br>

- `app/`: Contains the application's page files. Each file represents a route.

- `components/`: Folder for reusable React components.

  - **Atomic Design:**
    - `Atoms`: The smallest, basic building blocks of the application, such as buttons, input fields, or any other standalone UI elements.
    - `Molecules`: Groups of atoms bonded together to represent slightly more complex UI components, like a search box combining a text input atom with a button atom.
    - `Organisms`: Complex UI components consisting of groups of molecules and possibly atoms as well. Examples include entire sections of a page like a header.

- `public/`: For static files such as images.

- `utils/`: Utility functions to assist in various tasks.

- `hooks/`: Custom React hooks for reusable logic across components or pages.
