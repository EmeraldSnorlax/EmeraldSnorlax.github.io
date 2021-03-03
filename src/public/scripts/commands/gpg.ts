import { Line, Phrase } from '../line';

const keyFingerprint = '79C9 389B 5364 37A3 DE0A  FAC9 5793 0CE7 0D34 23B4';
const keyFile = './public/EmeraldSnorlax.pub.gpg';
export default function gpg(): void {
	new Line(
		[new Phrase('white', `<br><br>
		gpg: pub   rsa4096 2020-12-27 [SC] [expires: 2021-12-27]<br>
      gpg: 79C9 389B 5364 37A3 DE0A  FAC9 5793 0CE7 0D34 23B4<br>
		gpg: [ultimate] EmeraldSnorlax (snorlax.cc) &lt;emeraldsnorlax@disroot.org&gt;<br>
		gpg: sub   rsa4096 2020-12-27 [E] [expires: 2021-12-27]<br>
		`)]
	).write();
	window.open(keyFile, '_self');
}