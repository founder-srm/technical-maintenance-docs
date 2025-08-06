// @ts-check

import starlight from "@astrojs/starlight";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import { defineConfig } from "astro/config";
import mermaid from "astro-mermaid";
import starlightCoolerCredit from "starlight-cooler-credit";
import starlightGiscus from "starlight-giscus";
import starlightImageZoom from "starlight-image-zoom";
import starlightLinksValidator from "starlight-links-validator";
import starlightVersions from "starlight-versions";
import starlightVideos from "starlight-videos";
import starlightThemeNova from 'starlight-theme-nova'

// https://astro.build/config
export default defineConfig({
	integrations: [
		mermaid({
			theme: "forest",
			autoTheme: true,
			mermaidConfig: {
				flowchart: {
					curve: "basis",
				},
			},
		}),
		starlight({
			plugins: [
				starlightThemeNova({
					nav:[
						{ label: 'FC', href: 'https://www.thefoundersclub.in' },
					]
				}),
				starlightLinksValidator(),
				starlightImageZoom(),
				starlightUtils(),
				starlightVersions({
					versions: [{ slug: "1.0" }],
				}),
				starlightCoolerCredit(),
				starlightVideos(),
				starlightGiscus({
					repo: "founder-srm/technical-maintenance-docs",
					repoId: "R_kgDOPYTN7g",
					category: "Q&A",
					categoryId: "DIC_kwDOPYTN7s4Ctxuk",
					inputPosition: "top",
					mapping: "pathname",
					theme: "noborder_dark",
					reactions: true,
					lazy: true
				}),
			],
			components: {
				// Override components 
				TableOfContents: "./src/components/TableOfContents.astro",
				MarkdownContent: "./src/components/MarkdownContent.astro",
				PageTitle: "./src/components/PageTitle.astro"
			},
			title: "My Docs",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/founder-srm/technical-maintenance-docs",
				},
			],
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Example Guide", slug: "guides/example" },
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
		}),
	],
});
