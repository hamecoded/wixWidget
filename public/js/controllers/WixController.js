/**
 * App Router
 * Author: Oded Sagir
 * @param  Object require for adding dependencies
 * @return Object         Class Object
 */		
define(["require",
    "models/SettingsModel", "views/SettingsView",
    "models/WidgetModel", "views/WidgetView"], 
	function (require, SettingsModel, SettingsView, WidgetModel, WidgetView) {
    "use strict";
	
    var WixController = Backbone.Router.extend({
    	// reuse postlist collection and view while navigating
    	// unlike removing a single post view when paginating
    	routes: {
    		"": "home",
            "callback": "showCallback",
    		"settings": "showSettings",
    		"widget": "showWidget"
    	},
    	initialize: function(){

    	},
		// Handlers
		home: function(){
			this.navigate("/settings", {trigger: true, replace: true});
		},
        showCallback: function () {
            console.log("callback");
            
        },
        showSettings: function () {
            console.log("settings");
            var settingsModel = new SettingsModel();

            var settingsView = new SettingsView({
                el: "body",
                model: settingsModel
            }); 
            
        },
    	showWidget: function () {
    		console.log("widget");
			var widgetModel = new WidgetModel();

            var widgetView = new WidgetView({
                el: "body",
                model: widgetModel
            }); 
    	}

    });
			
   
    return WixController; 
});