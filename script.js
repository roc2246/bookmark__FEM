const toggle = {
  block: (block) => document.getElementsByClassName(`${block}__toggle`)[0],
  icon: (block, img) => document.getElementsByClassName(`${block}__${img}`)[0],
  logic: function () {
    const links = document.getElementsByClassName("nav")[0]
    const logo =(mode) => document.getElementsByClassName(`bookmark-logo-${mode}`)[0]

    if(!links.classList.contains("nav--mobile")){
        this.icon("nav", "open").style.display = "none"
        this.icon("nav", "close").style.display = "inline"
        logo("regular").style.display = "none"
        logo("white").style.display = "inline"
        links.classList.add("nav--mobile")
        links.classList.remove("nav--top")
    } else{
        this.icon("nav", "open").style.display = "inline"
        this.icon("nav", "close").style.display = "none"
        logo("regular").style.display = "inline"
        logo("white").style.display = "none"
        links.classList.add("nav--top")
        links.classList.remove("nav--mobile")
    }
  },
};


toggle.block("nav").onclick = ()=> toggle.logic()