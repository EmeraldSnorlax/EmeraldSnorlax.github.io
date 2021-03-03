import help from './commands/help'; 
import { prompt } from './main';
export default function handler(rawinput: string): void {
	(prompt as HTMLInputElement).value = '';
	const args = rawinput.split(/[ ]+/).shift();
	const command = rawinput.split(/[ ]+/)[0];
	switch(command) {
	case 'help':
		help();
	
	}
}
