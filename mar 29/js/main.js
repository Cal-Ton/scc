//Nav
function toggle() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += "responsive";
    } else {
        x.className = "nav";
    }
}
//Nav End

//Footer
let d = new Date(); let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
document.getElementById("hcheck").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
document.getElementById("ccheck").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 
 //Footer End