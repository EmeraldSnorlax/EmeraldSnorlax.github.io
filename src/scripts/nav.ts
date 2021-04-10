interface Page {
  card: HTMLElement,
  button: HTMLElement,
}

const pages: Page[] = [
  { card: document.getElementById('home-card')!, button: document.getElementById('home')! },
  { card: document.getElementById('about-card')!, button: document.getElementById('about')! },
  { card: document.getElementById('project-card')!, button: document.getElementById('projects')! },
  { card: document.getElementById('account-card')!, button: document.getElementById('accounts')! },

];

let selected: Page = { card: pages[0].card, button: pages[0].button };

function setActive(page: Page): void {
  selected.card.classList.add('hidden');
  selected.button.classList.remove('nav-selected');
  selected.button.classList.add('nav');

  selected = page;

  page.card.classList.remove('hidden');
  page.button.classList.remove('nav');
  page.button.classList.add('nav-selected');
}

// eslint-disable-next-line import/prefer-default-export
export function init(): void {
  pages.forEach((page) => {
    page.button.addEventListener('click', () => {
      setActive(page);
    });
  });
}
