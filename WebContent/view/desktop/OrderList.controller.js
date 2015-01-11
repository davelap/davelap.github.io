sap.ui.controller("view.desktop.OrderList", {

	onInit: function() {

	},
	onBeforeRendering: function() {

	},
	
	EditOrder: function(evt) {
	   var context = evt.getSource().getBindingContext();
	   var idViewOrder = "idViewOrder";
	   
        oGlobalApp.to(idViewOrder);
        
        //If context is set, set order view context
        if (context){
            var page = oGlobalApp.getPage(idViewOrder);
            page.setBindingContext(context);
        }
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