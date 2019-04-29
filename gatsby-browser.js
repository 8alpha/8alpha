export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari 3.1-12, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
