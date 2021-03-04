import help from './commands/help'; 
import cnf from './commands/cnf';
import comments from './commands/comments';
import git from './commands/git';
import clear from './commands/clear';
import gpg from './commands/gpg';
import whoami from './commands/whoami';
import theme from './commands/theme';

import { prompt } from './main';



export default function handler(rawinput: string): void {
	(prompt as HTMLInputElement).value = '';
	const args = rawinput.trim().toLowerCase().split(/[ ]+/);
	const command = rawinput.split(/[ ]+/)[0].toLowerCase();
	// Do not handle comments and pass them directly back to the terminal
	if (rawinput.trim()[0] == '#') { 
		comments(rawinput.trim());
		return;
	}
	// Command block
	switch(command) {
	case 'help':
		help();
		break;
	case 'clear':
		clear();
		break;
	case 'git':
		git(args);
		break;
	case 'gpg':
	case 'pgp':
	case 'openpgp':
		gpg();
		break;
	case 'whoami':
		whoami();
		break;
	case 'theme':
		theme();
		break;
	default:
		cnf(command);
	}
}
