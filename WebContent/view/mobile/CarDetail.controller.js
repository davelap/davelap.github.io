sap.ui.controller("view.mobile.CarDetail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ui5.CarDetail
*/
	onInit: function() {
		var oData = {
						maker: "Ford",
						model: "Mustang",
						year: "1967"
					};

		var oDataMakers = {
							"makers": 
								[
								  {"name":"Ford"},
								  {"name":"Dodge"}
								]
						  };
		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData({modelData : oData,
						makers:     oDataMakers});
        this.getView().setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ui5.CarDetail
*/
	onBeforeRendering: function() {

        
		//var oModelMakers = new sap.ui.model.json.JSONModel();
		//oModelMakers.loadData("model/Maker.json");
		//oModelMakers.setData(oDataMakers);
		
        //this.getView().byId("idTestCombo").setModel(oModelMakers);
        
        //var itemTemplate = new sap.ui.core.ListItem(this.createId("comboTemplate"),{
        //    text: "{name}"
        //}); 
       
        
        //var oDropdown = this.getView().byId("idTestCombo");
        //oDropdown.bindItems("/makers/makers", itemTemplate);
	}
	

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ui5.CarDetail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ui5.CarDetail
*/
//	onExit: function() {
//
//	}
});