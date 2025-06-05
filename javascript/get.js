//data=document.getElementById("a").innerText
data=document.getElementById("a").innerHTML;
data=document.getElementById("a").innerText
data=document.getElementById("a").getAttribute("style"); // to get css
data=document.getElementById("a").getAttributeNode("style"); //to get css with sentex
data=document.getElementById("a").attributes[0];

console.log(data);
