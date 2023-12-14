var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_AreaAdministrasi_1 = new ol.format.GeoJSON();
var features_AreaAdministrasi_1 = format_AreaAdministrasi_1.readFeatures(json_AreaAdministrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaAdministrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaAdministrasi_1.addFeatures(features_AreaAdministrasi_1);
var lyr_AreaAdministrasi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaAdministrasi_1, 
                style: style_AreaAdministrasi_1,
                interactive: true,
    title: 'Area Administrasi<br />\
    <img src="styles/legend/AreaAdministrasi_1_0.png" /> GUBENG<br />\
    <img src="styles/legend/AreaAdministrasi_1_1.png" /> MULYOREJO<br />\
    <img src="styles/legend/AreaAdministrasi_1_2.png" /> TAMBAKSARI<br />'
        });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                interactive: true,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_Sungai_3 = new ol.format.GeoJSON();
var features_Sungai_3 = format_Sungai_3.readFeatures(json_Sungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_3.addFeatures(features_Sungai_3);
var lyr_Sungai_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_3, 
                style: style_Sungai_3,
                interactive: true,
                title: '<img src="styles/legend/Sungai_3.png" /> Sungai'
            });
var format_TitikSurvey_4 = new ol.format.GeoJSON();
var features_TitikSurvey_4 = format_TitikSurvey_4.readFeatures(json_TitikSurvey_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikSurvey_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikSurvey_4.addFeatures(features_TitikSurvey_4);
var lyr_TitikSurvey_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikSurvey_4, 
                style: style_TitikSurvey_4,
                interactive: true,
                title: '<img src="styles/legend/TitikSurvey_4.png" /> Titik Survey'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_AreaAdministrasi_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_Sungai_3.setVisible(true);lyr_TitikSurvey_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_AreaAdministrasi_1,lyr_Jalan_2,lyr_Sungai_3,lyr_TitikSurvey_4];
lyr_AreaAdministrasi_1.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_Jalan_2.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_Sungai_3.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_TitikSurvey_4.set('fieldAliases', {'id': 'id', });
lyr_AreaAdministrasi_1.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'REMARK': '', });
lyr_Sungai_3.set('fieldImages', {'REMARK': '', });
lyr_TitikSurvey_4.set('fieldImages', {'id': '', });
lyr_AreaAdministrasi_1.set('fieldLabels', {'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_Jalan_2.set('fieldLabels', {'REMARK': 'no label', });
lyr_Sungai_3.set('fieldLabels', {'REMARK': 'no label', });
lyr_TitikSurvey_4.set('fieldLabels', {'id': 'no label', });
lyr_TitikSurvey_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});