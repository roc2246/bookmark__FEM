let navMode = "desktop";
const navToggle = {
  hero: document.getElementsByClassName("hero")[0],
  btn: document.getElementsByClassName("nav__btn")[0],
  links: document.getElementsByClassName("nav")[0],
  logo: (mode) => document.getElementsByClassName(`bookmark-logo-${mode}`)[0],
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
  questions: document.getElementsByClassName("question"),
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
Object.keys(qnToggle.questions).forEach((question) => {
  qnToggle.questions[question].onclick = () => {
    qnToggle.logic(question);
  };
});

const CTAblock = (ele) => document.getElementsByClassName(`CTA__${ele}`)[0];
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
CTAblock("btn").onclick = (e) => {
  e.preventDefault();
  if (emailRegex.test(CTAblock("input").value)) {
    if (CTAblock("input").classList.contains("CTA__input--error")) {
      CTAblock("input").classList.remove("CTA__input--error");
      CTAblock("error").style.display = "none";
    }
    alert("Success!");
    CTAblock("input").value = "";
  } else {
    CTAblock("input").classList.add("CTA__input--error");
    CTAblock("error").style.display = "block";
  }
};

const tabs = {
  mainCtr: document.getElementsByClassName("tab"),
  img: document.getElementsByClassName("illustration__img")[1],
  imgURL: (no) => `./images/illustration-features-tab-${no}.svg`,
  textCtr: (ele) => document.getElementsByClassName(`selection__${ele}`)[0],
  names: ["bookmark", "search", "sharing"],
  headings: [
    "Bookmark in one click",
    "Intelligent search",
    "Share your bookmarks",
  ],
  paragraphs: [
    `Organize your bookmarks however 
  you like. Our simple drag-and-drop 
  interface gives you complete control
   over how you manage your favourite 
   sites.`,
    `Our powerful search feature will help you find
  saved sites in no time at all. No need to trawl 
  through all of your
  bookmarks.`,
    `Easily share your bookmarks and
  collections with others. Create a shareable link 
  that you can send at the
  click of a button.`,
  ],
  removeSelected: function () {
    for (let x = 0; x < this.mainCtr.length; x++) {
      if (this.mainCtr[x].classList.contains("tab--selected")) {
        this.mainCtr[x].classList.remove("tab--selected");
      }
    }
  },
  removeImgStyle: function () {
    for (let y = 0; y < this.names.length; y++)
      if (this.img.classList.contains(`illustration__img--${this.names[y]}`)) {
        this.img.classList.remove(`illustration__img--${this.names[y]}`);
      }
  },
  setImg: function (selection) {
    this.img.src = this.imgURL(parseInt(selection) + 1);
    this.img.alt = `${this.names[selection]} illustration`;
    this.img.classList.add(`illustration__img--${this.names[selection]}`);
  },
  setTxt: function (selection) {
    this.textCtr("heading").innerHTML = this.headings[selection];
    this.textCtr("paragraph").innerHTML = this.paragraphs[selection];
  },
};
for (let selection in tabs.mainCtr) {
  tabs.mainCtr[selection].onclick = () => {
    tabs.removeSelected();
    tabs.removeImgStyle();
    tabs.mainCtr[selection].classList.add("tab--selected");
    tabs.setImg(selection);
    tabs.setTxt(selection);
  };
}
