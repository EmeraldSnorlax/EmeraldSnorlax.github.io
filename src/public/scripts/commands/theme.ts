import { Line, Phrase } from '../line';
import { themeStorage } from '../main';
// TODO: Save theme override when toggled

export default function theme(): void {
	let currentTheme = document.documentElement.getAttribute('data-theme');
	if (currentTheme == 'dark') {
		currentTheme = 'light';
		document.documentElement.setAttribute('data-theme', currentTheme);
		themeStorage.setItem('theme', currentTheme);
	} else {
		currentTheme = 'dark';
		document.documentElement.setAttribute('data-theme', currentTheme);
		themeStorage.setItem('theme', currentTheme);
	}
	new Line(
		[
			new Phrase('white', `<br><br>Updated your theme to ${currentTheme}.<br>`),
		]).write();
}