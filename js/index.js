const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navEle = document.getElementsByTagName("a");
navEle[0].textContent = siteContent["nav"]["nav-item-1"];
navEle[1].textContent = siteContent["nav"]["nav-item-2"];
navEle[2].textContent = siteContent["nav"]["nav-item-3"];
navEle[3].textContent = siteContent["nav"]["nav-item-4"];
navEle[4].textContent = siteContent["nav"]["nav-item-5"];
navEle[5].textContent = siteContent["nav"]["nav-item-6"];


const navBar = document.querySelector('nav');
const newNavOne = document.createElement("a");
const newNavTwo = document.createElement("a");
newNavOne.textContent = "First";
newNavTwo.textContent = "Second";
navBar.prepend(newNavOne);
navBar.appendChild(newNavTwo);

const navArr = document.querySelectorAll("a");
navArr.forEach(ele => {
  ele.style.color = "green";
});

const ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

const ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

const midImg = document.getElementById("middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

const contentHeaders = document.getElementsByTagName("h4");
contentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
contentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
contentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
contentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
contentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
contentHeaders[5].textContent = siteContent["contact"]["contact-h4"];

const contentText = document.getElementsByTagName("p");
contentText[0].textContent = siteContent["main-content"]["features-content"];
contentText[1].textContent = siteContent["main-content"]["about-content"];
contentText[2].textContent = siteContent["main-content"]["services-content"];
contentText[3].textContent = siteContent["main-content"]["product-content"];
contentText[4].textContent = siteContent["main-content"]["vision-content"];
contentText[5].textContent = siteContent["contact"]["address"];
contentText[6].textContent = siteContent["contact"]["phone"];
contentText[7].textContent = siteContent["contact"]["email"];
contentText[8].textContent = siteContent["footer"]["copyright"];