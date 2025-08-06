import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { videosSchema } from "starlight-videos/schemas";
import { blogSchema } from "starlight-blog/schema";

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: (context) => z
				.object({
					giscus: z.boolean().optional().default(true),
				})
				.merge(videosSchema)
				.merge(blogSchema(context)),
		}),
	}),
};
