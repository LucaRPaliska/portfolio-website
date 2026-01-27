import TypeIt from 'typeit';

function cursorChange(instance, vim, textContent){
  const cursor = instance.element.querySelector('.ti-cursor');
  cursor.textContent = textContent; 
  const old_cursor = cursor.classList[1];

  if(old_cursor){
    cursor.classList.remove(old_cursor);
  }
  if(vim != ""){
    cursor.classList.add(vim);
  }
}


function nameAnimation() {
  // Weird animation parameter to keep cursor from blinking like in vim (single frame with opacity 1)
  new TypeIt("#typewriter-name", { speed: 40, cursor: { animation: { frames: [ {opacity: 1 }]}} })


    .exec((instance) => { 
      cursorChange(instance, "vim-command", ""); 
      document.getElementById("typewriter-name").classList.toggle("hidden");
    })
    .pause(120)

    .exec((instance) => { cursorChange(instance, "", "|"); })
    .pause(120)

    .type("luca paliska")
    .pause(100)

    .exec((instance) => { cursorChange(instance, "vim-normal", ""); })
    .pause(280)

    .move(-6, { instant: true }) 
    .pause(150)

    .exec((instance) => { cursorChange(instance, "vim-replace", ""); })
    .pause(110)

    .delete(1, {instant: true})
    .type('P', {instant: true})
    .exec((instance) => { cursorChange(instance, "vim-normal", ""); })
    .pause(150)

    .move(-5, { instant: true }) 
    .pause(150)

    .exec((instance) => { cursorChange(instance, "vim-replace", ""); })
    .pause(110)

    .delete(1, {instant: true})
    .type('L', {instant: true})
    .exec((instance) => { cursorChange(instance, "vim-normal", ""); })
    .pause(150)

    .exec((instance) => { cursorChange(instance, "vim-command", ""); })
    .move(11, { instant: true }) 
    .type('<br> :', { instant: true })
    .type('wq')
    .pause(100)
    .delete(3, {instant: true})

    .exec((instance) => {
      const cursor = instance.element.querySelector('.ti-cursor');
      cursor.style.opacity = '0';
      cursorChange(instance, "", "");
      document.getElementById("name-solid").classList.toggle("active");
      document.getElementById("typewriter-name").classList.toggle("hidden");
      document.getElementById("introduction").classList.toggle("active");
      document.getElementById("typewriter-intro").classList.toggle("hidden");
    })

    .go();
}

function introAnimation() {

  new TypeIt("#typewriter-intro", { speed: 10, html: false, cursor: { animation: { frames: [ {opacity: 1 }]}} })

    .exec((instance) => { 
      cursorChange(instance, "vim-command", ""); 
      document.getElementById("typewriter-intro").classList.toggle("hidden");
    })
    .pause(120)

    .exec((instance) => { cursorChange(instance, "", "|"); })
    .pause(120)

    .type('<span style="font-family: Gravity-Book; font-size: 1vw;">')
    .pause(100)

    .exec((instance) => { cursorChange(instance, "vim-normal", ""); })
    .pause(170)

    .type("Hey! I'm Luca. I've loved programming since I was a kid and am currently learning about kernel development and optimizing low-level languages. I'm a big fan of hackathons (LA Hacks, Tree Hacks, Cal Hacks) and specialize in back-end development. I've daily-driven linux for a few years, and am configuring a NixOS system right now. Feel free to look at my projects and blog!", {instant: true})
    .pause(100)

    .exec((instance) => { cursorChange(instance, "", "|"); })
    .pause(120)

    .type('</span>')
    .pause(100)

    .exec((instance) => { cursorChange(instance, "vim-normal", ""); })
    .pause(170)

    .exec((instance) => {
      const cursor = instance.element.querySelector('.ti-cursor');
      cursor.style.opacity = '0';
      cursorChange(instance, "", "");
      //nameAnimation();
    })

    .go();
}

(function init(){
  introAnimation();
  nameAnimation();
})();
