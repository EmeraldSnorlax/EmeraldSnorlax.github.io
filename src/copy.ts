function fallback(text: string): void {
  // eslint-disable-next-line no-alert
  prompt('You might want to upgrade your browser... (Copy this)', text);
}

export default function copy(text: string, success: Function): void {
  if (!navigator.clipboard) {
    fallback(text);
  } else {
    try {
      navigator.clipboard.writeText(text).then(() => {
        success();
      }, () => {
        fallback(text);
      });
    } catch {
      fallback(text);
    }
  }
}
