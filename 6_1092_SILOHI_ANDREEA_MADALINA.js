        var MOUSE_LEFT=0, MOUSE_RIGHT=2,DEL=46;
		var x1=0,y1=0;
		var elementSelectat=null;
		var v1,v2,v3,v4;

		var editor=document.getElementById("editor");
		var elemente=document.getElementById("elemente");
	
		var figura="dreptunghi";
		
		document.getElementById("btnDreptunghi").onclick=function()
		{ figura="dreptunghi";}
		
			document.getElementById("btnElipsa").onclick=function()
		{ figura="elipsa";}
		
			document.getElementById("btnLinie").onclick=function()
		{ figura="linie";}
		

		
		var selectieDreptunghi=document.getElementById("createRectangle");//pt dreptunghi
		var selectielinie=document.getElementById("createLine");
		var selectieelipsa=document.getElementById("createEllipse");

			
			

		function setareAtribute(obiect){
			obiect.setAttributeNS(null,'stroke',style.stroke);
			obiect.setAttributeNS(null,'colorLine',style.colorLine);
			obiect.setAttributeNS(null,'stroke-width',style.strokeWidth);
			obiect.setAttributeNS(null,'fill',style.fill);
	
			
		}
		
	
		function setareCoordonateDreptunghi(obiect,x1,y1,x2,y2)
		{
			obiect.setAttributeNS(null,'x',Math.min(x1,x2));
			obiect.setAttributeNS(null,'y',Math.min(y1,y2));
			obiect.setAttributeNS(null,'width',Math.max(x1,x2)-Math.min(x1,x2));
			obiect.setAttributeNS(null,'height',Math.max(y1,y2)-Math.min(y1,y2));
			setareAtribute(obiect);
}

function setareCoordonateElipsa(obiect,x1,y1,x2,y2)
{
obiect.setAttributeNS(null,'cx',(x1+x2)/2);
obiect.setAttributeNS(null,'cy',(y1+y2)/2);
obiect.setAttributeNS(null,'rx',Math.max(x1,x2)-Math.min(x1,x2));
obiect.setAttributeNS(null,'ry',Math.max(y1,y2)-Math.min(y1,y2));
setareAtribute(obiect);
}

		
//modificare coordonate		
var inputX1 = document.getElementById("coordX1")
var inputY1 = document.getElementById("coordY1");
var inputX2=document.getElementById("coordX2");
var inputY2=document.getElementById("coordY2");
v1=inputX1.value;
v3=inputX2.value;
v2=inputY1.value;
v4=inputY2.value;


document.getElementById("btn1").onclick=function()
{


	if(figura=="dreptunghi")
setareCoordonateDreptunghi(elementSelectat,inputX1.value,inputY1.value,inputX2.value,inputY2.value);

else if (figura=="elipsa"){
	 setareCoordonateElipsa(elementSelectat,v1,v2,v3,v4);
}
}
	
		


function setareCoordonateLinie(obiect,x1,y1,x2,y2)
{
			obiect.setAttributeNS(null,'x1',x1);
			obiect.setAttributeNS(null,'y1',y1);
			obiect.setAttributeNS(null,'x2',x2);
			obiect.setAttributeNS(null,'y2',y2);
			obiect.setAttributeNS(null,'stroke',style.stroke);
            obiect.setAttributeNS(null,'stroke-width',style.strokeWidth);
}

		
		editor.onmousedown=function (e){
			if (e.button==MOUSE_LEFT)
			{ x1=e.pageX-this.getBoundingClientRect().left;
			  y1=e.pageY-this.getBoundingClientRect().top;
			  if(figura=="dreptunghi")
			  { setareCoordonateDreptunghi(selectieDreptunghi,x1,y1,x1,y1);
			  selectieDreptunghi.style.display="block";
			  }
			  
			  if(figura=="elipsa"){
				  setareCoordonateElipsa(selectieelipsa,x1,y1,x1,y1);
				  selectieelipsa.style.display="block";

			}

			  if(figura=="linie"){
				  setareCoordonateElipsa(selectielinie,x1,y1,x1,y1);
				  selectielinie.style.display="block";
			}
		}
}

		editor.onmouseup=function (e){
		if (e.button==MOUSE_LEFT)
		{x2=e.pageX-this.getBoundingClientRect().left;
		 y2=e.pageY-this.getBoundingClientRect().top;
         selectieDreptunghi.style.display="none";
	     selectieelipsa.style.display="none";
	      selectielinie.style.display="none";
			if(figura=="dreptunghi")
			{elementnou=document.createElementNS("http://www.w3.org/2000/svg","rect");
			setareCoordonateDreptunghi(elementnou,x1,y1,x2,y2);
		     myMouseX = (e || event).clientX;
             myMouseY = (e || event).clientY;
         if (document.documentElement.scrollTop > 0) {
        myMouseY = myMouseY + document.documentElement.scrollTop;
    }
	
	
    if (xyOn) {
        alert("X is " + myMouseX + "\nY is " + myMouseY);
    }
}
			
			if(figura=="elipsa")
			{
			elementnou=document.createElementNS("http://www.w3.org/2000/svg","ellipse");
			setareCoordonateElipsa(elementnou,x1,y1,x2,y2);
				     myMouseX = (e || event).clientX;
             myMouseY = (e || event).clientY;
         if (document.documentElement.scrollTop > 0) {
        myMouseY = myMouseY + document.documentElement.scrollTop;
    }
	
	
    if (xyOn) {
        alert("X is " + myMouseX + "\nY is " + myMouseY);
    }
}
	       if(figura=="linie")
{
			elementnou=document.createElementNS("http://www.w3.org/2000/svg","line");
			setareCoordonateLinie(elementnou,x1,y1,x2,y2);
			 myMouseX = (e || event).clientX;
             myMouseY = (e || event).clientY;
         if (document.documentElement.scrollTop > 0) {
        myMouseY = myMouseY + document.documentElement.scrollTop;
    }
	
	
    if (xyOn) {
        alert("X is " + myMouseX + "\nY is " + myMouseY);
    }
}
			
			elementnou.onmousedown = function (e)
			{
				if (e.button==MOUSE_RIGHT)
				{	
				var elemente=document.querySelectorAll("#elemente *");
				elemente.forEach(el=>el.classList.remove("selectat"));
				e.target.classList.add("selectat");
				elementSelectat=e.target;
				}
			}
					elemente.appendChild(elementnou);
		}
}

		editor.onmousemove=function(e)
		{
			x2=e.pageX-this.getBoundingClientRect().left;
		    y2=e.pageY-this.getBoundingClientRect().top;
		setareCoordonateDreptunghi(selectieDreptunghi,x1,y1,x2,y2);
		setareCoordonateElipsa(selectieelipsa,x1,y1,x2,y2);
		setareCoordonateLinie(selectielinie,x1,y1,x2,y2);
		}
		
		editor.oncontextmenu=function (e){return false;}

		document.onkeydown=function(e)
		{console.log(elementSelectat,e.keyCode)
		if (elementSelectat&&e.keyCode==DEL) elementSelectat.remove();
		  else if (elementSelectat&&e.keyCode==187)
			elementSelectat.style.fill="#"+Math.floor(Math.random()*16777215).toString(16);
		}


