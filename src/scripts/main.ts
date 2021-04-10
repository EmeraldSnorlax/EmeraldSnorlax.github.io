import * as discord from './discord';
import * as nav from './nav';
import * as pgp from './pgp';

window.onload = () => {
  nav.init();
  discord.init();
  pgp.init();
};
