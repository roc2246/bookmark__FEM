let navMode = "desktop";

const links = document.getElementsByClassName("nav")[0];
const logo = (mode) =>
  document.getElementsByClassName(`bookmark-logo-${mode}`)[0];
const hero = document.getElementsByClassName("hero")[0];
const btn = document.getElementsByClassName("nav__btn")[0];

const toggle = {
  block: (block) => document.getElementsByClassName(`${block}__toggle`)[0],
  icon: (block, img) => document.getElementsByClassName(`${block}__${img}`)[0],
  logic: function () {
    if (!links.classList.contains("nav--mobile")) {
      navMode = "mobile";
      this.icon("nav", "open").style.display = "none";
      this.icon("nav", "close").style.display = "inline";
      logo("regular").style.display = "none";
      logo("white").style.display = "inline";
      hero.style.marginTop = "max(150px, 7vh)";
      btn.classList.add("btn--transparent");
      btn.classList.remove("btn--red");
      links.classList.add("nav--mobile");
      links.classList.remove("nav--top");
    } else {
      navMode = "desktop";
      this.icon("nav", "open").style.display = "inline";
      this.icon("nav", "close").style.display = "none";
      logo("regular").style.display = "inline";
      logo("white").style.display = "none";
      hero.style.marginTop = "max(4.72222rem, 3.5vh)";
      btn.classList.add("btn--red");
      btn.classList.remove("btn--transparent");
      links.classList.add("nav--top");
      links.classList.remove("nav--mobile");
    }
  },
};

toggle.block("nav").onclick = () => toggle.logic();

window.onresize = (event) => {
  if (event.target.innerWidth >= 675 && navMode === "mobile") {
    toggle.icon("nav", "open").style.display = "inline";
    toggle.icon("nav", "close").style.display = "none";
    logo("regular").style.display = "inline";
    logo("white").style.display = "none";
    hero.style.marginTop = "max(4.72222rem, 3.5vh)";
    btn.classList.add("btn--red");
    btn.classList.remove("btn--transparent");
    links.classList.add("nav--top");
    links.classList.add("nav--top");
    links.classList.remove("nav--mobile");
  } else if (event.target.innerWidth < 675 && navMode === "mobile") {
    toggle.icon("nav", "open").style.display = "none";
    toggle.icon("nav", "close").style.display = "inline";
    logo("regular").style.display = "none";
    logo("white").style.display = "inline";
    hero.style.marginTop = "max(150px, 7vh)";
    btn.classList.add("btn--transparent");
    btn.classList.remove("btn--red");
    links.classList.add("nav--mobile");
    links.classList.remove("nav--top");
  }
};

screen.orientation.addEventListener("change", (event) => {
  if (event.target.innerWidth >= 675 && navMode === "mobile") {
    toggle.icon("nav", "open").style.display = "inline";
    toggle.icon("nav", "close").style.display = "none";
    logo("regular").style.display = "inline";
    logo("white").style.display = "none";
    hero.style.marginTop = "max(4.72222rem, 3.5vh)";
    btn.classList.add("btn--transparent");
    btn.classList.remove("btn--red");
    links.classList.add("nav--top");
    links.classList.remove("nav--mobile");
  } else if (event.target.innerWidth < 675 && navMode === "mobile") {
    toggle.icon("nav", "open").style.display = "none";
    toggle.icon("nav", "close").style.display = "inline";
    logo("regular").style.display = "none";
    logo("white").style.display = "inline";
    hero.style.marginTop = "max(150px, 7vh)";
    btn.classList.add("btn--red");
    btn.classList.remove("btn--transparent");
    links.classList.add("nav--mobile");
    links.classList.remove("nav--top");
  }
});


const toggle2 = {
  block: (block) => document.getElementsByClassName(`${block}__toggle`)[0],
  icon: (block, img) => document.getElementsByClassName(`${block}__${img}`)[0],
  paragraph: (block, no) => document.getElementsByClassName(`${block}__answer`)[no],
  logic: function (no) {
    if (this.paragraph("question", no).style.display === "" || 
    this.paragraph("question", no).style.display === "none") {
      this.paragraph("question", no).style.display = "block"
    } else {
      this.paragraph("question", no).style.display = "none"
    }
  },
}


 const questions = document.getElementsByClassName("question")
Object.keys(questions).forEach((question)=>{
  questions[question].onclick = () =>{
    toggle2.logic(question)
  }
})


