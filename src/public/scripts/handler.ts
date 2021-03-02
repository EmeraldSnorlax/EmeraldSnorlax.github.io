import help from './commands/help'; 

export function handler(rawinput: string) {
	const args = rawinput.split(/[ ]+/).shift();
	const command = rawinput.split(/[ ]+/)[0];
	switch(command) {
	case 'help':
		help();
	}
}
