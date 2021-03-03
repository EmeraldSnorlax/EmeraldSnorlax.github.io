import help from './commands/help'; 
import cnf from './commands/cnf';
import comments from './commands/comments';
import git from './commands/git';

import { prompt } from './main';
import clear from './commands/clear';
export default function handler(rawinput: string): void {
	(prompt as HTMLInputElement).value = '';
	const args = rawinput.trim().split(/[ ]+/);
	const command = rawinput.split(/[ ]+/)[0];
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
	default:
		cnf(command);
	}
}
