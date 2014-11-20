sap.ui.controller("ui5.Shell", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ui5.Shell
*/
	onInit: function() {
		
		
	    //var oShell = this.getView().byId("myShell");
	    //var oApp = this.getView().byId("myApp");
	    
	    
 	    //var myShell = sap.ui.view({id:"myShell", viewName:"ui5.Shell", type:sap.ui.core.mvc.ViewType.XML});
 	    //var oApp = new sap.m.App({id:"myApp", initialPage:"idMainMenu"});
 	    
// 		//Create mobile views
// 		var viewMobileMainMenu = sap.ui.view({id:"idMainMenu",  viewName:"ui5.mobile.MainMenu", type:sap.ui.core.mvc.ViewType.XML});
// 		var viewMobileCarListCarousel = sap.ui.view({id:"idPageCarListCarousel", viewName:"ui5.mobile.CarListCarousel", type:sap.ui.core.mvc.ViewType.XML});
// 		var viewMobileCarList = sap.ui.view({id:"idPageCarList", viewName:"ui5.mobile.CarList", type:sap.ui.core.mvc.ViewType.XML});
// 		var viewMobileCarDetail = sap.ui.view({id:"idPageCarDetail", viewName:"ui5.mobile.CarDetail", type:sap.ui.core.mvc.ViewType.XML});
// 		var viewMobileFindDeader = sap.ui.view({id:"idPageFindDealer", viewName:"ui5.mobile.FindDealer", type:sap.ui.core.mvc.ViewType.XML});
// 		var viewoDataTest = sap.ui.view({id:"idoDataTest", viewName:"ui5.mobile.ODataTest", type:sap.ui.core.mvc.ViewType.XML});

// 		//Create desktop views
// 		var viewDesktopMainMenu 		= sap.ui.view({id:"idDesktopMainMenu", viewName:"ui5.desktop.MainMenu", type:sap.ui.core.mvc.ViewType.XML});
// 		var viewDesktopCarList 			= sap.ui.view({id:"idPageCarDesktopList", viewName:"ui5.desktop.CarList", type:sap.ui.core.mvc.ViewType.XML});
// 		var viewDesktopCarListCarousel 	= sap.ui.view({id:"idPageCarListDesktopCarousel", viewName:"ui5.desktop.CarListCarousel", type:sap.ui.core.mvc.ViewType.XML});
// 		var viewSalesOrder 				= sap.ui.view({id:"idViewSalesOrder", viewName:"ui5.desktop.SalesOrder", type:sap.ui.core.mvc.ViewType.XML});	
		
// 		//Add Mobile Views
// 		oApp.addPage(viewMobileMainMenu);
// 		oApp.addPage(viewMobileCarList);
// 		oApp.addPage(viewMobileCarListCarousel);
// 		oApp.addPage(viewMobileFindDeader);
// 		oApp.addPage(viewMobileCarDetail);
// 		oApp.addPage(viewoDataTest);

// 		//Add desktop pages to application
// 		oApp.addPage(viewDesktopMainMenu);
// 		oApp.addPage(viewDesktopCarList);
// 		oApp.addPage(viewDesktopCarListCarousel);
// 		oApp.addPage(viewSalesOrder);
		
// 		oShell.addContent(oApp);
// 		oShell.placeAt("body");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ui5.Shell
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ui5.Shell
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ui5.Shell
*/
//	onExit: function() {
//
//	}
	

	  
	handlePressHome: function() {
	    var app = this.getView().byId("myApp");
		app.to("idMainMenu");
	},
	  
	handlePressPane: function() {
	    var oShell = this.getView().byId("myShell");
	    var bState = oShell.getShowPane();
	    oShell.setShowPane(!bState);
	},
	
	OpenCarList: function() {
	    var oApp = this.getView().byId("myApp");
		oApp.to("idPageCarDetail");
	},
	
	OpenCarDetail: function() {
	    var oApp = this.getView().byId("myApp");
		oApp.to("idPageCarDetail");
	},
	
	OpenCarListCarousel: function() {
	    var oApp = this.getView().byId("myApp");
		oApp.to("idPageCarListCarousel");
	},
	
	OpenDesktopCarList: function() {
	    var oApp = this.getView().byId("myApp");
		oApp.to("idPageCarDesktopList");
	},
	
	OpenDesktopCarListCarousel: function() {
	    var oApp = this.getView().byId("myApp");
		oApp.to("idPageCarListDesktopCarousel");
	},
	
	OpenSalesOrder: function() {
	    var oApp = this.getView().byId("myApp");
		oApp.to("idViewSalesOrder");
	},
	
	OpenODataTest: function(){
	    var oApp = this.getView().byId("myApp");
		oApp.to("idoDataTest");
	},
	
	OpenFindDealer: function() {
	    var oApp = this.getView().byId("myApp");
		oApp.to("idPageFindDealer");
	}
	
});