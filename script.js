let navMode = "desktop";

const navToggle = {
  hero: document.getElementsByClassName("hero")[0],
  btn: document.getElementsByClassName("nav__btn")[0],
  links: document.getElementsByClassName("nav")[0],
  logo: (mode) =>
  document.getElementsByClassName(`bookmark-logo-${mode}`)[0],
  block: (block, ele) => document.getElementsByClassName(`${block}__${ele}`)[0],
  switchIcon: function (block, hide, show) {
    if (block !== null) {
      this.block(block, hide).style.display = "none";
      this.block(block, show).style.display = "inline";
    } else {
      this.logo(hide).style.display = "none";
      this.logo(show).style.display = "inline";
    }
  },
  switchClass: function (container, ele, newMod, prevMod) {
    container.classList.add(`${ele}--${newMod}`);
    container.classList.remove(`${ele}--${prevMod}`);
  },
  open: function () {
    this.switchIcon("nav", "open", "close");
    this.switchIcon(null, "regular", "white");
    this.switchClass(this.btn, "btn", "transparent", "red");
    this.switchClass(this.links, "nav", "mobile", "top");
  },
  close: function () {
    this.switchIcon("nav", "close", "open");
    this.switchIcon(null, "white", "regular");
    this.switchClass(this.btn, "btn", "red", "transparent");
    this.switchClass(this.links, "nav", "top", "mobile");
  },
  logic: function () {
    if (!this.links.classList.contains("nav--mobile")) {
      navMode = "mobile";
      this.hero.style.marginTop = "max(150px, 7vh)";
      this.open();
    } else {
      navMode = "desktop";
      this.hero.style.marginTop = "max(4.72222rem, 3.5vh)";
      this.close();
    }
  },
  keepMobileNav: function (object, action) {
    object.addEventListener(action, (event) => {
      if (event.target.outerWidth >= 675 && navMode === "mobile") {
        this.hero.style.marginTop = "max(4.72222rem, 3.5vh)";
        this.close();
      } else if (event.target.outerWidth < 675 && navMode === "mobile") {
        this.hero.style.marginTop = "max(150px, 7vh)";
        this.open();
      }
    });
  },
};

navToggle.block("nav", "toggle").onclick = () => navToggle.logic();
navToggle.keepMobileNav(window, "resize");
navToggle.keepMobileNav(screen.orientation, "change");


const qnToggle = {
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
    qnToggle.logic(question);
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

const tabImg = document.getElementsByClassName("illustration__img")[1];
let tabImgs = (no) => `./images/illustration-features-tab-${no}.svg`;

const tabImgNames = ["bookmark", "search", "sharing"];

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
  saved sites in no time at all. No need to trawl 
  through all of your
  bookmarks.`,
  `Easily share your bookmarks and
  collections with others. Create a shareable link 
  that you can send at the
  click of a button.`,
];

const heading = document.getElementsByClassName("selection__heading")[0];
const paragraph = document.getElementsByClassName("selection__paragraph")[0];

const tab = document.getElementsByClassName("tab");

for (let selection in tab) {
  tab[selection].onclick = () => {
    for (let x = 0; x < tab.length; x++) {
      if (tab[x].classList.contains("tab--selected")) {
        tab[x].classList.remove("tab--selected");
      }
    }
    for (let y = 0; y < tabImgNames.length; y++)
      if (tabImg.classList.contains(`illustration__img--${tabImgNames[y]}`)) {
        tabImg.classList.remove(`illustration__img--${tabImgNames[y]}`);
      }
    tab[selection].classList.add("tab--selected");
    tabImg.src = tabImgs(parseInt(selection) + 1);
    tabImg.alt = `${tabImgNames[selection]} illustration`;
    tabImg.classList.add(`illustration__img--${tabImgNames[selection]}`);
    heading.innerHTML = tabHeadings[selection];
    paragraph.innerHTML = tabParagraphs[selection];
  };
}
