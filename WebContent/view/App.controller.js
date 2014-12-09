var oApp;

sap.ui.controller("root.view.App", {
	onInit: function() {
        
        oApp = this.byId("myApp");
        oGlobalApp = this.byId("myApp");
        
    	//Create mobile views
    	var viewMobileMainMenu          = sap.ui.view({id:"idMainMenu",  viewName:"view.mobile.MainMenu", type:sap.ui.core.mvc.ViewType.XML});
    	var viewMobileCarListCarousel   = sap.ui.view({id:"idPageCarListCarousel", viewName:"view.mobile.CarListCarousel", type:sap.ui.core.mvc.ViewType.XML});
    	var viewMobileCarList           = sap.ui.view({id:"idPageCarList", viewName:"view.mobile.CarList", type:sap.ui.core.mvc.ViewType.XML});
    	var viewMobileCarDetail         = sap.ui.view({id:"idPageCarDetail", viewName:"view.mobile.CarDetail", type:sap.ui.core.mvc.ViewType.XML});
    	var viewMobileFindDeader        = sap.ui.view({id:"idPageFindDealer", viewName:"view.mobile.FindDealer", type:sap.ui.core.mvc.ViewType.XML});
    	var viewoDataProducts           = sap.ui.view({id:"idProducts", viewName:"view.mobile.Products", type:sap.ui.core.mvc.ViewType.XML});
    
    	//Create desktop views
    	var viewDesktopCarList 			= sap.ui.view({id:"idPageCarDesktopList", viewName:"view.desktop.CarList", type:sap.ui.core.mvc.ViewType.XML});
    	var viewDesktopCarListCarousel 	= sap.ui.view({id:"idPageCarListDesktopCarousel", viewName:"view.desktop.CarListCarousel", type:sap.ui.core.mvc.ViewType.XML});
    	var viewSalesOrder 				= sap.ui.view({id:"idViewSalesOrder", viewName:"view.desktop.SalesOrder", type:sap.ui.core.mvc.ViewType.XML});	
    	var viewSalesOrderList   		= sap.ui.view({id:"idViewSalesOrderList", viewName:"view.desktop.SalesOrderList", type:sap.ui.core.mvc.ViewType.XML});	
    	var viewPlannedOrder            = sap.ui.view({id:"idViewPlannedOrder", viewName:"view.desktop.PlannedOrder", type:sap.ui.core.mvc.ViewType.XML});
        var viewPlannedOrderList        = sap.ui.view({id:"idViewPlannedOrderList", viewName:"view.desktop.PlannedOrderList", type:sap.ui.core.mvc.ViewType.XML});
     	var viewMaterialsList           = sap.ui.view({id:"idViewMaterialsList", viewName:"view.desktop.MaterialsList", type:sap.ui.core.mvc.ViewType.XML});
        
    	//Add Mobile Views
    	oApp.addPage(viewMobileMainMenu);
     	oApp.addPage(viewMobileCarList);
     	oApp.addPage(viewMobileCarListCarousel);
    	oApp.addPage(viewMobileFindDeader);
    	oApp.addPage(viewMobileCarDetail);
    	oApp.addPage(viewoDataProducts);
    
    	//Add desktop pages to application
    	oApp.addPage(viewDesktopCarList);
    	oApp.addPage(viewDesktopCarListCarousel);
    	oApp.addPage(viewSalesOrder);
    	oApp.addPage(viewSalesOrderList);
    	oApp.addPage(viewPlannedOrder);
     	oApp.addPage(viewPlannedOrderList);
     	oApp.addPage(viewMaterialsList);
	},
	
    ToMainMenu: function(){
	    oApp.to("idMainMenu");
	}
});