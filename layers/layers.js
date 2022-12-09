ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([106.420797, 11.708949, 110.451609, 13.740558]);
var wms_layers = [];

var format_gadm36_VNM_2_0 = new ol.format.GeoJSON();
var features_gadm36_VNM_2_0 = format_gadm36_VNM_2_0.readFeatures(json_gadm36_VNM_2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_gadm36_VNM_2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm36_VNM_2_0.addFeatures(features_gadm36_VNM_2_0);
var lyr_gadm36_VNM_2_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm36_VNM_2_0, 
                style: style_gadm36_VNM_2_0,
                interactive: true,
                title: '<img src="styles/legend/gadm36_VNM_2_0.png" /> gadm36_VNM_2'
            });
var format_hanhChinh_1 = new ol.format.GeoJSON();
var features_hanhChinh_1 = format_hanhChinh_1.readFeatures(json_hanhChinh_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_hanhChinh_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hanhChinh_1.addFeatures(features_hanhChinh_1);
var lyr_hanhChinh_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hanhChinh_1, 
                style: style_hanhChinh_1,
                interactive: true,
                title: '<img src="styles/legend/hanhChinh_1.png" /> hanhChinh'
            });

lyr_gadm36_VNM_2_0.setVisible(true);lyr_hanhChinh_1.setVisible(true);
var layersList = [lyr_gadm36_VNM_2_0,lyr_hanhChinh_1];
lyr_gadm36_VNM_2_0.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_hanhChinh_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'population', 'name': 'name', });
lyr_gadm36_VNM_2_0.set('fieldImages', {'GID_0': '', 'NAME_0': '', 'GID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'GID_2': '', 'NAME_2': '', 'VARNAME_2': '', 'NL_NAME_2': '', 'TYPE_2': '', 'ENGTYPE_2': '', 'CC_2': '', 'HASC_2': '', });
lyr_hanhChinh_1.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'population': '', 'name': '', });
lyr_gadm36_VNM_2_0.set('fieldLabels', {'GID_0': 'inline label', 'NAME_0': 'inline label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'inline label', 'GID_2': 'no label', 'NAME_2': 'inline label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_hanhChinh_1.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'population': 'no label', 'name': 'inline label', });
lyr_hanhChinh_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});