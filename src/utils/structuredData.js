const siteUrl = 'https://chasingwhatisreal.com'

export const createVideoObject = ({
  name,
  description,
  thumbnailPath,
  contentPath,
  uploadDate,
}) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name,
  description,
  thumbnailUrl: `${siteUrl}${thumbnailPath}`,
  contentUrl: `${siteUrl}${contentPath}`,
  embedUrl: `${siteUrl}${contentPath}`,
  uploadDate,
  publisher: {
    '@type': 'Organization',
    name: 'Chasing What Is Real Productions',
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/images/logo.png`,
    },
  },
})

export const createImageObject = ({ name, description, imagePath }) => ({
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  name,
  description,
  contentUrl: `${siteUrl}${imagePath}`,
  thumbnailUrl: `${siteUrl}${imagePath}`,
  author: {
    '@type': 'Organization',
    name: 'Chasing What Is Real Productions',
  },
})

export const createStructuredGallery = (items) =>
  items.map((item) =>
    item.type === 'video'
      ? createVideoObject({
          name: item.caption,
          description: item.alt,
          thumbnailPath: item.poster || item.src,
          contentPath: item.src,
          uploadDate: item.uploadDate || '2025-01-01',
        })
      : createImageObject({
          name: item.caption,
          description: item.alt,
          imagePath: item.src,
        }),
  )


