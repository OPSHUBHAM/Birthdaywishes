var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL('BirthdayImage.jpg',function(Img){
    image=Img;
    image.scaleToWidth(700);
    image.scaleToHeight(510);
    image.set({
        top:0,
        left:0
    });
    canvas.add(image);
});
	
}

function playSound(){
	x.play();
}
