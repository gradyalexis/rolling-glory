import META from '@/constants/meta'

export const updateMetaTags = (meta) => {
  if (meta.title) document.title = meta.title || META.DEFAULT_TITLE

  // Update description meta tag
  const descriptionTag = document.querySelector('meta[name="description"]')
  if (descriptionTag) {
    descriptionTag.setAttribute('content', meta.description || META.DEFAULT_DESCRIPTION)
  } else {
    const newDescriptionTag = document.createElement('meta')
    newDescriptionTag.name = 'description'
    newDescriptionTag.content = meta.description || META.DEFAULT_DESCRIPTION
    document.head.appendChild(newDescriptionTag)
  }

  // Update Open Graph meta tags
  const ogTitleTag = document.querySelector('meta[property="og:title"]')
  if (ogTitleTag) ogTitleTag.setAttribute('content', meta.title || META.DEFAULT_TITLE)
  const ogDescriptionTag = document.querySelector('meta[property="og:description"]')
  if (ogDescriptionTag) ogDescriptionTag.setAttribute('content', meta.description || META.DEFAULT_DESCRIPTION)
  const ogImageTag = document.querySelector('meta[property="og:image"]')
  if (ogImageTag) ogImageTag.setAttribute('content', meta.image || META.DEFAULT_IMAGE)

  // Update Twitter meta tags
  const twitterTitleTag = document.querySelector('meta[property="twitter:title"]')
  if (twitterTitleTag) twitterTitleTag.setAttribute('content', meta.title || META.DEFAULT_TITLE)
  const twitterDescriptionTag = document.querySelector('meta[property="twitter:description"]')
  if (twitterDescriptionTag) twitterDescriptionTag.setAttribute('content', meta.description || META.DEFAULT_DESCRIPTION)
  const twitterImageTag = document.querySelector('meta[property="twitter:image"]')
  if (twitterImageTag) twitterImageTag.setAttribute('content', meta.image || META.DEFAULT_IMAGE)
}

export default updateMetaTags