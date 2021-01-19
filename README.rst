Web Extension
=============

This provides a generic CInP API Browser/Client as a Web Extension(Browser plugin)


Installation
============

NOTE: when the interface gets ironed out and stabilized, we will
publish a packaged version of the plugin to the Chrome and Firefox Sites/Stores.
PLEASE do not publish this plugin to the Chrome/Firefox extension Site/Store.  You
are welcome to make your own extension, if you make it obvious it is your own and
it does not cause confusion with this extension.  If you have suggestions for
this extension please submit a PR or issue.

Currently published to Chrome at (unlisted):
https://chrome.google.com/webstore/detail/cinp-generic-client/lacnhpojnjgdohcdggednghjibhgkeop

Firefox:
https://github.com/cinp/web_extension/releases/download/0.9.6/cinp_client-0.9.6-fx.xpi

Chrome - Dev Mode
-----------------

Go to `chrome://extensions/` check `Developer Mode` check box, now click the
`Load Unpacked Extension`, browse to the web_extension folder and select open.
You should now have the Extension loaded, it will only stay loaded until
Chrome is restarted.  To reload changes hit the reload button on the extensions
page or reload when the extension is open.

Firefox - Dev Mode
------------------

Goto `about:debugging`, click `This Firefox`, click `Load Temporary Add-on` and open
`manifest.json` in the web_extension folder.  Restarting the browser will
unload the Extension.  To reload there is a `Reload` button on the
`about:debugging` -> `This Firefox` screen for the CInP Extension.


Using
=====

Once installed, click the CInP icon in your browser, this will open up a new tab.
Type your URL ( Including the base path ), into the `API Location` box and hit
`Connect`.  The Extensions will *DESCRIBE* the URL and follow any child Namespaces
and populate them on the left.  If you require and authenticated session, obtain the
`Auth Id` and `Auth Token` from the appropriate  (usually a login action on a user
/session model) and put those into the `Auth Id` and `Auth Token` fields.  All requests
with at least the `Auth Token` field will be made with the Id and Token specified
in the `Auth-Id` and `Auth-Token` headers respectively.

When selecting a Namespace on the left, the Extension will *DESCRIBE* that Namespace
and show the describe detail on the `Describe` tab.  All other tabs will be disabled.

Selecting a Model on the left will cause the Extension to *DESCRIBE* that Model
and show fields and describe detail on the `Describe` tab.  The `List` tab will
use the *LIST* method to retrieve records, NOTE: at this time there isn't support
for list filters.  `Get` tab will *GET* an object (NOTE: do not include ':' in the
object id, those are added).  `Create` tab will prompt for RW and RC fields and
submit *CREATE* requests.  `Update` tab has an id field, fill your id in (as with
the `Get` tab) and push `Get`, then you may make changes to the object and push
`Update`,  the resulting object is then re-displayed.  `Delete` tab prompts for an Id
and performs a *DELETE* request.  `Call` lists all actions that were described,
upon selecting one the parameters for that action are displayed.  If it is a
non-static action, an `Id` field will be displayed for the `Id` of the object
to run the action against.


Footnote
========

The UI on this extension is not the best, it works but is not pretty.  I am not
a UI expert (I don't even play on on TV), if you are and would like to help make
this tool more usable, by all means, let me know.
