// @ts-check

import starlight from "@astrojs/starlight";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import { defineConfig } from "astro/config";
import mermaid from "astro-mermaid";
import starlightCoolerCredit from "starlight-cooler-credit";
import starlightGiscus from "starlight-giscus";
import starlightHeadingBadges from "starlight-heading-badges";
import starlightImageZoom from "starlight-image-zoom";
import starlightLinksValidator from "starlight-links-validator";
import starlightVersions from "starlight-versions";
import starlightVideos from "starlight-videos";

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
				starlightLinksValidator(),
				starlightImageZoom(),
				starlightUtils(),
				starlightVersions({
					versions: [{ slug: "1.0" }],
				}),
				starlightHeadingBadges(),
				starlightCoolerCredit(),
				starlightVideos(),
				starlightGiscus({
					repo: "username/github_repo_name",
					repoId: "repository_id_from_giscus",
					category: "category_name_from_github_discussions",
					categoryId: "category_id_from_giscus",
				}),
			],
			components: {
				// Override the default `Sidebar` component with a custom one.
				Sidebar: "./src/components/Sidebar.astro",
			},
			title: "My Docs",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/withastro/starlight",
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
