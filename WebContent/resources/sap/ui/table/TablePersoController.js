/*
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.table.TablePersoController");jQuery.sap.require("sap.ui.base.ManagedObject");sap.ui.base.ManagedObject.extend("sap.ui.table.TablePersoController",{constructor:function(i,s){sap.ui.base.ManagedObject.apply(this,arguments)},metadata:{properties:{"autoSave":{type:"boolean",defaultValue:true},"persoService":{type:"any"},"customDataKey":{type:"string",defaultValue:"persoKey"}},associations:{"table":{type:"sap.ui.table.Table",multiple:false}},library:"sap.ui.table"}});
sap.ui.table.TablePersoController.prototype.init=function(){this._schemaProperty="_persoSchemaVersion";this._schemaVersion="1.0";this._oInitialPersoData=null;this._aTableEvents=["columnResize","columnMove","columnVisibility","sort","filter","group"];this._aColumnProperties=["visible","width","sorted","sortOrder","grouped","summed"];this._bSaveFilters=false;if(this._bSaveFilters){this._aTableEvents.push("filter");this._aColumnProperties.push("filtered");this._aColumnProperties.push("filterValue")}};
sap.ui.table.TablePersoController.prototype.exit=function(){var t=this._getTable();if(t){this._manageTableEventHandlers(t,false)}delete this._schemaProperty;delete this._schemaVersion;delete this._oInitialPersoData;delete this._oDialog};
sap.ui.table.TablePersoController.prototype.setPersoService=function(s){s=this.validateProperty("persoService",s);if(s&&(!jQuery.isFunction(s.getPersData)||!jQuery.isFunction(s.setPersData)||!jQuery.isFunction(s.delPersData))){throw new Error("Value of property \"persoService\" needs to be null/undefined or an object that has the methods "+"\"getPersData\", \"setPersData\" and \"delPersData\".")}var o=this.getPersoService();this.setProperty("persoService",s,true);var n=this.getPersoService();if(n&&n!==o&&this._getTable()&&(this.getAutoSave()||!o)){this.refresh()}return this};
sap.ui.table.TablePersoController.prototype.setAutoSave=function(a){var o=this.getAutoSave();this.setProperty("autoSave",a,true);var n=this.getAutoSave();if(n&&!o){this.savePersonalizations()}return this};
sap.ui.table.TablePersoController.prototype.setTable=function(t){var o=this._getTable();if(o){o._oPersoController=undefined}this.setAssociation("table",t,true);var n=this._getTable();if(n){n._oPersoController=this}if(o){this._manageTableEventHandlers(o,false)}if(n&&n!==o){this._oInitialPersoData=this._getCurrentTablePersoData(true);this._manageTableEventHandlers(n,true);if(this.getPersoService()&&(this.getAutoSave()||!o)){this.refresh()}}else if(!n){this._oInitialPersoData=null}return this};
sap.ui.table.TablePersoController.prototype.setCustomDataKey=function(c){var o=this.getCustomDataKey();this.setProperty("customDataKey",c,true);var n=this.getCustomDataKey();if(o!==n&&this.getAutoSave()){this.savePersonalizations()}return this};
sap.ui.table.TablePersoController.prototype._manageTableEventHandlers=function(t,a){for(var i=0,l=this._aTableEvents.length;i<l;i++){var f=t[(a?"attachEvent":"detachEvent")];f.apply(t,[this._aTableEvents[i],this._tableEventHandler,this])}};
sap.ui.table.TablePersoController.prototype.refresh=function(){var t=this;var s=this.getPersoService();if(s){return s.getPersData().done(function(S){var D=(S&&jQuery.isArray(S.aColumns))?S:t._oInitialPersoData;t._adjustTable(D)}).fail(function(){jQuery.sap.log.error("Problem reading persisted personalization data.")})}else{jQuery.sap.log.error("The Personalization Service is not available!");var d=jQuery.Deferred();d.reject();return d.promise()}};
sap.ui.table.TablePersoController.prototype.savePersonalizations=function(){var s=this.getPersoService();if(s){var d=this._getCurrentTablePersoData();d[this._schemaProperty]=this._schemaVersion;return s.setPersData(d).fail(function(){jQuery.sap.log.error("Problem persisting personalization data.")})}else{jQuery.sap.log.error("The Personalization Service is not available!");var D=jQuery.Deferred();D.reject();return D.promise()}};
sap.ui.table.TablePersoController.prototype._adjustTable=function(d){var t=this._getTable();if(!t||!d||!jQuery.isArray(d.aColumns)){return}var c={},C=t.getColumns();for(var i=0,l=C.length;i<l;i++){c[this._getColumnPersoKey(C[i])]=C[i]}var a=d.aColumns;for(var i=0,l=a.length;i<l;i++){var o=a[i];var b=c[o.id];if(b){if(t.indexOfColumn(b)!==o.order){t.removeColumn(b);t.insertColumn(b,o.order)}var m=b.getMetadata();for(var j=0,e=this._aColumnProperties.length;j<e;j++){var p=this._aColumnProperties[j];if(o[p]!==undefined){try{if(m.hasProperty(p)&&b.getProperty(p)!=o[p]){b.setProperty(p,o[p])}}catch(f){jQuery.sap.log.error("sap.ui.table.TablePersoController: failed to apply the value \""+b[p]+"\" for the property + \""+p+"\".")}}}}}if(typeof t._onPersoApplied==="function"){t._onPersoApplied()}};
sap.ui.table.TablePersoController.prototype._tableEventHandler=function(e){if(this.getAutoSave()&&!this._iTriggerSaveTimeout){var t=this;this._iTriggerSaveTimeout=setTimeout(function(){t.savePersonalizations();t._iTriggerSaveTimeout=null},0)}};
sap.ui.table.TablePersoController.prototype._getCurrentTablePersoData=function(f){var t=this._getTable(),c=t.getColumns();var d={aColumns:[]};for(var i=0,l=c.length;i<l;i++){var C=c[i];var p=this._getColumnPersoKey(C);var o={id:p,order:i};var m=C.getMetadata();for(var j=0,a=this._aColumnProperties.length;j<a;j++){var P=this._aColumnProperties[j];if(m.hasProperty(P)){o[P]=C.getProperty(P)}}if(f){o.text=C.getLabel()&&C.getLabel().getText()||p}d.aColumns.push(o)}return d};
sap.ui.table.TablePersoController.prototype._getTable=function(){return sap.ui.getCore().byId(this.getTable())};
sap.ui.table.TablePersoController.prototype._getColumnPersoKey=function(c){return this._getPersoKey(this._getTable())+"-"+this._getPersoKey(c)};
sap.ui.table.TablePersoController.prototype._getPersoKey=function(c){var p=c.data(this.getCustomDataKey());if(!p){p=c.getId();if(p.indexOf(sap.ui.getCore().getConfiguration().getUIDPrefix())===0){jQuery.sap.log.warning("Generated IDs should not be used as personalization keys! The stability cannot be ensured! (Control: \""+c.getId()+"\")")}}return p};
sap.ui.table.TablePersoController.prototype.openDialog=function(s){sap.ui.getCore().loadLibrary("sap.m");jQuery.sap.require("sap.m.TablePersoDialog");if(!this._oDialog){var t=this;this._oDialog=new sap.m.TablePersoDialog({persoService:this.getPersoService(),showSelectAll:true,showResetAll:true,grouping:false,contentWidth:s&&s.contentWidth,contentHeight:s&&s.contentHeight||"20rem",initialColumnState:this._oInitialPersoData.aColumns,columnInfoCallback:function(T,p,P){return t._getCurrentTablePersoData(true).aColumns},confirm:function(){t._adjustTable(this.retrievePersonalizations());if(t.getAutoSave()){t.savePersonalizations()}}});this._oDialog._oDialog.removeStyleClass("sapUiPopupWithPadding");jQuery.sap.syncStyleClass("sapUiSizeCompact",this._getTable(),this._oDialog._oDialog)}this._oDialog.open()};