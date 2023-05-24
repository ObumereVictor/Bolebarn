// VARIABLES
const logoImg = document.querySelector(".com-logo");
const toggleBtn = document.querySelector(".toggle");
const navi = document.querySelector(".nav-links-div");
const reviewsSection = document.querySelector(".reviews");
const productDiv = document.querySelector(".product-div")
const whatsLink = document.querySelector(".whats-link");
const instaLink = document.querySelector(".insta-link");

let products = [{
    id: 1,
    productImg: '/img/products/plantain.jpg',
    productPrice: 500,
    productName: 'Plaintain'
},
    {
        id: 2,
        productImg: '/img/products/yam.jpg',
        productPrice: 500,
        productName: 'Yam'
    },
    {
        id: 3,
        productImg: '/img/products/turkey.jpg',
        productPrice: 2000,
        productName: 'Turkey'
    },
    {
        id: 4,
        productImg: '/img/products/fish.jpg',
        productPrice: 1000,
        productName: 'Fish',
    },
    {
        id: 5,
        productImg: '/img/products/palm.jpg',
        productPrice: 500,
        productName: 'Palmwine'
    }]


// DOCUMENT ONLOAD {
    window.addEventListener("DOMContentLoaded", (event) => {
        displayReviews()
    })

// RELOADING THE PAGE WITH COMPANY LOGO
    logoImg.addEventListener("click", () => {
        logoImg.querySelector(".logo-link").click();
    });


// TOGGLING SIDE BAR NAVIGATION 
    toggleBtn.addEventListener("click", (event) => {
        toggleBtn.classList.toggle("show");
        navi.classList.remove("scroll");
        if(toggleBtn.classList.contains("show")) {
            navi.style.transform = "translateX(0%)";
        } else {
            navi.style.transform = "translateX(100%)";
        }
    });

// REVIEWS 
reviews = [
    {
        id: 1,
        revImg: "/img//reviews/review1.jpg"
    },
    {
        id: 2,
        revImg: "/img/reviews/review2.jpg"
    },
    {
        id: 3,
        revImg: "/img/reviews/review3.jpg"
    },
    {
        id: 4,
        revImg: "/img/reviews/review4.jpg"
    },
    {
        id: 5,
        revImg: "/img/reviews/review5.jpg"
    },
    {
        id: 6,
        revImg: "/img/reviews/review6.jpg"
    },
]

// DISPLAYREVIEWS
function displayReviews() {
    let reviewNum = 0;
    reviewNum = setInterval(function() {
        reviewNum++;
        if(reviewNum === reviews.length) {
            reviewNum = 0;
        }
        reviewsSection.innerHTML = `<div class="reviews">
        <img src="${reviews[reviewNum].revImg}">
    </div>` ;
    }, 5000)
}



// DISPLAYPRODUCTS
function displayProducts() {
    let produce = products.map((product) => {
        return ` <div class="product">
        <img src="${product.productImg}"><hr>
        <div class='name-price'>
            <h2>${product.productName}</h2>
            <h2>₦ ${product.productPrice}</h2>
        </div>
        </div>`;
    })
    produce = produce.join("");
    productDiv.innerHTML = produce;

}
function wclickLink() {
    whatsLink.click();
}
displayProducts();

function iclickLink() {
    instaLink.click();
}

let prevScrollpos = window.pageXOffset;
            window.addEventListener("scroll", (event) => {
                let currentScrollpos = window.pageXOffset;
                if(!prevScrollpos > currentScrollpos) {
                    // navi.style.transform = "translateX(100%)";
                    navi.classList.add("scroll");
                    toggleBtn.classList.remove("show")
                }  
                prevScrollpos = currentScrollpos;                
            })



