export function mini(): void {
  const mouse: Element | null = document.querySelector('.mouse');
  if (mouse) mouse.classList.toggle('hover');
}
