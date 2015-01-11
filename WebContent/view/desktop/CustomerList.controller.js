sap.ui.controller("view.desktop.CustomerList", {

	onInit: function() {

	},

	onBeforeRendering: function() {
	    
	},
	
    EditCustomer: function(evt){
	   var context = evt.getSource().getBindingContext();
	   var idViewCustomer = "idViewCustomer";
	   
        oGlobalApp.to(idViewCustomer);
        
        //If context is set, set order view context
        if (context){
            var page = oGlobalApp.getPage(idViewCustomer);
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