sap.ui.controller("view.desktop.PlannedOrder", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ui5.desktop.SalesOrder
*/
	onInit: function() {   
	    //var oModel = new sap.ui.model.odata.ODataModel("model/PlannedOrders(1)");
        //this.getView().setModel(oModel);
        
        
    	var sURI= "http://services.odata.org/Northwind/Northwind.svc/Categories(1)";
    	var oModel = new sap.ui.model.odata.ODataModel(sURI, true);
        this.getView().setModel(oModel);
        
        //var oTable = sap.ui.getCore().byId("table");
        //oTable.setModel(oModel);
        
	    //this.getView().setModel(oModel);
	    //var oModelDetail = new sap.ui.model.odata.ODataModel("/model/Reservations");                                                                                                                                                     
	    //var oTable = this.getView().getId("testtable");
	    //oTable.setModel(oModelDetail).bindRows("/Reservation");
	    //var oTable = this.getView().getId("testtable");
	    //oTable.
        // var oModel = new sap.ui.model.json.JSONModel("model/plannedorders.json");
        // this.getView().setModel(oModel);
        // this.getView().bindElement("/PlannerOrdersCollection/0");
        
        // // set i18n model
        // var i18nModel = new sap.ui.model.resource.ResourceModel({
        // bundleUrl : "i18n/production.properties"
        // });
        // this.getView().setModel(i18nModel, "i18n");

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ui5.desktop.SalesOrder
*/
	onBeforeRendering: function() {
	    
        // var oModel = new sap.ui.model.json.JSONModel("model/plannedorders.json");
        // this.getView().setModel(oModel);
        // this.getView().bindElement("/PlannerOrdersCollection/0");
        
        // // set i18n model
        // var i18nModel = new sap.ui.model.resource.ResourceModel({
        // bundleUrl : "i18n/production.properties"
        // });
        // this.getView().setModel(i18nModel, "i18n");
	}

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ui5.desktop.SalesOrder
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ui5.desktop.SalesOrder
*/
//	onExit: function() {
//
//	}

});