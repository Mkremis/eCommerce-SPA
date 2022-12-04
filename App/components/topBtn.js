export function TopButton() {
  const $scrollTopButton = document.createElement("button");
  $scrollTopButton.classList.add("scroll-top-btn", "--invisible");
  $scrollTopButton.innerHTML = "<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.3 40.15v-25.8L10.25 26.4 7.85 24 24 7.85 40.15 24l-2.4 2.4L25.7 14.35v25.8Z"/></svg>";
  return $scrollTopButton;
}
