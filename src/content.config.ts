import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { docsVersionsLoader } from "starlight-versions/loader";
import { videosSchema } from "starlight-videos/schemas";

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z
				.object({
					giscus: z.boolean().optional().default(true),
				})
				.merge(videosSchema),
		}),
	}),
	versions: defineCollection({ loader: docsVersionsLoader() }),
};
