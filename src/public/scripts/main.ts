import { Line, Phrase, write } from './line';
export const terminalElement = document.getElementById('terminal');
import init from './init';
import handler from './handler';
init();

const prompt = document.getElementById('prompt');
(prompt as HTMLInputElement).addEventListener('keyup', (e) => {
	if (e.key == 'Enter') {
		handler((prompt as HTMLInputElement).value);
	}
});
