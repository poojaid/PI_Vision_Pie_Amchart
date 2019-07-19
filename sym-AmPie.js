(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);


	var definition = { 
		typeName: "AmPie",
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		getDefaultConfig: function(){ 
			return { 
				DataShape: 'Table',
				Height: 150,
				Width: 150,
				textColor: "black",
				backgroundColor: "white",
				
				
			} 
		},
		configOptions: function(){
		return[
		{
		title: "Format Symbol",
		mode: "format"
		}
	];
}
	}
	
	function getConfig(){
		return {
			"type": "pie",
			"theme": "light",
			"titleField"  : "attribute",
			"valueField"  : "value",
			"color": scope.config.textColor,
			"legend": {
				"enabled": scope.config.showLegend,
							"color": scope.config.textColor,
							"valueText": "[[value]] [[description]]",
							"align": "center",
							"labelWidth": 150
						},
			"dataProvider": [{
			"attribute": "Lithuania",
			"value": 501.9
			}, {
			"attribute": "Czech Republic",
			"value": 301.9
			}, {
			"attribute": "Ireland",
			"value": 201.1
			}, {
			"attribute": "Germany",
			"value": 165.8
			}, {
			"attribute": "Australia",
			"value": 139.9
			}, {
			"attribute": "Austria",
			"value": 128.3
			}, {
			"attribute": "UK",
			"value": 99
			}, {
			"attribute": "Belgium",
			"value": 60
			}, {
			"attribute": "The Netherlands",
			"value": 50
			}]
        }      
	}
  
	symbolVis.prototype.init = function(scope, elem) {
		var piep = elem.find('#piep')[0];
		piep.id = "AmPie_" + scope.symbol.Name;
		var chart = AmCharts.makeChart(piep.id, getConfig());
	function convertToChart(data){
		return data.Rows.map(function(item){
			return {
			value: item.Value,
			attribute: item.Label
		}
		});
}
	this.onDataUpdate = dataUpdate;
	function dataUpdate(data){
	var dataprovider = convertToChart(data);
	chart.dataProvider = dataprovider;
	chart.validateData();
}

 };
	

	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 
