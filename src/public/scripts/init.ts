import { Line, Phrase, write } from './line';

export default function init(): void {
	document.getElementById('noscript')?.remove();
	const line = new Line([new Phrase('grey', '# Hello. Run a command for more info.')]);
	write(line);
}

