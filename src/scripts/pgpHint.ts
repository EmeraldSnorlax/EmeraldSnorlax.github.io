const email = document.getElementById('email')!;
const hint = document.getElementById('pgp-hint')!;

// eslint-disable-next-line import/prefer-default-export
export function init() {
  email.addEventListener('mouseover', () => {
    hint.classList.remove('hidden');
  });

  email.addEventListener('mouseout', () => {
    setTimeout(() => {
      hint.classList.add('hidden');
    }, 2000);
  });
}
