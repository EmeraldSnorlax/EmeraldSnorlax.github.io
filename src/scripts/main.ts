import copy from './copy';

const discordAccount = '『EmeraldSnorlax』#8434';

const discordButton = document.getElementById('discord');

discordButton!.addEventListener(('click'), () => {
  copy(discordAccount, () => {
    const notifier = document.getElementById('account-copy-notifier')!;
    notifier.innerText = `${discordAccount} copied!`;
    setTimeout(() => {
      notifier.innerText = 'You can find me online at:';
    }, 4000);
  });
});
