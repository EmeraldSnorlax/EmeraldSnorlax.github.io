import copy from './copy';

const download = document.getElementById('download-key')!;
const fingerprint = document.getElementById('copy-fingerprint')!;

const keyFingerprint = '79C9 389B 5364 37A3 DE0A FAC9 5793 0CE7 0D34 23B4';

const copyIcon = `<svg class="fill-current mr-4" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
fill="#000000">
<title>Copy</title>
<path d="M0 0h24v24H0V0z" fill="none" />
<path d="M16 1H2v16h2V3h12V1zm5 4H6v18h15V5zm-2 16H8V7h11v14z" />
</svg>`;

const doneIcon = `<svg class="fill-current mr-4" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
<path d="M0 0h24v24H0V0z" fill="none" />
<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
</svg>`;

const iconContainer = document.getElementById('copy-icon-container')!;

// eslint-disable-next-line import/prefer-default-export
export function init() {
  download.addEventListener('click', () => {
    window.open('./EmeraldSnorlax.pub.gpg', '_self');
  });
  fingerprint.addEventListener('click', () => {
    copy(keyFingerprint, () => {
      iconContainer.innerHTML = doneIcon;
      setTimeout(() => {
        iconContainer.innerHTML = copyIcon;
      }, 3000);
    });
  });
}
