/*

Officer: 6386874
CaseNum: 101-3-97236721-6386874

Case 101 - The Case of Lina Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Lina’s style. Now’s our chance to find out the root of all
of this. Lets see who is Lina meeting.

Identify Lina by drawing a blue filled rectangle with a green outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar cyan filled
rectangle with a red outline around him.

Identify the man reading the newspaper by drawing a magenta filled rectangle
with a red outline around him.

Identify the woman with the dog by drawing a red filled rectangle with a
cyan outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use only 255 or 0 for r,g,b values. Set alpha to 100 for some opacity.
	stroke() Use only 255 or 0 for r,g,b values.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Identify Lina by drawing a blue filled rectangle with a green outline.
    fill(0, 0, 255);
    stroke(0, 255, 0);
    strokeWeight(4);
    rect(340, 60, 146, 306);
    
    //Identify the man with the monocle smoking the cigar cyan filled rectangle with a red outline around him.
    fill(0, 255, 255);
    stroke(255, 0, 0);
    strokeWeight(4);
    rect(1242, 241, 191, 264);
    
    //Identify the man reading the newspaper by drawing a magenta filled rectangle with a red outline around him.
    fill(255, 0, 255);
    stroke(255, 0, 0);
    strokeWeight(4);
    rect(14, 95, 178, 356);
    
     //Identify the woman with the dog by drawing a red filled rectangle with a cyan outline around her
    fill(255, 0, 0);
    stroke(0, 255, 255);
    strokeWeight(4);
    rect(500, 65, 108, 229);




}
