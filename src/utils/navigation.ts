export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
