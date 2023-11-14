
import { defineCliConfig } from 'sanity/cli'

import  SanityClient  from 'sanity';
import { createClient } from 'next-sanity';
import  ImageUrlBuilder  from '@sanity/image-url';


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({ api: { projectId, dataset } })

export const client =  createClient({
    projectId,
        dataset,
    apiVersion:"2021-10-21",
    useCdn : false,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source) {
return builder.image(source)
}