export const navigateToPageAndScroll = (pagePath, targetElementId) => {
  window.location.href = `/${pagePath}`;
  window.addEventListener("load", () => {
    const element = document.getElementById(targetElementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
};
