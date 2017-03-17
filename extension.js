var ns;

if( Boolean( chrome ) )
{
  ns = chrome;
}
else
{
  ns = browser;
}



ns.browserAction.onClicked.addListener(
function( tab )
{
  ns.tabs.create( { 'url': chrome.extension.getURL( 'ui/index.html' ) }, function(tab) {} );
} );
