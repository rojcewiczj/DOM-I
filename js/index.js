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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelectorAll('a');
console.log(nav[0]);
nav[0].textContent = siteContent.nav["nav-item-1"];
nav[1].textContent = siteContent.nav["nav-item-2"];
nav[2].textContent = siteContent.nav["nav-item-3"];
nav[3].textContent = siteContent.nav["nav-item-4"];
nav[4].textContent = siteContent.nav["nav-item-5"];
nav[5].textContent = siteContent.nav["nav-item-6"];

let h1 = document.querySelector('h1');
h1.textContent = (siteContent.cta.h1);

let button = document.querySelector('button');
button.textContent = (siteContent.cta.button);


let img = document.getElementById ('cta-img');
img.setAttribute('src' , siteContent.cta["img-src"]);

let featuresH4 = document.querySelector('h4:first-of-type');
featuresH4.textContent = (siteContent["main-content"]["features-h4"]);

let featuresContent = document.querySelector('p:first-of-type');
featuresContent.textContent =(siteContent["main-content"]["features-content"]);

let aboutH4 = document.querySelector('.top-content div:last-of-type h4');
aboutH4.textContent = (siteContent["main-content"]["about-h4"]);

let aboutContent = document.querySelector('.top-content div:last-of-type p');
aboutContent.textContent = (siteContent["main-content"]["about-content"]);

let middleImg = document.getElementById ('middle-img');
middleImg.setAttribute('src' , siteContent["main-content"]["middle-img-src"]);

let servicesH4 = document.querySelector('.bottom-content div:nth-child(1) h4');
servicesH4.textContent = (siteContent["main-content"]["services-h4"]);

let servicesContent = document.querySelector('.bottom-content div:nth-child(1) p');
servicesContent.textContent = (siteContent["main-content"]["services-content"]);

let productH4 = document.querySelector('.bottom-content div:nth-child(2) h4');
productH4.textContent = (siteContent["main-content"]["product-h4"]);

let productContent = document.querySelector('.bottom-content div:nth-child(2) p');
productContent.textContent = (siteContent["main-content"]["product-content"]);

let visionH4 = document.querySelector('.bottom-content div:nth-child(3) h4');
visionH4.textContent = (siteContent["main-content"]["vision-h4"]);

let visionContent = document.querySelector('.bottom-content div:nth-child(3) p');
visionContent.textContent = (siteContent["main-content"]["vision-content"]);
