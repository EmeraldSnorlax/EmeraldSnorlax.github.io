const email = document.getElementById('email')!;
const hint = document.getElementById('pgp-hint')!;

// eslint-disable-next-line import/prefer-default-export
export function init() {
  email.addEventListener('mouseover', () => {
    hint.classList.add('md:inline-block');
  });

  email.addEventListener('mouseout', () => {
    setTimeout(() => {
      hint.classList.remove('md:inline-block');
    }, 5000);
  });
}
