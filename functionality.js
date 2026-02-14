//let - mausab nimo ang iyang value 
//const - dili mausab ang value
const aboutMe = document.getElementById("aboutMe");
const projects = document.getElementById("projects");
const contacts = document.getElementById("contacts");
const aboutTheDev = document.getElementById("aboutTheDev");
const output = document.getElementById("output");

aboutMe.onclick = function(){
    output.textContent = "About Me";
}
projects.onclick = function(){
    output.textContent = "Projects";
}
contacts.onclick = function(){
    output.textContent = "Contacts";
}
aboutTheDev.onclick = function(){
    output.textContent = "Jhon Paul";
}