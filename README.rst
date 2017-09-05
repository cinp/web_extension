Web Extension
=============

This provides a generic CInP API Browser/Client as a Web Extension(Browser plugin)


Installation
============

NOTE: when the interface get's ironed out and stablized, we will package and
publish a packaged version of the plugin to the Chrome and Firefox Sites/Stores.
PLEASE do not publish this plugin to the Chrome/Firefox extension Site/Store.  You
are welcome to make your own extension, if you make it ovious it is your own and
it does not cause confusion with this extension.  If you have sujestions for
this extension please submit a PR or issue.

Chrome - Dev Mode
-----------------

Goto `chrome://extensions/` check `Developer Mode` check box, now click the
`Load Unpacked Extension`, browse to the web_extension folder and select open.
You should now have the Extension loaded, it will only stay loaded until
Chrome is restarted.  To reload changes hit the reload button on the extensions 
page or reload when the extension is open.

Firefox - Dev Mode
------------------

Goto `about:debugging`, click `Load Temporary Add-on` and select any file in the
web_extension folder.  Restarting the browser will unload the Extension.  To reload
there is a `Reload` button on the `about:debugging` screen for the CInP Extension.


Using
=====

Once installed, click the CInP icon in your browser, this will open up a new tab.
Type your URL ( Including the base path ), into the `API Location` box and hit
`Connect`.  The Extensions will *DESCRIBE* the URL and follow any child Namespaces
and populate them on the left.  If you require and authencated sessoin, obtain the
`Auth Id` and `Auth Token` from the approprate  (usually a login action on a user
/session model) and put thoes into the `Auth Id` and `Auth Token` fields.  All requests
with at least the `Auth Token` field will be made with the Id annd Token specified
in the `Auth-Id` and `Auth-Token` headers respectivly.

When selecting a Namespace on the left, the Extesion will *DESCRIBE* that Namespace
and show the describe detail on the `Describe` tab.  All other tabs will be disabled.

Selecting a Model on the left will cause the Extension to *DESCRIBE* that Model
and show fields and describe detail on the `Describe` tab.  The `List` tab will
use the *LIST* method to reterieve records, NOTE: at this time there isn't support
for list filters.  `Get` tab will *GET* an object (NOTE: do not include ':' in the
object id, thoes are added).  `Create` tab will prompt for RW and RC fields and
submit *CREATE* requests.  `Update` tab has an id field, fill your id in (as with
the `Get` tab) and push `Get`, then you may make changes to the object and push
`Update`,  the resulting object is then re-displaied.  `Delete` tab prompts for an Id
and performs a *DELETE* request.  `Call` lists all actions that were described,
upon selecting one the paramaters for that action are displaied.  If it is a
non-static action, an `Id` field will be displaied for the `Id` of the object
to run the action against.


Footnote
========

The UI on this extension is not the best, it works but is not pretty.  I am not 
a UI expert (I don't even play on on TV), if you are and would like to help make
this tool more usable, by all means, let me know.
