// HOTEL DETAILS

const HOTEL = {
    whatsappNumber: "919449184761",
    mapUrl: "https://maps.app.goo.gl/nBRWCxW6zm8jfegZ9",
    openingTime: "7:00 AM",
    closingTime: "4:00 PM",

    // Add your real Google Review link here
    googleReviewUrl: "",

    // Add your deployed website URL here
    websiteUrl: ""
};


// BREAKFAST MENU

const foodItems = [

    { name: "ಇಡ್ಲಿ", price: 15, image: "idli.jpg", category: "breakfast" },
    { name: "ಪೂರಿ ಸಾಗು", price: 50, image: "poori-saagu.jpg", category: "breakfast" },

    { name: "ಮಸಾಲೆ ದೋಸೆ", price: 60, image: "masala-dosa.jpg", category: "dosa" },
    { name: "ಸೆಟ್ ದೋಸೆ", price: 60, image: "set-dosa.jpg", category: "dosa" },
    { name: "ಈರುಳ್ಳಿ ದೋಸೆ", price: 60, image: "onion-dosa.jpg", category: "dosa" },
    { name: "ಬೆಣ್ಣೆ ದೋಸೆ", price: 40, image: "benne-dosa.jpg", category: "dosa" },
    { name: "ಸೆಟ್ ಮಸಾಲೆ ದೋಸೆ", price: 80, image: "set-masala-dosa.jpg", category: "dosa" },
    { name: "ಖಾಲಿ ದೋಸೆ", price: 50, image: "khali-dosa.jpg", category: "dosa" },
    { name: "ಪ್ಲೇನ್ ದೋಸೆ", price: 50, image: "plain-dosa.jpg", category: "dosa" },
    { name: "ರಾಗಿ ದೋಸೆ", price: 40, image: "ragi-dosa.jpg", category: "dosa" },
    { name: "ರಾಗಿ ಮಸಾಲೆ ದೋಸೆ", price: 70, image: "ragi-masala-dosa.jpg", category: "dosa" },
    { name: "ರಾಗಿ ಬೆಣ್ಣೆ ದೋಸೆ", price: 50, image: "ragi-benne-dosa.jpg", category: "dosa" },
    { name: "ರಾಗಿ ಸೆಟ್ ದೋಸೆ", price: 60, image: "ragi-set-dosa.jpg", category: "dosa" },
    { name: "ರಾಗಿ ಈರುಳ್ಳಿ ದೋಸೆ", price: 70, image: "ragi-onion-dosa.jpg", category: "dosa" },
    { name: "ರಾಗಿ ಸೆಟ್ ಮಸಾಲೆ ದೋಸೆ", price: 80, image: "ragi-set-masala-dosa.jpg", category: "dosa" },

    { name: "ತರಕಾರಿ ರೈಸ್‌ಬಾತ್", price: 50, image: "vegetable-ricebath.jpg", category: "rice" },
    { name: "ನಿಂಬೆ ಚಿತ್ರಾನ್ನ", price: 50, image: "lemon-rice.jpg", category: "rice" },
    { name: "ಪುಳಿಯೋಗರೆ", price: 50, image: "puliyogare.jpg", category: "rice" },
    { name: "ಖಾರಾ ಪೊಂಗಲ್", price: 50, image: "khara-pongal.jpg", category: "rice" },
    { name: "ಬಿಸಿಬೇಳೆ ಬಾತ್", price: 50, image: "bisibelebath.jpg", category: "rice" },
    { name: "ವಾಂಗೀಬಾತ್", price: 50, image: "vangibath.jpg", category: "rice" },
    { name: "ಟೊಮೇಟೊ ಬಾತ್", price: 50, image: "tomato-bath.jpg", category: "rice" },

    { name: "ಉದ್ದಿನ ವಡೆ", price: 15, image: "uddina-vada.jpg", category: "vada" },
    { name: "ಮಸಾಲೆ ವಡೆ", price: 10, image: "masala-vada.jpg", category: "vada" },

    { name: "ಉಪಿಟ್ಟು / ಖಾರಾಬಾತ್", price: 50, image: "upittu.jpg", category: "special" },
    { name: "ರವೆ ಕೇಸರಿಬಾತ್", price: 50, image: "rava-kesari.jpg", category: "special" },
    { name: "ಶಾವಿಗೆ ಕೇಸರಿಬಾತ್", price: 50, image: "shavige-kesari.jpg", category: "special" },
    { name: "ಶಾವಿಗೆ ಬಾತ್", price: 50, image: "shavige-bath.jpg", category: "special" },
    { name: "ಸಿಹಿ ಪೊಂಗಲ್", price: 50, image: "sweet-pongal.jpg", category: "special" },
    { name: "ರಾಗಿ ಅಂಬಲಿ", price: 50, image: "ragi-ambali.jpg", category: "special" },
    { name: "ಕ್ರಿಸ್ಪಿ ಸೂಪ್", price: 50, image: "crispy-soup.jpg", category: "special" }

];


