const popUpId = "popUpSelect";
const popUpCont = "popUpContainer";
const secNavbar = "secNavbar";
const githubLinkId = "githubLink";
const webLinkId = "webLink";
const stickyClass = "sticky";
const showClass = "show";
const activeNavClass = "active-nav";
const activeClass = "active";
//
const cvLink =
  " https://drive.usercontent.google.com/u/0/uc?id=1GgOs6lcklwhsMQzSQ0ErsBRjIu97LbsC&export=download";
const txtTyping = "Frontend Engineering";
//
const links = {
  "student-project": {
    github: "https://github.com/HoangThai18/Student-Management-in-JS",
    javascript: "https://homepage-shopee.web.app/",
  },
  "cvc-project": {
    github: "https://github.com/HoangThai18/CVC_project",
    javascript: "https://example2.com",
  },
  "shopee-project": {
    github: "https://github.com/HoangThai18/Shopee",
    javascript: "https://homepage-shopee.web.app/",
  },
  "Title 3": {
    github: "https://github.com/HoangThai18/Shopee",
    javascript: "https://homepage-shopee.web.app/",
  },
};
const typed = new Typed(".typing", {
  strings: [txtTyping],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
//
$(document).ready(function () {
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  $(".menu-btn").click(function () {
    $(".menu-btn").removeClass(activeNavClass);
    $(this).addClass(activeNavClass);

    $("html").css("scrollBehavior", "smooth");
  });

  $(".progress-bar").each(function () {
    let bar = $(this);
    console.log(bar);
    let percent = parseInt(bar.attr("data-percent"));
    bar.css("width", percent + "%");
    bar.find(".tooltip").text(percent + "%");
  });
});

function openNewWindow() {
  let cvUrl = cvLink;
  window.open(cvUrl, "_blank");
}

$(window).scroll(function () {
  if (this.scrollY > 20) {
    $(".navbar").addClass(stickyClass);
  } else {
    $(".navbar").removeClass(stickyClass);
  }
  if (this.scrollY > 500) {
    $(".scroll-up-btn").addClass(showClass);
  } else {
    $(".scroll-up-btn").removeClass(showClass);
  }
});

function hidePopUp(displayOvl = true) {
  let popUp = document.getElementById(popUpId);
  let tabInputs = document.getElementById(popUpCont);
  let navbar = document.getElementById(secNavbar);
  if (displayOvl) {
    popUp.style.display = "none";
    navbar.style.display = "block";
  } else {
    popUp.style.display = "block";
    navbar.style.display = "none";
  }
  tabInputs.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}
function showAddStdSec() {
  hideSecById(popUpId, false);
  hidePopUp(false);
}
function hideSecById(id, isHide) {
  let addStdSec = document.getElementById(id);
  addStdSec.hidden = isHide;
}

function showPopUpAndSetLinks(workTitle) {
  let githubLink = document.getElementById(githubLinkId);
  let webLink = document.getElementById(webLinkId);
  let workLinks = links[workTitle];
  if (workLinks) {
    githubLink.href = workLinks.github;
    webLink.href = workLinks.javascript;
  }
}

document.querySelectorAll(".work a").forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    const workTitle = this.getAttribute("data-title");
    showPopUpAndSetLinks(workTitle);
  });
});
