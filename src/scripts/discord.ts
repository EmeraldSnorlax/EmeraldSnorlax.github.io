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
}