// DISPLAY FOOD ITEMS

const foodGrid = document.getElementById("foodGrid");

function displayFood(category = "all") {

    foodGrid.innerHTML = "";

    const filteredItems = category === "all"
        ? foodItems
        : foodItems.filter(item => item.category === category);

    filteredItems.forEach(item => {

        const card = document.createElement("div");
        card.className = "food-card";

        const img = document.createElement("img");
        img.src = "./images/" + item.image;
        img.alt = item.name;

        img.onerror = function () {
            this.style.display = "none";
        };

        const name = document.createElement("h3");
        name.textContent = item.name;

        const price = document.createElement("h3");
        price.className = "price";
        price.textContent = "₹" + item.price;

        const status = document.createElement("span");
        status.className = "availability";
        status.textContent = "ಲಭ್ಯತೆಗಾಗಿ ಸಂಪರ್ಕಿಸಿ";

        card.append(img, name, price, status);
        foodGrid.appendChild(card);

    });
}

displayFood();


// CATEGORY FILTER

document.querySelectorAll(".filter-btn").forEach(button => {

    button.addEventListener("click", function () {

        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        displayFood(this.dataset.category);

    });

});


// TODAY'S SPECIAL

const dailySpecials = [
    {
        day: 1,
        name: "ಬಿಸಿಬೇಳೆ ಬಾತ್",
        price: "₹50",
        description: "ಸೋಮವಾರದ ವಿಶೇಷ"
    },
    {
        day: 2,
        name: "ಖಾರಾ ಪೊಂಗಲ್",
        price: "₹50",
        description: "ಮಂಗಳವಾರದ ವಿಶೇಷ"
    },
    {
        day: 3,
        name: "ಟೊಮೇಟೊ ಬಾತ್ ಮತ್ತು ಖಾರಾ ಪೊಂಗಲ್",
        price: "₹50",
        description: "ಬುಧವಾರದ ವಿಶೇಷ"
    },
    {
        day: 4,
        name: "ಬಿಸಿಬೇಳೆ ಬಾತ್",
        price: "₹50",
        description: "ಗುರುವಾರದ ವಿಶೇಷ"
    },
    {
        day: 5,
        name: "ಖಾರಾ ಪೊಂಗಲ್ ಮತ್ತು ವಾಂಗೀಬಾತ್",
        price: "₹50",
        description: "ಶುಕ್ರವಾರದ ವಿಶೇಷ"
    },
    {
        day: 6,
        name: "ಬಿಸಿಬೇಳೆ ಬಾತ್",
        price: "₹50",
        description: "ಶನಿವಾರದ ವಿಶೇಷ"
    },
    {
        day: 0,
        name: "ಭಾನುವಾರ ರಜೆ",
        price: "",
        description: "ಮನು ಮೆಸ್ ಪ್ರತಿ ಭಾನುವಾರ ಮುಚ್ಚಿರುತ್ತದೆ."
    }
];

const today = new Date().getDay();

const special = dailySpecials.find(item => item.day === today);

document.getElementById("todayName").textContent = special.name;
document.getElementById("todayDescription").textContent = special.description;
document.getElementById("todayPrice").textContent = special.price;


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});


// GOOGLE REVIEW BUTTON

const reviewButton = document.getElementById("reviewButton");

reviewButton.addEventListener("click", function(event) {

    if (!HOTEL.googleReviewUrl) {
        event.preventDefault();
        alert("Google Review ಲಿಂಕ್ ಇನ್ನೂ ಸೇರಿಸಿಲ್ಲ.");
        return;
    }

    this.href = HOTEL.googleReviewUrl;
    this.target = "_blank";

});


// WHATSAPP LINKS

document.querySelectorAll(".whatsapp-btn").forEach(button => {
    button.href = "https://wa.me/" + HOTEL.whatsappNumber;
});


// QR CODE

function createQRCode() {

    const qrContainer = document.querySelector(".qr-placeholder");

    if (!HOTEL.websiteUrl) {
        return;
    }

    qrContainer.innerHTML = "";

    const qrImage = document.createElement("img");

    qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
        encodeURIComponent(HOTEL.websiteUrl);

    qrImage.alt = "Manu Mess website QR code";

    qrContainer.appendChild(qrImage);

}

createQRCode();