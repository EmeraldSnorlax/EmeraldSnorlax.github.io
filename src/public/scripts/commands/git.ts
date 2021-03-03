import { Line, Phrase } from '../line';


const gitConfig: any = [
	{ 'user.email': 'emeraldsnorlax@disroot.org' },
	{ 'user.name': 'EmeraldSnorlax' },
	{ 'user.github': '<a href="https://github.com/EmeraldSnorlax">https://github.com/EmeraldSnorlax</a>' },
	{ 'user.gitlab': '<a href="https://gitlab.com/EmeraldSnorlax">https://gitlab.com/EmeraldSnorlax</a>' },
	{ 'git.remote.url': '<a href="https://github.com/EmeraldSnorlax/EmeraldSnorlax.github.io">https://github.com/EmeraldSnorlax/EmeraldSnorlax.github.io</a>' }
];



export default function git(args: string[]): void {
	console.log(args);
	args.shift();
	if(args.length == 0) {
		new Line(
			[new Phrase('orange', `<br>
				git: Specify arguments. Run "git --help" for a list of commands. 
			`)]
		).write();
	} else {
		// Check if the asked for field exists, and write it if it does
		if (args[0] == 'config' && args[1] == '--get') {
			gitConfig.forEach((key: any, i: number) => {
				if(key[args[2]]) {
					new Line([new Phrase('white', `<br>
						git: ${args[2]}: ${gitConfig[i][args[2]]}
					`)]).write();
				}
			});
		} else if (args[0] == 'config' && args[1] == '--list') {
			gitConfig.forEach((key: any, i: number) => {
				new Line([new Phrase('white', `<br>
					git: ${Object.keys(key)[0]}: ${gitConfig[i][Object.keys(key)[0]]}
				`)]).write();
			});
		} else if(args[0] == 'help' || args[0] == '--help') {
			new Line([new Phrase('cyan', `<br>
				* git config --list`), new Phrase('white', ' lists all user info'),
			new Phrase('cyan', `<br>
				* git config --get [field]`), new Phrase('white', ' gets user info from a specific field. <br>')
			]).write();
		} else {
			new Line([new Phrase('orange', `<br>
				git: "git ${args.join(' ')}" Missing or invalid arguments. Run "git --help".
			`)]).write();
		}
	}
}