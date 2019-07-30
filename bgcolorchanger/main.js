var bgcolorExtension = {
    /**
     * The install extension will be called by Testnav and by this time the Testnav would have been loaded
     *  
     */
    "installExtension" : function () {
        var onScriptLoaded = function () {
            var onScriptExecuted = function () {
                window.testnavExtensions.trigger(window.testnavExtensions.INSTALLED,{"success":true});
            }
            var onScriptExecutedFailed = function () {
                window.testnavExtensions.trigger(window.testnavExtensions.INSTALLED,{"success":false});
            }
            window.testnavExtensions.executeScript({"code":"com_testnavExtesnion_bgcolorchanger.startExtension()"},onScriptExecuted,onScriptExecutedFailed);
        }

        var onScriptLoadFailed = function () {
            window.testnavExtensions.trigger(window.testnavExtensions.INSTALLED,{"success":false});
        }
        window.testnavExtensions.executeScript({"files":["bgcolorchanger.js"]},onScriptLoaded,onScriptLoadFailed);
    },
    /**
     * The install extension will be called by Testnav and by this time the Testnav would have been loaded
     *  
     */
    "uninstallExtension" : function () {
        var onScriptExecuted = function () {
            window.testnavExtensions.trigger(window.testnavExtensions.UNINSTALLED,{"success":true});
        }
        var onScriptExecutedFailed = function () {
            window.testnavExtensions.trigger(window.testnavExtensions.UNINSTALLED,{"success":false});
        }
        window.testnavExtensions.executeScript({"code":"com_testnavExtesnion_bgcolorchanger.stopExtension();com_testnavExtesnion_bgcolorchanger=undefined"},onScriptExecuted,onScriptExecutedFailed);
    }
}
/**
 * The extension needs to be registered so that Testnav can get acccess to the extension Object
 * in order to call the installExtension and uninstallExtension methods
 */
window.testnavExtensions.registerExtension(bgcolorExtension);