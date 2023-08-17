import { useSanityClient } from 'astro-sanity';
import { createImageBuilder } from 'astro-sanity';

//@ts-ignore
export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source) {
  return imageBuilder.image(source);
}