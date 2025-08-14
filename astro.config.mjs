// @ts-check

import starlight from "@astrojs/starlight";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import { defineConfig } from "astro/config";
import mermaid from "astro-mermaid";
// import { viewTransitions } from "astro-vtbot/starlight-view-transitions";
import starlightBlog from "starlight-blog";
import starlightContextualMenu from "starlight-contextual-menu";
import starlightCoolerCredit from "starlight-cooler-credit";
import starlightGiscus from "starlight-giscus";
import starlightImageZoom from "starlight-image-zoom";
import starlightThemeNova from "starlight-theme-nova";
import starlightVideos from "starlight-videos";

// https://astro.build/config
export default defineConfig({
	site: "https://technical-maintenance-docs.pages.dev",
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
			title: "FC Technical Docs",
			logo: {
				light: "./src/assets/1.0/light-logo-fc-trimmed.png",
				dark: "./src/assets/1.0/dark-logo-fc-trimmed.png",
			},
			editLink: {
				baseUrl:
					"https://github.com/founder-srm/technical-maintenance-docs/edit/main",
			},
			plugins: [
				// viewTransitions(),
				starlightThemeNova({
					nav: [{ label: "FC", href: "https://www.thefoundersclub.in" }],
				}),
				starlightContextualMenu({
					actions: ["copy", "view", "chatgpt", "claude"],
				}),
				starlightBlog({
					title: "FC Tech Blog",
					navigation: "header-end",
					postCount: 1,
					recentPostCount: 1,
					metrics: {
						readingTime: true,
						words: "total",
					},
				}),
				starlightImageZoom(),
				starlightUtils(),
				starlightCoolerCredit({
					credit: {
						title: "Check Out The Website!",
						href: "https://www.thefoundersclub.in",
						description: "Want to try out what you've learnt?",
					},
				}),
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
					lazy: true,
				}),
			],
			components: {
				// Override components
				Pagination: "./src/components/CustomPagination.astro",
				TableOfContents: "./src/components/TableOfContents.astro",
				MarkdownContent: "./src/components/MarkdownContent.astro",
				PageTitle: "./src/components/PageTitle.astro",
			},
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
						"guides/example",
						"guides/interview-guide",
						{
							label: "FC",
							collapsed: true,
							items: [
								"guides/fc/contributing-guide",
								{
									label: "Admin",
									collapsed: true,
									items: [
										"guides/fc/admin/new-event",
										"guides/fc/admin/registrations-guide",
										"guides/fc/admin/ticket-handling",
									],
								},
								{
									label: "Studio",
									collapsed: true,
									items: [
										"guides/fc/studio/content-guide",
										{
											label: "Structure",
											collapsed: true,
											autogenerate: { directory: "guides/fc/studio/structure" }
										},
										{
											label: "Components",
											collapsed: false,
											autogenerate: { directory: "guides/fc/studio/components" }
										}
									],
								},
								{
									label: "Website",
									collapsed: true,
									items: ["guides/fc/website/coming-soon"],
								},
							],
						},
						{
							label: "App",
							collapsed: true,
							items: ["guides/app/contributing"],
						},
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
				{
					label: "Blog Posts",
					link: "blog",
				},
			],
		}),
	],
});
