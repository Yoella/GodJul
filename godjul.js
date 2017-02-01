var $Joella = {};

$Joella.MoveSnow = function(antalbilder)
{
  var bilder = new Array();
  for(var i=0; i<antalbilder; i++)
  {
    bilder[i]=new $Joella.Snow();

  }

  this.next = function ()
  {
    for(var i =0; i<bilder.length;i++)
    {
      bilder[i].moveme();
    }
  }
  setInterval(this.next,20);

}

$Joella.Snow = function()
{
  this.snow = document.createElement("div");
  this.snow.style.background = "white";
  this.snow.style.width = parseInt(Math.random()*10+1) +"px";
  this.snow.style.height = parseInt(Math.random()*10+1) +"px";
  this.snow.style.opacity = Math.random();
  this.snow.style.borderRadius = "50%";
  this.snow.style.position = "absolute";
  //xpos = left
  this.xpos = parseInt(Math.random()*1900);
  this.snow.style.left = this.xpos + "px";
  //ypos = top
  this.ypos = parseInt(Math.random()*700);
  this.snow.style.top = this.ypos + "px";
  this.hastighet = parseInt(Math.random()*5+1);
  document.body.appendChild(this.snow);

  this.moveme = function()
  {
    if(this.ypos < 880)
    {

      this.ypos = this.ypos + this.hastighet;
      this.snow.style.top = this.ypos + "px";
    }
    else if(this.ypos == 880)
    {
      this.ypos = 0;
      this.snow.style.top = this.ypos + "px";
    }
    else
    {
      this.ypos = 880;
      this.snow.style.top = this.ypos + "px";
    }
  }

}
var temp;
function start()
{
  temp = new $Joella.MoveSnow(70);
}
