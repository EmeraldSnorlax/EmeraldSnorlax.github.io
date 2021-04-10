const email = document.getElementById('email')!;
const hint = document.getElementById('pgp-hint')!;

// eslint-disable-next-line import/prefer-default-export
export function init() {
  email.addEventListener('mouseenter', () => {
    hint.classList.remove('hidden', 'invisible');
    setTimeout(() => {
      hint.classList.add('hidden', 'invisible');
    }, 3500);
  });
}
