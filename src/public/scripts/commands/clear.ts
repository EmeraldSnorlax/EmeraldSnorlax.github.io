import { Line, Phrase } from '../line';
import { terminalElement } from '../main';
export default function clear(): void {
	(terminalElement as HTMLElement).innerHTML = '';
}