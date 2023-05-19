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
  icon: (block, img) => document.getElementsByClassName(`${block}__${img}`),
  paragraph: (block, no) =>
    document.getElementsByClassName(`${block}__answer`)[no],
  logic: function (no) {
    if (
      this.paragraph("question", no).style.display === "" ||
      this.paragraph("question", no).style.display === "none"
    ) {
      this.paragraph("question", no).style.display = "block";
      this.icon("question", "open")[no].style.display = "none";
      this.icon("question", "close")[no].style.display = "inline";
    } else {
      this.paragraph("question", no).style.display = "none";
      this.icon("question", "open")[no].style.display = "inline";
      this.icon("question", "close")[no].style.display = "none";
    }
  },
};

const questions = document.getElementsByClassName("question");
Object.keys(questions).forEach((question) => {
  questions[question].onclick = () => {
    toggle2.logic(question);
  };
});

const input = document.getElementsByClassName("CTA__input")[0];
const mssg = document.getElementsByClassName("CTA__error")[0];
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
document.getElementsByClassName("CTA__btn")[0].onclick = (e) => {
  e.preventDefault();
  if (regex.test(input.value)) {
    if (input.classList.contains("CTA__input--error")) {
      input.classList.remove("CTA__input--error");
      mssg.style.display = "none";
    }
    alert("Your email has been submitted");
    input.value = "";
  } else {
    input.classList.add("CTA__input--error");
    mssg.style.display = "block";
  }
};

const tabImg = document.getElementsByClassName("illustration__img")[1]
console.log(tabImg)
let tabImgs = (no) => `./images/illustration-features-tab-${no}.svg`;

const tabImgNames = [
  "bookmark illustration",
  "search illustration",
  "sharing illustration"
]

const tabHeadings = [
  "Bookmark in one click",
  "Intelligent search",
  "Share your bookmarks",
];

const tabParagraphs = [
  `Organize your bookmarks however 
  you like. Our simple drag-and-drop 
  interface gives you complete control
   over how you manage your favourite 
   sites.`,
  ` Our powerful search feature will help you find
  saved sites in no time at all. No need to trawl through all of your
  bookmarks.`,
  `Easily share your bookmarks and
  collections with others. Create a shareable link that you can send at the
  click of a button.`,
];

const heading = document.getElementsByClassName("selection__heading")[0];
const paragraph = document.getElementsByClassName("selection__paragraph")[0];

const tab = document.getElementsByClassName("tab");

for (let selection in tab) {
  tab[selection].onclick = () => {
    for (let x = 0; x<tab.length; x++) {
      if (tab[x].classList.contains("tab--selected")) {
        tab[x].classList.remove("tab--selected");
      }
    }
    tab[selection].classList.add("tab--selected")
    tabImg.src = tabImgs(parseInt(selection) + 1);
    tabImg.alt = tabImgNames[selection];
    heading.innerHTML = tabHeadings[selection];
    paragraph.innerHTML = tabParagraphs[selection];
  };
}
