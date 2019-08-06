var bgcolorExtension = {
    /**
     * The install extension will be called by Testnav and by this time the Testnav would have been loaded
     *  
     */
    "installExtension" : function () {
        var onScriptLoaded = function () {
            var onScriptExecuted = function () {
                console.log("Success");
                
            }
            var onScriptExecutedFailed = function () {
                console.log("Failed");
                window.testnavExtensions.trigger(window.testnavExtensions.INSTALL_FAIL);
            }
            window.testnavExtensions.executeScript({"code":"com_testnavExtesnion_bgcolorchangerlogin.startExtension()"},onScriptExecuted,onScriptExecutedFailed);
        }

        var onScriptLoadFailed = function () {
            window.testnavExtensions.trigger(window.testnavExtensions.INSTALL_FAIL);
        }
        window.testnavExtensions.executeScript({"files":["bgcolorchangerlogin.js"]},onScriptLoaded,onScriptLoadFailed);
    },
    /**
     * The install extension will be called by Testnav and by this time the Testnav would have been loaded
     *  
     */
    "uninstallExtension" : function () {
        var onScriptExecuted = function () {
            console.log("Success");
            window.testnavExtensions.trigger(window.testnavExtensions.UNINSTALL_SUCCESS);
        }
        var onScriptExecutedFailed = function () {
            console.log("Failed");
            window.testnavExtensions.trigger(window.testnavExtensions.UNINSTALL_FAIL);
        }
        window.testnavExtensions.executeScript({"code":"com_testnavExtesnion_bgcolorchangerlogin.stopExtension();com_testnavExtesnion_bgcolorchangerlogin=undefined"},onScriptExecuted,onScriptExecutedFailed);
    }
}
/**
 * The extension needs to be registered so that Testnav can get acccess to the extension Object
 * in order to call the installExtension and uninstallExtension methods
 */
window.testnavExtensions.registerExtension(bgcolorExtension);