var shapeContainer=document.getElementById("shape-container");//getting the shape container
var changeColor=document.getElementById("change-color");//getting the change color button
var randomColor=null;//random color variable

function setRandomColor(){//this function will set a random color around the shape

	var x=Math.floor(Math.random()*256);//getting random rgb values represented by x, y and z in the range 0 to 256
	var y=Math.floor(Math.random()*256);
	var z=Math.floor(Math.random()*256);	

	randomColor="rgb("+x+", "+y+", "+z+")";//generating a random color using the above random rgb values and storing it in the random color variable

	if(count>=1 && prev.classList.contains("bg-color")){//to make sure that the background color of the shape guide too merges with the background of the shape container which we are going to set below
		prev.style.backgroundColor=randomColor;
	}	

	shapeContainer.style.backgroundColor=randomColor;//setting the background color of the shape container to the above random color 

}

changeColor.addEventListener("click", setRandomColor);//this event listener is added to handle the event of a random color being set around the shape when the change color button is pressed

var shapes=document.getElementsByClassName("shape");//getting the shapes array which contains the 11 shapes
var changeShape=document.getElementById("change-shape");//getting the change shape button

var count=0;//this count and prev variable are maintained for the purpose of making the previous shape disappear when the new shape is set
var prev=null;

var content=document.getElementById("content");//getting the content

function setRandomShape(){//this function will generate a random shape inside the shape container from the 11 shapes we have provided

	var index=Math.random();//getting a random number from 0 to 1
	index*=1000;//getting a random number from 0 to 1000
	index=Math.floor(index);//getting the integeral value corresponding to that number in the range 0 to 1000
	index%=11;//getting the index of the shape from 0 to 10

	if(count==0){//removing the message the content was displaying when a shape was set inside the shape container for the first time
		content.innerText="";
	}
	else{//making the previous shape disappear as the new shape has to be set
		prev.style.opacity="0";
	}

	if(shapes[index].classList.contains("bg-color")){//if the shape guide for the new random shape has some background then we merge it with the existing background color
		shapes[index].style.backgroundColor=randomColor;
	}

	shapes[index].style.opacity="1";//setting the opacity of the new random shape to 1
	prev=shapes[index];//making it the previous shape
	count++;//increasing the count
}

changeShape.addEventListener("click", setRandomShape);//this event handler is to handle the event of a random shape being set inside the shape container