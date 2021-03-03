import { Line, Phrase } from '../line';

export default function help(): void {
	new Line(
		[new Phrase('white', `<br>
			Here is a list of all commands.<br>
			* help: prints this menu and exits.<br>
			* clear: clears the terminal<br>
		`)]
	).write();
}