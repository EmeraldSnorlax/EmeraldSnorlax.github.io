import * as discord from './discord';
import * as nav from './nav';

window.onload = () => {
  nav.init();
  discord.init();
};
