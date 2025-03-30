//Nav
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function addStarEffectToNavLinks() {
    const navLinks = document.querySelectorAll('.topnav a:not(.icon)');
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', function(event) {
        const linkRect = this.getBoundingClientRect();
        const linkLeft = linkRect.left;
        const linkRight = linkRect.right;
        const linkTop = linkRect.top;
        const linkBottom = linkRect.bottom;
        const numStars = 15;
        for (let i = 0; i < numStars; i++) {
          createStar(linkLeft, linkRight, linkTop, linkBottom);
        }
      });
    });
    function createStar(left, right, top, bottom) {
      const star = document.createElement('div');
      star.className = 'star';
      document.body.appendChild(star);
      const size = Math.random() * 2 + 1;
      const speed = Math.random() * 4 + 2;
      const angle = Math.random() * Math.PI * 2;
      const startX = Math.random() * (right - left) + left;
      const startY = Math.random() * (bottom - top) + top;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${startX - size / 2}px`;
      star.style.top = `${startY - size / 2}px`;
      star.style.backgroundColor = 'white';
      star.style.position = 'absolute';
      star.style.opacity = 1;
      star.style.pointerEvents = 'none';
      const velocityX = Math.cos(angle) * speed;
      const velocityY = Math.sin(angle) * speed;
      let life = 150;
      function animateStar() {
        star.style.left = `${parseFloat(star.style.left) + velocityX}px`;
        star.style.top = `${parseFloat(star.style.top) + velocityY}px`;
        star.style.opacity -= 0.01;
        life -= 1;
        if (life > 0 && star.style.opacity > 0) {
          requestAnimationFrame(animateStar);
        } else {
          star.remove();
        }
      }
      animateStar();
    }
}
addStarEffectToNavLinks();
//Nav End

//Footer
let d = new Date(); let thisYear = d.getFullYear();
document.getElementById("this-year").innerHTML = thisYear;
document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 
 //Footer End