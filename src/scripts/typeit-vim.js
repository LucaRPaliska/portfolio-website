import TypeIt from 'typeit';

async function ascii_profile_load(){
  const response = await fetch('/images/ascii-pfp.txt');
  const ascii_pfp = await response.text();
  document.getElementById('ascii-pfp').textContent = ascii_pfp;
}

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

    .exec((instance) => {
      const cursor = instance.element.querySelector('.ti-cursor');
      cursor.style.opacity = '0';
      cursorChange(instance, "", "");
    })

    .go();
}

function pfpAnimation() {
  // Weird animation parameter to keep cursor from blinking like in vim (single frame with opacity 1)
  new TypeIt("#typewriter-pfp", { speed: 10, cursor: { animation: { frames: [ {opacity: 1 }]}} })

    .exec((instance) => { 
      cursorChange(instance, "vim-command", ""); 
      document.getElementById("test").classList.toggle("hidden");
      document.getElementById("test").classList.toggle("invisible");
      document.getElementById("typewriter-pfp").classList.toggle("hidden");
    })
    .pause(120)

    .exec((instance) => { cursorChange(instance, "", "|"); })
    .pause(120)

    // Weird bug with an invisible character so this solution works
    .type('\u200B<\u200Bimg src="/public/images/pfp.png"\u200B>\u200B\u200B<\u200B/img\u200B>\u200B')
    .pause(100)

    .exec((instance) => { cursorChange(instance, "vim-normal", ""); })
    .pause(170)

    .exec((instance) => { 
      const cursor = instance.element.querySelector('.ti-cursor');
      cursor.style.opacity = '0';
      cursorChange(instance, "", "");
      document.getElementById("ascii-pfp").classList.toggle("hidden");
      document.getElementById("typewriter-pfp").classList.toggle("hidden");
    })
  
    /*.pause(200)

    .exec((instance) => {
      document.getElementById("pfp").classList.toggle("hidden");
      document.getElementById("ascii-pfp").classList.toggle("hidden");
    })*/

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

function socialsAnimation() {

  new TypeIt("#typewriter-socials", { speed: 10, html: false, cursor: { animation: { frames: [ {opacity: 1 }]}} })

    .exec((instance) => { 
      cursorChange(instance, "vim-command", ""); 
      document.getElementById("typewriter-socials").classList.toggle("hidden");
    })
    .pause(120)

    .exec((instance) => { cursorChange(instance, "", "|"); })
    .pause(120)

    .type('<div class="social-button"></div>')
    .pause(100)

    .exec((instance) => { cursorChange(instance, "vim-normal", ""); })
    .pause(170)

    .exec((instance) => { cursorChange(instance, "vim-replace", ""); })
    .pause(50)

    .exec((instance) => { cursorChange(instance, "vim-normal", ""); })
    .pause(50)

    .type('\n<div class="social-button"></div>', { instant: true })
    .move(-32, {instant: true})
    .pause(80)

    .move(32, {instant: true})
    .type('\n<div class="social-button"></div>', { instant: true })
    .move(-32, {instant: true})
    .pause(80)

    .move(32, {instant: true})
    .type('\n<div class="social-button"></div>', { instant: true })
    .move(-32, {instant: true})
    .pause(80)

    .move(32, {instant: true})
    .type('\n<div class="social-button"></div>', { instant: true })
    .move(-32, {instant: true})
    .pause(80)

    .move(32, {instant: true})
    .type('\n<div class="social-button"></div>', { instant: true })
    .move(-32, {instant: true})
    .pause(80)

    .exec((instance) => { cursorChange(instance, "vim-normal", ""); })
    .pause(170)

    .exec((instance) => {
      const cursor = instance.element.querySelector('.ti-cursor');
      cursor.style.opacity = '0';
      cursorChange(instance, "", "");
    })

    .go();
}

function wqAnimation() {
  new TypeIt("#typewriter-wq", { speed: 40, cursor: { animation: { frames: [ {opacity: 1 }]}} })

    .pause(2500)
    .exec((instance) => { 
      cursorChange(instance, "vim-command", ""); 
      document.getElementById("typewriter-wq").classList.toggle("hidden");
    })

    .type(':', { instant: true })
    .type('wq')
    .pause(120)
    .delete(3, {instant: true})

    .exec((instance) => {
      const cursor = instance.element.querySelector('.ti-cursor');
      cursor.style.opacity = '0';
      cursorChange(instance, "", "");
      document.getElementById("typewriter-name").classList.toggle("hidden");
      document.getElementById("typewriter-intro").classList.toggle("hidden");
      document.getElementById("ascii-pfp").classList.toggle("hidden");
      document.getElementById("typewriter-socials").classList.toggle("hidden");
      document.getElementById("typewriter-wq").classList.toggle("hidden");

      document.getElementById("name-solid").classList.toggle("hidden-mask");
      document.getElementById("test").classList.toggle("hidden");
      document.getElementById("test").style.transform = 'rotateX(0deg) rotateY(0deg)'; // TODO: Working on having a tilt "flick" from loading
      document.getElementById("introduction").classList.toggle("hidden-mask");
      document.getElementById("socials").classList.toggle("hidden-mask");
    })

    .go();
}

(function init(){
  introAnimation();
  nameAnimation();
  pfpAnimation();
  socialsAnimation();
  ascii_profile_load();
  wqAnimation();
})();
