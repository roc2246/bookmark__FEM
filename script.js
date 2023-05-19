const toggle = {
  block: (block) => document.getElementsByClassName(`${block}__toggle`)[0],
  icon: (block, img) => document.getElementsByClassName(`${block}__${img}`)[0],
  logic: function () {
    const links = document.getElementsByClassName("nav")[0]
    const logo =(mode) => document.getElementsByClassName(`bookmark-logo-${mode}`)[0]

    const hero = document.getElementsByClassName("hero")[0]

    if(!links.classList.contains("nav--mobile")){
        this.icon("nav", "open").style.display = "none"
        this.icon("nav", "close").style.display = "inline"
        logo("regular").style.display = "none"
        logo("white").style.display = "inline"
        hero.style.marginTop = "max(150px, 7vh)"
        links.classList.add("nav--mobile")
        links.classList.remove("nav--top")
    } else{
        this.icon("nav", "open").style.display = "inline"
        this.icon("nav", "close").style.display = "none"
        logo("regular").style.display = "inline"
        logo("white").style.display = "none"
        hero.style.marginTop = "max(4.72222rem, 3.5vh)"
        links.classList.add("nav--top")
        links.classList.remove("nav--mobile")
    }
  },
};


toggle.block("nav").onclick = ()=> toggle.logic()