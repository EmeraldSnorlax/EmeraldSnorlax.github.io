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
				git: specify arguments
			`)]
		).write();
	} else {
		// Check if the asked for field exists, and write it if it does
		let exists = false;
		if (args[0] == 'config' && args[1] == '--get') {
			gitConfig.forEach((key: any, i: number) => {
				if(key[args[2]]) {
					console.log(gitConfig[i][args[2]]);
					exists = true;
					new Line([new Phrase('white', `<br>
						git: ${args[2]}: ${gitConfig[i][args[2]]}
					`)]).write();
				}
			});
		}
	}
}