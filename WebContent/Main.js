var oApp;
var oShell;

function initApplication(){
    oShell = new sap.ui.unified.Shell("myShell");
    oApp = new sap.m.App("myApp", {initialPage:"idMainMenu"});
    
    
	//Create mobile views
	var viewMobileMainMenu          = sap.ui.view({id:"idMainMenu",  viewName:"ui5.mobile.MainMenu", type:sap.ui.core.mvc.ViewType.XML});
	var viewMobileCarListCarousel   = sap.ui.view({id:"idPageCarListCarousel", viewName:"ui5.mobile.CarListCarousel", type:sap.ui.core.mvc.ViewType.XML});
	var viewMobileCarList           = sap.ui.view({id:"idPageCarList", viewName:"ui5.mobile.CarList", type:sap.ui.core.mvc.ViewType.XML});
	var viewMobileCarDetail         = sap.ui.view({id:"idPageCarDetail", viewName:"ui5.mobile.CarDetail", type:sap.ui.core.mvc.ViewType.XML});
	var viewMobileFindDeader        = sap.ui.view({id:"idPageFindDealer", viewName:"ui5.mobile.FindDealer", type:sap.ui.core.mvc.ViewType.XML});
	var viewoDataProducts           = sap.ui.view({id:"idProducts", viewName:"ui5.mobile.Products", type:sap.ui.core.mvc.ViewType.XML});

	//Create desktop views
	var viewDesktopCarList 			= sap.ui.view({id:"idPageCarDesktopList", viewName:"ui5.desktop.CarList", type:sap.ui.core.mvc.ViewType.XML});
	var viewDesktopCarListCarousel 	= sap.ui.view({id:"idPageCarListDesktopCarousel", viewName:"ui5.desktop.CarListCarousel", type:sap.ui.core.mvc.ViewType.XML});
	var viewSalesOrder 				= sap.ui.view({id:"idViewSalesOrder", viewName:"ui5.desktop.SalesOrder", type:sap.ui.core.mvc.ViewType.XML});
	var viewSalesOrderList   		= sap.ui.view({id:"idViewSalesOrderList", viewName:"ui5.desktop.SalesOrderList", type:sap.ui.core.mvc.ViewType.XML});	
	var viewMaterialsList           = sap.ui.view({id:"idViewMaterialsList", viewName:"ui5.desktop.MaterialsList", type:sap.ui.core.mvc.ViewType.XML});
    
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
    oApp.addPage(viewMaterialsList);
    
    var oHomeHeadItem = new sap.ui.unified.ShellHeadItem("shellHome", {icon:"sap-icon://home", tooltip:"Home",
                                                press:function() {
                                                        oApp.to("idMainMenu");
                                                }
                                                });
    oShell.addHeadEndItem(oHomeHeadItem);
    
    var oLogoffHeadItem = new sap.ui.unified.ShellHeadItem("shellLogoff", {icon:"sap-icon://log", tooltip:"Logoff",
                                                press:function() {
                                                        oApp.to("idMainMenu");
                                                }
                                                });
    oShell.addHeadEndItem(oLogoffHeadItem);
    
    oShell.addContent(oApp);
    oShell.placeAt("body");

}


function initApplicationMobile(){
    oShell = new sap.ui.unified.Shell("myShell");
    oApp = new sap.m.App("myApp", {initialPage:"idMainMenu"});
    
    
	//Create mobile views
	var viewMobileMainMenu          = sap.ui.view({id:"idMainMenu",  viewName:"ui5.mobile.MainMenu", type:sap.ui.core.mvc.ViewType.XML});
	var viewMobileCarListCarousel   = sap.ui.view({id:"idPageCarListCarousel", viewName:"ui5.mobile.CarListCarousel", type:sap.ui.core.mvc.ViewType.XML});
	var viewMobileCarList           = sap.ui.view({id:"idPageCarList", viewName:"ui5.mobile.CarList", type:sap.ui.core.mvc.ViewType.XML});
	var viewMobileCarDetail         = sap.ui.view({id:"idPageCarDetail", viewName:"ui5.mobile.CarDetail", type:sap.ui.core.mvc.ViewType.XML});
	var viewMobileFindDeader        = sap.ui.view({id:"idPageFindDealer", viewName:"ui5.mobile.FindDealer", type:sap.ui.core.mvc.ViewType.XML});
	var viewoDataProducts           = sap.ui.view({id:"idProducts", viewName:"ui5.mobile.Products", type:sap.ui.core.mvc.ViewType.XML});

	//Create desktop views
	var viewDesktopCarList 			= sap.ui.view({id:"idPageCarDesktopList", viewName:"ui5.desktop.CarList", type:sap.ui.core.mvc.ViewType.XML});
	var viewDesktopCarListCarousel 	= sap.ui.view({id:"idPageCarListDesktopCarousel", viewName:"ui5.desktop.CarListCarousel", type:sap.ui.core.mvc.ViewType.XML});
	var viewSalesOrder 				= sap.ui.view({id:"idViewSalesOrder", viewName:"ui5.desktop.SalesOrder", type:sap.ui.core.mvc.ViewType.XML});	
	var viewMaterialsList           = sap.ui.view({id:"idViewMaterialsList", viewName:"ui5.desktop.MaterialsList", type:sap.ui.core.mvc.ViewType.XML});
    
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
	oApp.addPage(viewMaterialsList);
    
    var oHomeHeadItem = new sap.ui.unified.ShellHeadItem("shellHome", {icon:"sap-icon://home", tooltip:"Home",
                                                press:function() {
                                                        oApp.to("idMainMenu");
                                                }
                                                });
    oShell.addHeadEndItem(oHomeHeadItem);
    
    var oLogoffHeadItem = new sap.ui.unified.ShellHeadItem("shellLogoff", {icon:"sap-icon://log", tooltip:"Logoff",
                                                press:function() {
                                                        oApp.to("idMainMenu");
                                                }
                                                });
    oShell.addHeadEndItem(oLogoffHeadItem);
    
    oShell.addContent(oApp);
    oShell.placeAt("body");

}
