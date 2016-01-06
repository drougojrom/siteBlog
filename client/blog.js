Blog.config({
	comments: {
    useSideComments: true, // default is false
    allowAnonymous: true   // default is false
  }


});

ShareIt.init({
    siteOrder: ['facebook', 'twitter'],
    sites: {
      'facebook': {
        'appId': 'YOUR_APPLICATION_ID',
        'version': 'v2.3'
      }
    },
    iconOnly: true,
    applyColors: false
  });