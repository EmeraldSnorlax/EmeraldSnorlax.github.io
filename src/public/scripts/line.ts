import { terminalElement } from './main';

type Colour = 'red' | 'orange' | 'yellow' | 'green' | 'purple' | 'cyan' | 'grey';

export class Phrase {
	colour: Colour;
	content: string;

	constructor(colour: Colour, content: string) {
		this.colour = colour;
		this.content = content;
	}
}

export class Line {
	content: Phrase[];
	timestamp: number;

	constructor(content: Phrase[]) {
		this.content = content;
		this.timestamp = Date.now();
	}
	write(): void {
		this.content.forEach((phrase) => {
			const colour = phrase.colour;
			const text = phrase.content;
			(terminalElement as HTMLElement).innerHTML += `
			<span class="${colour}">${text}</span>
			`;
		});
	}
}
