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
    	//var viewDesktopCarList 			= sap.ui.view({id:"idPageCarDesktopList", viewName:"view.desktop.CarList", type:sap.ui.core.mvc.ViewType.XML});
    	//var viewDesktopCarListCarousel 	= sap.ui.view({id:"idPageCarListDesktopCarousel", viewName:"view.desktop.CarListCarousel", type:sap.ui.core.mvc.ViewType.XML});
    	var viewOrder 				    = sap.ui.view({id:"idViewOrder", viewName:"view.desktop.Order", type:sap.ui.core.mvc.ViewType.XML});	
    	var viewOrderList   		    = sap.ui.view({id:"idViewOrderList", viewName:"view.desktop.OrderList", type:sap.ui.core.mvc.ViewType.XML});	
    	var viewCustomer                = sap.ui.view({id:"idViewCustomer", viewName:"view.desktop.Customer", type:sap.ui.core.mvc.ViewType.XML});
        var viewCustomerList            = sap.ui.view({id:"idViewCustomerList", viewName:"view.desktop.CustomerList", type:sap.ui.core.mvc.ViewType.XML});
     	var viewProductList             = sap.ui.view({id:"idViewProductList", viewName:"view.desktop.ProductList", type:sap.ui.core.mvc.ViewType.XML});
     	var viewProduct                 = sap.ui.view({id:"idViewProduct", viewName:"view.desktop.Product", type:sap.ui.core.mvc.ViewType.XML});
        
    	//Add Mobile Views
    	oApp.addPage(viewMobileMainMenu);
     	oApp.addPage(viewMobileCarList);
     	oApp.addPage(viewMobileCarListCarousel);
    	oApp.addPage(viewMobileFindDeader);
    	oApp.addPage(viewMobileCarDetail);
    	oApp.addPage(viewoDataProducts);
    
    	//Add desktop pages to application
    	//oApp.addPage(viewDesktopCarList);
    	//oApp.addPage(viewDesktopCarListCarousel);
    	oApp.addPage(viewOrder);
    	oApp.addPage(viewOrderList);
    	oApp.addPage(viewCustomer);
     	oApp.addPage(viewCustomerList);
     	oApp.addPage(viewProductList);
     	oApp.addPage(viewProduct);
	},
	
    ToMainMenu: function(){
	    oApp.to("idMainMenu");
	}
});