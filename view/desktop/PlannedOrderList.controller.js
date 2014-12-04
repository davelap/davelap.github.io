sap.ui.controller("view.desktop.PlannedOrderList", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ui5.desktop.SalesOrder
*/
	onInit: function() {
	    var sURI= "http://services.odata.org/V3/Northwind/Northwind.svc";
	    var oModel2 = new sap.ui.model.odata.ODataModel(sURI, true);

	   // var oModel2 = new sap.ui.model.json.JSONModel();
    //     oModel2.setSizeLimit(15);
    //     $.getJSON("https://services.odata.org/V3/Northwind/Northwind.svc/Categories?$format=json",  function(result){
    //               var data = result.value;
    //               oModel2.setData(data);
    //               console.log(result.value);
    //           });
        var oTable = this.getView().byId("mytable");
        oTable.setModel(oModel2);
        oTable.bindRows("/Categories");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ui5.desktop.SalesOrder
*/
	onBeforeRendering: function() {
        //var oModel2 = new sap.ui.model.odata.ODataModel("https://services.odata.org/V3/Northwind/Northwind.svc/");

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