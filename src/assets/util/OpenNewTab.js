const openNewTab = url => {
  const newWindow = window.open( url, '_blank', 'noopener,noreferrer' );
  if( newWindow ) newWindow.opener = null;
};

export default openNewTab;