function sayHello(){
    window.alert("Hello there");
    //document.write("Good morning");
    //document.getElementById("greeting").innerHTML="Good morning";
    console.log("Hi everyone");
}
function changeStyle(obj,oldStyle,newStyle){
    obj.classList.remove(oldStyle);
    obj.classList.add(newStyle);
}

function AddAline(obj){
    let para = document.createElement("p");
    let textNode = document.createTextNode("Hey Jude");
    para.appendChild(textNode);
    obj.appendChild(para);
}

function DeleteLastLine(obj){
    let elements = obj.getElementsByTagName('p');
    if(elements.length>0){
        obj.removeChild(elements.length-1);
    }
}

var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("You lose. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 2s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);