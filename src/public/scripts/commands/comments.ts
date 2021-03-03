import { Line, Phrase } from '../line';

export default function comment(input: string): void {
	new Line(
		[new Phrase('grey', `<br>
			${input}
		`)]
	).write();
}