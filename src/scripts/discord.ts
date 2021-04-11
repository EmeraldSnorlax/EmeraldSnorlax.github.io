import copy from './copy';

// eslint-disable-next-line import/prefer-default-export
export function init() {
  const discordAccount = '『EmeraldSnorlax』#8434';
  const defaultText = 'You can find me online at:';

  const discordButton = document.getElementById('discord');
  const notifier = document.getElementById('account-copy-notifier')!;

  discordButton!.addEventListener('click', () => {
    copy(discordAccount, () => {
      notifier.innerText = `${discordAccount} copied!`;
    });
  });

  discordButton!.addEventListener('mouseover', () => {
    notifier.innerText = `Click to copy ${discordAccount}`;
  });

  discordButton!.addEventListener('mouseout', () => {
    notifier.innerText = defaultText;
  });

  // Keyboard users
  discordButton!.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      copy(discordAccount, () => {
        notifier.innerText = `${discordAccount} copied!`;
        setTimeout(() => {
          notifier.innerText = defaultText;
        }, 3000);
      });
    }
  });

  discordButton!.addEventListener('focus', () => {
    notifier.innerText = 'Press Enter to copy discord.';
  });

  discordButton!.addEventListener('focusout', () => {
    notifier.innerText = defaultText;
  });
}
