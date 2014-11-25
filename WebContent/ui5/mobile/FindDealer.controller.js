sap.ui.controller("ui5.mobile.FindDealer", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ui5.FindDealer
*/
	onInit: function() {
	   this.getView().byId("map_canvas").addStyleClass("myMap");
	    //sap.ui.getCore().loadLibrary("googlemaps", "libs.googlemaps");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ui5.FindDealer
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ui5.FindDealer
*/
	onAfterRendering: function() {
        if (!this.initialized) {
            this.initialized = true;
            this.geocoder = new google.maps.Geocoder();
            var mapOptions = {
                center: new google.maps.LatLng(-34.397, 150.644),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(this.getView().byId("map_canvas").getDomRef(),
                mapOptions);
        }
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ui5.FindDealer
*/
//	onExit: function() {
//
//	}
    actSearch: function () {
        var map = this.map;
        var address = this.getView().byId("inpSearch").getValue();
        this.geocoder.geocode({ "address": address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
    }
});