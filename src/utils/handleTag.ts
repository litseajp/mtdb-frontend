export function setMetaTitle(pageTitle?: string) {
  if (pageTitle) {
    document.title = `${pageTitle} - MusicTheory DB`
  } else {
    document.title = 'MusicTheory DB'
  }
}
