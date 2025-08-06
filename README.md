# Founders Club Technical Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)


## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│       ├── guides/
│       │   ├── app/
│       │   ├── fc/
│       │   ├── interview-guide/
│       │   └── studio/
│       └── index.md
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## Helpful Links

- [Starlight Documentation](https://starlight.astro.build/)
- [Heading badges](https://starlight-heading-badges.vercel.app/usage)
- [Video Embedding](https://starlight-videos.netlify.app/getting-started)
- [Starlight Image Zoom](https://starlight-image-zoom.netlify.app/)
- [Icons reference](https://starlight.astro.build/reference/icons)
- [Components reference](https://starlight.astro.build/components/using-components)
- [Frontmatter reference](https://starlight.astro.build/reference/frontmatter)
- [Content reference](https://starlight.astro.build/reference/authoring-content)
