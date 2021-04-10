import copy from './copy';

const download = document.getElementById('download-key')!;
const fingerprint = document.getElementById('copy-fingerprint')!;
const fingerprintText = document.getElementById('fingerprint-text')!;

const keyFingerprint = '79C9 389B 5364 37A3 DE0A FAC9 5793 0CE7 0D34 23B4';

// eslint-disable-next-line import/prefer-default-export
export function init() {
  download.addEventListener('click', () => {
    window.open('./dist/EmeraldSnorlax.pub.gpg', '_self');
  });
  fingerprint.addEventListener('click', () => {
    copy(keyFingerprint, () => {
      fingerprintText.innerText = 'Copied!';
      setTimeout(() => {
        fingerprintText.innerText = '79C9 389B 5364 37A3 DE0A FAC9 5793 0CE7 0D34 23B4';
      }, 3000);
    });
  });
}
