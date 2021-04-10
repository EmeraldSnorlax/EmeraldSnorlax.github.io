import * as discord from './discord';
import * as nav from './nav';
import * as pgp from './pgp';
import * as pgpHint from './pgpHint';

window.onload = () => {
  nav.init();
  discord.init();
  pgp.init();
  pgpHint.init();
};
