ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:23033").setExtent([-735323.136988, 3982652.937685, 1195722.419065, 5335817.589495]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Regiones_1 = new ol.format.GeoJSON();
var features_Regiones_1 = format_Regiones_1.readFeatures(json_Regiones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23033'});
var jsonSource_Regiones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regiones_1.addFeatures(features_Regiones_1);
var lyr_Regiones_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Regiones_1, 
                style: style_Regiones_1,
                interactive: true,
                title: '<img src="styles/legend/Regiones_1.png" /> Regiones'
            });
var format_LagosLagunas_2 = new ol.format.GeoJSON();
var features_LagosLagunas_2 = format_LagosLagunas_2.readFeatures(json_LagosLagunas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23033'});
var jsonSource_LagosLagunas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LagosLagunas_2.addFeatures(features_LagosLagunas_2);
var lyr_LagosLagunas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LagosLagunas_2, 
                style: style_LagosLagunas_2,
                interactive: true,
                title: '<img src="styles/legend/LagosLagunas_2.png" /> Lagos/Lagunas'
            });
var format_Trenes_3 = new ol.format.GeoJSON();
var features_Trenes_3 = format_Trenes_3.readFeatures(json_Trenes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23033'});
var jsonSource_Trenes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trenes_3.addFeatures(features_Trenes_3);
var lyr_Trenes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trenes_3, 
                style: style_Trenes_3,
                interactive: true,
                title: '<img src="styles/legend/Trenes_3.png" /> Trenes'
            });
var format_Rutas_4 = new ol.format.GeoJSON();
var features_Rutas_4 = format_Rutas_4.readFeatures(json_Rutas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23033'});
var jsonSource_Rutas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutas_4.addFeatures(features_Rutas_4);
var lyr_Rutas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rutas_4, 
                style: style_Rutas_4,
                interactive: true,
                title: '<img src="styles/legend/Rutas_4.png" /> Rutas'
            });
var format_Rios_5 = new ol.format.GeoJSON();
var features_Rios_5 = format_Rios_5.readFeatures(json_Rios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23033'});
var jsonSource_Rios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_5.addFeatures(features_Rios_5);
var lyr_Rios_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rios_5, 
                style: style_Rios_5,
                interactive: true,
                title: '<img src="styles/legend/Rios_5.png" /> Rios'
            });
var format_aeroporti_6 = new ol.format.GeoJSON();
var features_aeroporti_6 = format_aeroporti_6.readFeatures(json_aeroporti_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23033'});
var jsonSource_aeroporti_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aeroporti_6.addFeatures(features_aeroporti_6);cluster_aeroporti_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_aeroporti_6
});
var lyr_aeroporti_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_aeroporti_6, 
                style: style_aeroporti_6,
                interactive: true,
                title: '<img src="styles/legend/aeroporti_6.png" /> aeroporti'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Regiones_1.setVisible(true);lyr_LagosLagunas_2.setVisible(true);lyr_Trenes_3.setVisible(true);lyr_Rutas_4.setVisible(true);lyr_Rios_5.setVisible(true);lyr_aeroporti_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Regiones_1,lyr_LagosLagunas_2,lyr_Trenes_3,lyr_Rutas_4,lyr_Rios_5,lyr_aeroporti_6];
lyr_Regiones_1.set('fieldAliases', {'Region': 'Region', 'Densidad': 'Densidad', 'Población': 'Población', 'Pop_km': 'Pop_km', });
lyr_LagosLagunas_2.set('fieldAliases', {'Superficie': 'Superficie', 'Nombre': 'Nombre', });
lyr_Trenes_3.set('fieldAliases', {'Cod': 'Cod', 'Exstension': 'Exstension', 'FFCC': 'FFCC', });
lyr_Rutas_4.set('fieldAliases', {'Nombre': 'Nombre', 'Cod Comuna': 'Cod Comuna', 'largo': 'largo', });
lyr_Rios_5.set('fieldAliases', {'Cod': 'Cod', 'HYC': 'HYC', 'Nombre': 'Nombre', });
lyr_aeroporti_6.set('fieldAliases', {'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Sigla Aero': 'Sigla Aero', 'Denominazi': 'Denominazi', });
lyr_Regiones_1.set('fieldImages', {'Region': '', 'Densidad': '', 'Población': '', 'Pop_km': '', });
lyr_LagosLagunas_2.set('fieldImages', {'Superficie': '', 'Nombre': '', });
lyr_Trenes_3.set('fieldImages', {'Cod': '', 'Exstension': '', 'FFCC': '', });
lyr_Rutas_4.set('fieldImages', {'Nombre': '', 'Cod Comuna': '', 'largo': '', });
lyr_Rios_5.set('fieldImages', {'Cod': '', 'HYC': '', 'Nombre': 'TextEdit', });
lyr_aeroporti_6.set('fieldImages', {'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Sigla Aero': 'TextEdit', 'Denominazi': 'TextEdit', });
lyr_Regiones_1.set('fieldLabels', {'Region': 'header label', 'Densidad': 'header label', 'Población': 'header label', 'Pop_km': 'header label', });
lyr_LagosLagunas_2.set('fieldLabels', {'Superficie': 'header label', 'Nombre': 'header label', });
lyr_Trenes_3.set('fieldLabels', {'Cod': 'header label', 'Exstension': 'inline label', 'FFCC': 'header label', });
lyr_Rutas_4.set('fieldLabels', {'Nombre': 'header label', 'Cod Comuna': 'header label', 'largo': 'header label', });
lyr_Rios_5.set('fieldLabels', {'Cod': 'header label', 'HYC': 'header label', 'Nombre': 'header label', });
lyr_aeroporti_6.set('fieldLabels', {'Comune': 'header label', 'Provincia': 'header label', 'Regione': 'header label', 'Sigla Aero': 'header label', 'Denominazi': 'header label', });
lyr_aeroporti_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});