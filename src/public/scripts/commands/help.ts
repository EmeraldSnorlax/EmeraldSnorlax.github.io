import { Line, Phrase, write } from '../line';

export default function help(): void {
	write(
		new Line(false,
			[new Phrase('white', `
				Here is a list of all commands.
				* help: prints this menu and exits.
			`)]
		),
	);
}