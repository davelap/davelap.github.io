sap.ui.controller("ui5.Shell", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ui5.Shell
*/
	onInit: function() {
		var app = new sap.m.App({initialPage:"idDesktopMainMenu"});
		
		//Create desktop views
		var viewDesktopMainMenu 		= sap.ui.view({id:"idDesktopMainMenu", viewName:"ui5.desktop.MainMenu", type:sap.ui.core.mvc.ViewType.XML});
		var viewDesktopCarList 			= sap.ui.view({id:"idPageCarDesktopList", viewName:"ui5.desktop.CarList", type:sap.ui.core.mvc.ViewType.XML});
		var viewDesktopCarListCarousel 	= sap.ui.view({id:"idPageCarListDesktopCarousel", viewName:"ui5.desktop.CarListCarousel", type:sap.ui.core.mvc.ViewType.XML});
		var viewSalesOrder 				= sap.ui.view({id:"idViewSalesOrder", viewName:"ui5.desktop.SalesOrder", type:sap.ui.core.mvc.ViewType.XML});	
		
		//Create mobile views
		var pageMainMenu = sap.ui.view({id:"idMainMenu", viewName:"ui5.mobile.MainMenu", type:sap.ui.core.mvc.ViewType.XML});
		var pageCarListCarousel = sap.ui.view({id:"idPageCarListCarousel", viewName:"ui5.mobile.CarListCarousel", type:sap.ui.core.mvc.ViewType.XML});
		var pageCarList = sap.ui.view({id:"idPageCarList", viewName:"ui5.mobile.CarList", type:sap.ui.core.mvc.ViewType.XML});
		var pageCarDetail = sap.ui.view({id:"idPageCarDetail", viewName:"ui5.mobile.CarDetail", type:sap.ui.core.mvc.ViewType.XML});
		var pageFindDeader = sap.ui.view({id:"idPageFindDealer", viewName:"ui5.mobile.FindDealer", type:sap.ui.core.mvc.ViewType.XML});

		
		//Add pages to application
		app.addPage(viewDesktopMainMenu);
		app.addPage(viewDesktopCarList);
		app.addPage(viewDesktopCarListCarousel);
		app.addPage(viewSalesOrder);
		
		app.addPage(pageMainMenu);
		app.addPage(pageCarList);
		app.addPage(pageCarListCarousel);
		app.addPage(pageFindDeader);
		app.addPage(pageCarDetail);
		
		var oShell = this.getView().byId("myShell");
		oShell.addContent(app);
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
	

	  
	handlePressHome: function(oEvent) {
		app.to("idMainMenu");
	},
	  
	handlePressPane: function(oEvent) {
	    var oShell = this.getView().byId("myShell");
	    var bState = oShell.getShowPane();
	    oShell.setShowPane(!bState);
	}
});