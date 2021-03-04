import { Line, Phrase } from './line';
import { prompt } from './main';
const commands = [
	'help',
	'theme',
	'git config --list',
	'gpg',
	'clear',
	'whoami'
];

const promptButtons: HTMLElement = document.getElementById('prompt-buttons')!;

function setPrompt(command: string): void {
	(prompt as HTMLInputElement).value = command;  
}

export default function init(): void {
	// Theme preference
	let theme;
	if (window.matchMedia('(prefers-color-scheme: light)').matches) {
		theme = 'light';
	} else {
		theme = 'dark';
	}
	document.documentElement.setAttribute('data-theme', theme);

	document.getElementById('noscript')?.remove();
	new Line([new Phrase('grey', '# Hello. Run "help" for more info.<br>')]).write();
	new Line([new Phrase('grey', '# Type a command or click a button.<br><br>')]).write();
	new Line([new Phrase('grey', '# To send:<br>')]).write();
	new Line([new Phrase('grey', '# press Enter with the prompt focused,<br>')]).write();
	new Line([new Phrase('grey', '# or Ctrl + Enter with the prompt unfocused,<br>')]).write();
	new Line([new Phrase('grey', '# or click the run button.<br><br>')]).write();
	new Line([new Phrase('grey', `# I've guessed that you prefer ${theme} theme.<br>`)]).write();
	new Line([new Phrase('grey', '# You can toggle by running "theme".<br>')]).write();

	commands.forEach((command) => {
		promptButtons.innerHTML += `
			<button id="${command}" type="button" class="dark-bg white suggestion rounded-sm monospace">${command}</button>
		`;
	});

	document.getElementById('help')?.addEventListener('click', () => { setPrompt('help'); });
	document.getElementById('git config --list')?.addEventListener('click', () => { setPrompt('git config --list'); });
	document.getElementById('gpg')?.addEventListener('click', () => { setPrompt('gpg'); });
	document.getElementById('clear')?.addEventListener('click', () => { setPrompt('clear'); });
	document.getElementById('whoami')?.addEventListener('click', () => { setPrompt('whoami'); });
	document.getElementById('theme')?.addEventListener('click', () => { setPrompt('theme'); });

	// Check for Dark Reader, and show a warning
	const darkReaderE = document.getElementsByClassName('darkreader');
	if (darkReaderE[0]) {
		new Line([new Phrase('grey', '<br># It looks like you are using Dark Reader.')]).write();
		new Line([new Phrase('grey', '<br># This site is already dark. Consider disabling it to properly view this site.<br>')]).write();
	}
}
