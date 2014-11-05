require(["js/require.config"], function (baseConfig) {
    "use strict";

    // Set the require base configurations
    requirejs.config(baseConfig);

    //common requires to be loaded now that the require paths have been set
    require(["require", "backbone", "marionette", "wix.ui", "bootstrap"], 
        function(require, backbone, marionette){
        window.Mustache = require("mustache"); //http://stackoverflow.com/questions/16556419/requirejs-not-loading-mustache-window-object

        // App Name: 
        // App key: 139f6b68-5aba-aa99-08ed-1ef9afd2d23c
        // App Secret key: bda08317-504c-451e-9c6a-89373fa4fe82
        
     

        //TODO: routes: widget settings callback
    	//app specific require
		//app specific require
        require(["controllers/WixController"], function (WixController) {
            window.router = new WixController();
            Backbone.history.start({pushState: true});

            /**
             * incase the Browser supports pushState then disable anchors-inks default browser server-calls
             * so they'll be handled on the client side only.
             * http://artsy.github.io/blog/2012/06/25/replacing-hashbang-routes-with-pushstate/
             * https://gist.github.com/tbranyen/1142129
             * @param  {[type]} evt [description]
             * @return {[type]}     [description]
             */
            if (Backbone.history && Backbone.history._hasPushState) {
                $(document).on('click', 'a:not([data-bypass])', function (evt) {
                    var href = $(this).attr('href');
                    var protocol = this.protocol + '//';
                    //TODO: replace hash calls with absolute path
                    if (href.slice(protocol.length) !== protocol) {
                      evt.preventDefault();
                      router.navigate(href, true);
                    }
                });
            }    

        });
    	
    });
});