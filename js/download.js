function tag_download(label) {
  // prevents us from failing download if google analytics is ad-blocked
  if (typeof gtag === 'function') {
      gtag('event', 'download', {
          'event_category': 'Documents',
          'event_label': label
      });
  }
}
