auto();
launchApp("趣头条");
width=device.width;
height=device.height;
sleep(5000);
click(width/2,height-20);
var i = 0;
setInterval(function(){
    i++
    fromx=random(width/4,width*3/4);
    fromy=random(height-124-200,height-125);
    
    tox=random(width/4,width*3/4);
    toy=random(125,124+200);
    swipe(fromx,fromy,tox,toy,1000);
}, 15000);
