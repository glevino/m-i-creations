import { createClient } from 'contentful'

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
})

/**
 * Fetch photos for a given category from Contentful.
 * Returns an array of { src, alt } objects.
 * Category must match exactly: 'Nails' | 'Custom Creations' | 'Laser Engraving'
 */
export async function fetchPhotosByCategory(category) {
  const res = await client.getEntries({
    content_type: 'photo',
    'fields.category': category,
    order: 'fields.order,-sys.createdAt',
    limit: 100,
  })
  return res.items.map(item => ({
    src: 'https:' + item.fields.image.fields.file.url,
    alt: item.fields.altText || item.fields.title || '',
  }))
}
