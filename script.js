
// JavaScript to handle "Shop Now" and "Buy Now" button interactions
document.addEventListener("DOMContentLoaded", function () {
    // Redirect "Shop Now" button to JD ROG website
    const shopNowButton = document.querySelector("button");
    if (shopNowButton) {
        shopNowButton.addEventListener("click", () => {
            window.location.href = "https://www.jd.com";
        });
    }

    // "Buy Now" buttons show "Added to Cart!" alert without redirection
    const buyNowButtons = document.querySelectorAll(".product-item button");
    buyNowButtons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Added to Cart!");
        });
    });
});