//afisare coordonate
var myX, myY, xyOn, myMouseX, myMouseY;
xyOn = true;
function toggleXY() {
    xyOn = !xyOn;
    document.getElementById('xyLink').blur();
    return false;
}   

function showCoords(event) {
  var cX = event.clientX;
  var sX = event.screenX;
  var cY = event.clientY;
  var sY = event.screenY;
  var coords1 = "client - X: " + cX + ", Y coords: " + cY;
  var coords2 = "screen - X: " + sX + ", Y coords: " + sY;
  document.getElementById("demo").innerHTML = coords1 + "<br>" + coords2;
}
		
		
		

//LOAD
//btnSave = document.querySelector('#btnSave');
btnLoad=document.querySelector('#btnLoad');
btnClear=document.querySelector('#btnClear');
		
var form = document.createElement( 'form' );
form.style.display = 'none';
document.body.appendChild( form );

var input = document.createElement( 'input' );
input.type = 'file';
input.addEventListener( 'change', function ( event ) {
var file = input.files[ 0 ];
title.value = file.name.split( '.' )[ 0 ];
//format.value=file.name.split('.')[0];
var reader = new FileReader();
reader.addEventListener( 'load', function ( event ) {
var contents = event.target.result;
edit.setSVG( new DOMParser().parseFromString( contents, 'image/svg+xml' ) );

}, false );
reader.readAsText( file );
form.reset();
} );
form.appendChild( input );
btnLoad.addEventListener( 'click', function () {
input.click();
} );

var edit = new Editor( editor);
edit.setSource( new Source( textarea ) );
var selector = new Selector( editor );

//salvare ca svg
var link = document.createElement( 'a' );
link.style.display = 'none';
document.body.appendChild( link );
btnSave.addEventListener( 'click', function () {
var blob = new Blob( [ edit.toString() ], { type: 'text/plain' } );
link.href = URL.createObjectURL( blob );
link.download = title.value + '.svg';
link.click();
} );


	var style={
   fill:" ",
   stroke:"none",
   strokeWidth:2,
  
}
//schimbare culoare forma
document.getElementById("colorPicker").onchange=function(){
	style.fill=document.getElementById("colorPicker").value;
	
}
//selectare culoare stroke la desenare
document.getElementById("colorPickerS").onchange=function(){
	style.stroke=document.getElementById("colorPickerS").value;
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
//selectare grosime la desenare
document.getElementById("myRange").onchange=function(){
style.strokeWidth=document.getElementById("myRange").value;}


//stergere element la selectie
document.getElementById("btnClear").onclick=function(){
    elementSelectat.remove();
}


//undo
document.getElementById("click").onclick=function(){
  if (elementSelectat.style.display == "none")
      elementSelectat.style.display = "block";
  else
      elementSelectat.style.display = "none";
}


//png	
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

var data = document.getElementById("editor");
var elementWidth = data.clientWidth || data.parentNode.clientWidth;
var elementHeight = data.clientHeight || data.parentNode.clientHeight;
var DOMURL = window.URL || window.webkitURL || window;
var aLines = document.createElement("a");
var img = new Image();

img.onload = function() {
  ctx.drawImage(img, 0, 0);
  DOMURL.revokeObjectURL(url);
}
var svg = new Blob([data.outerHTML], {
  type: 'image/svg+xml'
});
var url = DOMURL.createObjectURL(svg);


img.src = url;
aLines.download = "test.png";
aLines.href = canvas.toDataURL();

document.getElementById("downloadPNG").onclick=function(){
  aLines.click();
}

//culoare pagina
const bgclr = document.getElementById("clr");
const headingg = document.querySelector(".head");
  var color;
bgclr.addEventListener("input", () => {
  document.body.style.backgroundColor = bgclr.value;
  if (
    bgclr.value.includes("00") ||
    bgclr.value.includes("0a") ||
    bgclr.value.includes("0b") ||
    bgclr.value.includes("0c") ||
    bgclr.value.includes("0d") ||
    bgclr.value.includes("0e") ||
    bgclr.value.includes("0f")
  ) {
    headingg.color = "#fff";
  } else {
    //headingg.color = "#000";
}
});



