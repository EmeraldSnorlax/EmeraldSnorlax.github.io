import { terminalElement } from './main';

export class Phrase {
	colour: string;
	content: string;

	constructor(colour: string, content: string) {
		this.colour = colour;
		this.content = content;
	}
}

export class Line {
	command: boolean;
	content: Phrase[];
	timestamp: number;

	constructor(command: boolean, content: Phrase[]) {
		this.command = command;
		this.content = content;
		this.timestamp = Date.now();
	}
}

export function write(line: Line): void {
	line.content.forEach((phrase) => {
		const colour = phrase.colour;
		const text = phrase.content;
		(terminalElement as HTMLElement).innerHTML += `
				<span class="${colour}">${text}</span>
		`;
	});
}