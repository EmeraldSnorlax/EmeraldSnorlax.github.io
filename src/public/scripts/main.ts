export const terminalElement = document.getElementById('terminal');
import init from './init';
import handler from './handler';



export const prompt = document.getElementById('prompt');
(prompt as HTMLInputElement).addEventListener('keyup', (e) => {
	if (e.key == 'Enter') {
		handler((prompt as HTMLInputElement).value);
	}
});

const send = document.getElementById('send');
(send as HTMLButtonElement).addEventListener('click', () => {
	handler((prompt as HTMLInputElement).value);
});
init();

document.addEventListener('keyup', (e) => {
	if (e.ctrlKey && e.key == 'Enter') {
		handler((prompt as HTMLInputElement).value);
	}
});
