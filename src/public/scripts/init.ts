import { Line, Phrase } from './line';
import { prompt } from './main';
const commands = [
	'help',
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
	document.getElementById('noscript')?.remove();
	new Line([new Phrase('grey', '# Hello. Run "help" for more info.<br>')]).write();
	new Line([new Phrase('grey', '# Type a command or click a button.<br><br>')]).write();
	new Line([new Phrase('grey', '# To send:<br>')]).write();
	new Line([new Phrase('grey', '# press Enter with the prompt focused,<br>')]).write();
	new Line([new Phrase('grey', '# or Ctrl + Enter with the prompt unfocused,<br>')]).write();
	new Line([new Phrase('grey', '# or click the run button.<br>')]).write();

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
}
