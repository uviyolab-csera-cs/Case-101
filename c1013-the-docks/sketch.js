/*

Officer: 6386874
CaseNum: 101-2-19023448-6386874

Case 101 - The Case of Lina Lovelace
Stage 3 - The Docks

You’ve followed Lina down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Lina by drawing a cyan filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a yellow filled
rectangle around him.

Identify the man in the striped top by drawing a cyan filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use only 255 or 0 for r,g,b values. Set alpha to 100 for some opacity.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noStroke();
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    //Lina
    fill(0, 255, 255);
    rect(1362, 235, 208, 436);
    
    //heavy-set man
    fill(255, 255, 0);
    rect(1843, 223, 169, 185);
    
    //man in the striped top
    fill(0, 255, 255);
    rect(347, 368, 184, 499);


}
