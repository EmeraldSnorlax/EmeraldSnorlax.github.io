import { Line, Phrase } from '../line';

export default function whoami(): void {
	new Line(
		[
			new Phrase('green', '<br><br>EmeraldSnorlax<br>'),
			new Phrase('white', '<br>Hello! I make stuff. And sometimes, successfully.<br>'),
			new Phrase('white', 'I am an open-source enthusiast, <a href="https://steamcommunity.com/id/EmeraldSnorlax/" target="_blank">and bad at videogames.</a> <br>'),
			new Phrase('white', 'I am most familiar with'),
			new Phrase('yellow', 'JavaScript'),
			new Phrase('white', 'and'),
			new Phrase('cyan', 'TypeScript,'),
			new Phrase('white', 'mostly on the backend.<br><br>'),
			new Phrase('white', 'I have familiarity using GNU/Linux, both as a daily driver, and on servers.<br><br>'),
			new Phrase('white', 'Most of my newer projects can be found on <a href="https://gitlab.com/EmeraldSnorlax">GitLab</a>.<br><br>'),
			new Phrase('white', 'Reach me on Matrix'),
			new Phrase('white', 'at <a href="https://matrix.to/#/@emeraldsnorlax:matrix.org">@emeraldsnorlax:matrix.org</a>'),
			new Phrase('white', 'or'),
			new Phrase('cyan', 'Discord'),
			new Phrase('white', 'at'),
			new Phrase('yellow', '『EmeraldSnorlax』#8434'),
		]).write();
}