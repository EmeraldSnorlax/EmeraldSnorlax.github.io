import { Line, Phrase, write } from './line';

export default function init(): void {
	document.getElementById('noscript')?.remove();
	const line = new Line(false, [new Phrase('red', 'Hello'), new Phrase('green', 'World!')]);
	write(line);

}

