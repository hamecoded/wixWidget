/**
 * App Router
 * Author: Oded Sagir
 * @param  Object require for adding dependencies
 * @return Object         Class Object
 */		
define(["require",
    "models/SettingsModel", "views/SettingsView"], 
	function (require, SettingsModel, SettingsView) {
    "use strict";
	
    var WixController = Backbone.Router.extend({
    	// reuse postlist collection and view while navigating
    	// unlike removing a single post view when paginating
    	posts: null, //PostsCollection
    	postsList: null, //PostsListView
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
			
    	}

    });
			
   
    return WixController; 
});