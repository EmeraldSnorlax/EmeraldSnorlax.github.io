import { Line, Phrase, write } from '../line';

export default function help(): void {
	write(
		new Line(
			[new Phrase('white', `<br>
				Here is a list of all commands.<br>
				* help: prints this menu and exits.<br><br>
			`)]
		),
	);
}