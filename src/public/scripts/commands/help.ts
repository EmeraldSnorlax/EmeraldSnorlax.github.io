import { Line, Phrase } from '../line';

export default function help(): void {
	new Line(
		[
			new Phrase('white', '<br>Here is a list of all commands.<br>'),
			new Phrase('cyan', '* help'), new Phrase('white', ': prints this menu and exits.<br>'),
			new Phrase('cyan', '* clear'), new Phrase('white', ': clears the terminal.<br>'),
			new Phrase('cyan', '* git'), new Phrase('white', ': run "git --help" for more details.<br>'),
			new Phrase('cyan', '* gpg'), new Phrase('white', ': display and download OpenPGP key and fingerprint.<br>'),
			new Phrase('cyan', '* whoami'), new Phrase('white', ': displays information about me')
		]).write();
}