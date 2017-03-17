chrome.browserAction.onClicked.addListener(
function( tab )
{
  chrome.tabs.create( { 'url': chrome.extension.getURL( 'ui/index.html' ) }, function(tab) {} );
} );
