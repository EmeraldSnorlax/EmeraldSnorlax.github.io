import { Line, Phrase } from './line';
import handler from './handler';
import { prompt } from './main';
const commands = [
	'help',
	'git config --list',
	'gpg',
	'clear'
];

const promptButtons: HTMLElement = document.getElementById('prompt-buttons')!;

function setPrompt(command: string): void {
	(prompt as HTMLInputElement).value = command;  
}

export default function init(): void {
	document.getElementById('noscript')?.remove();
	const line = new Line([new Phrase('grey', '# Hello. Run "help" for more info.')]);
	line.write();

	commands.forEach((command) => {
		promptButtons.innerHTML += `
			<button id="${command}" type="button" class="dark-bg white suggestion rounded-sm monospace">${command}</button>
		`;
	});

	document.getElementById('help')?.addEventListener('click', () => { setPrompt('help'); });
	document.getElementById('git config --list')?.addEventListener('click', () => { setPrompt('git config --list'); });
	document.getElementById('gpg')?.addEventListener('click', () => { setPrompt('gpg'); });
	document.getElementById('clear')?.addEventListener('click', () => { setPrompt('clear'); });
}
