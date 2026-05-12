// Utility function for smooth scrolling to a section
export const scrollToSection = (id: string, offset = 0) => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Handle anchor links with smooth scrolling
export const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const href = e.currentTarget.getAttribute('href');
  if (href && href.startsWith('#')) {
    e.preventDefault();
    const id = href.replace('#', '');
    scrollToSection(id, 120); // 120px offset for header
  }
};
