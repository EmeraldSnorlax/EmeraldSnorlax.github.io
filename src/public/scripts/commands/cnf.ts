import { Line, Phrase } from '../line';

export default function cnf(command: string): void {
	new Line(
		[new Phrase('orange', `<br>
			sh: command not found:
		`), new Phrase('cyan', ` ${command}`)]
	).write();
}