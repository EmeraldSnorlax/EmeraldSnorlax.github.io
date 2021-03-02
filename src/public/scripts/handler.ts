import help from './commands/help'; 
import { write } from './line';
export default function handler(rawinput: string): void {
	const args = rawinput.split(/[ ]+/).shift();
	const command = rawinput.split(/[ ]+/)[0];
	switch(command) {
	case 'help':
		help();
	}
}
