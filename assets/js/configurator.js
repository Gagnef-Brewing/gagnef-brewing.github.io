var canvas = new fabric.Canvas('canvas');
var originalWidth = 2363;
var originalHeight = 1784;
canvas.setHeight(originalHeight);
canvas.setWidth(originalWidth);

canvas.objectCaching = false;

var imgSrc = window.location.origin + document.getElementById("can-label").value;
var bg = new Image();
bg.onload = function () {
	var scale = canvas.height / canvas.getZoom() / bg.naturalHeight;
	if (bg.naturalWidth * scale < canvas.width / canvas.getZoom()) scale = canvas.width / canvas.getZoom() / bg.naturalWidth;
	canvas.setBackgroundImage(bg.src, function () {
		canvas.renderAll.bind(canvas);
		var json = canvas.toJSON();
		var scale = canvas.height / canvas.getZoom() / json.backgroundImage.height;
		if (json.backgroundImage.width * scale < canvas.width / canvas.getZoom()) scale = canvas.width / canvas.getZoom() / json.backgroundImage.width;
		canvas.setBackgroundImage(json.backgroundImage.src, canvas.renderAll.bind(canvas), {
			originX: 'center',
			originY: 'center',
			scaleX: scale,
			scaleY: scale,
			left: canvas.width / canvas.getZoom() / 2,
			top: canvas.height / canvas.getZoom() / 2
		});
	});
};
bg.src = imgSrc;
