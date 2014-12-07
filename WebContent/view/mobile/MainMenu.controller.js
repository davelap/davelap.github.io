var oApp;
sap.ui.controller("mobile.MainMenu", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ui5.MainMenu
*/
	onInit: function() {
        oApp = oGlobalApp;
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ui5.MainMenu
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ui5.MainMenu
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ui5.MainMenu
*/
//	onExit: function() {
//
//	}
	
	OpenCarList: function() {
	    
		oApp.to("idPageCarList");
	},
	
	OpenCarDetail: function() {
		oApp.to("idPageCarDetail");
	},
	
	OpenCarListCarousel: function() {
		oApp.to("idPageCarListCarousel");
	},
	
	
	
	OpenDesktopCarList: function() {
		oApp.to("idPageCarDesktopList");
	},
	
	OpenDesktopCarListCarousel: function() {
		oApp.to("idPageCarListDesktopCarousel");
	},
	
	OpenMaterialsList: function() {
		oApp.to("idViewMaterialsList");
	},
	
	OpenSalesOrder: function() {
		oApp.to("idViewSalesOrder");
	},
	
	OpenSalesOrderList: function() {
		oApp.to("idViewSalesOrderList");
	},
	
	OpenPlannedOrder: function() {
	    oApp.to("idViewPlannedOrder");
	},
	
	OpenPlannedOrderList: function () {
		oApp.to("idViewPlannedOrderList");
	},
	
	OpenODataTest: function(){
		oApp.to("idoDataTest");
	},
	
	OpenProducts: function(){
	    oApp.to("idProducts");
	},
	
	OpenFindDealer: function() {
		oApp.to("idPageFindDealer");
	}
});