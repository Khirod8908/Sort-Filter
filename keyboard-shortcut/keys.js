export const hideModel = () => {};
export const showModel = () => {};

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  if (e.key == 'Escape') {
    hideModel();
  } else if (e.key.toLowerCase() == 'n' && e.shiftKey) {
    showModel();
  }
});
