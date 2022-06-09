loadjs([window.location.origin+'/assets/js/modules/fabric.min.js'], 'batch5');

loadjs.ready('batch5', function () {

	 loadjs(window.location.origin+'/assets/js/configurator.js', 'load_three');
});

loadjs.ready('load_three', function () {
	loadjs(window.location.origin+'/assets/js/modules/three.min.js', 'load_3d');
});

loadjs.ready('load_3d', function () {
	loadjs([window.location.origin+'/assets/js/modules/Detector.js',
	window.location.origin+'/assets/js/modules/OBJLoader.js',
	window.location.origin+'/assets/js/modules/OrbitControls.js'], 'start_3d');
});

loadjs.ready('start_3d', function () {
	loadjs(window.location.origin+'/assets/js/preview.js', 'final');
});

loadjs.ready('final', function () {
	init();
});
  
  
  
  
  
  