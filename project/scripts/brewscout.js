document.addEventListener("DOMContentLoaded", function () {
    // Array of coffee shops
    const coffeeShops = [
        {
            name: "Coffee Shop 1",
            image: "https://images.pexels.com/photos/1833769/pexels-photo-1833769.jpeg?auto=compress&cs=tinysrgb&w=600",
            rating: "⭐⭐⭐⭐☆",
            distance: "1.2 miles",
        },
        {
            name: "Coffee Shop 2",
            image: "https://images.pexels.com/photos/1438445/pexels-photo-1438445.jpeg?auto=compress&cs=tinysrgb&w=600",
            rating: "⭐⭐⭐⭐⭐",
            distance: "2.5 miles",
        },
        {
            name: "Coffee Shop 3",
            image: "https://images.pexels.com/photos/1402407/pexels-photo-1402407.jpeg?auto=compress&cs=tinysrgb&w=600",
            rating: "⭐⭐⭐⭐☆",
            distance: "0.8 miles",
        },
    ];

    // Get the container element to hold the coffee shop listings
    const coffeeShopsContainer = document.getElementById("coffee-shops-list");

    // Loop through the coffee shops and dynamically create elements
    coffeeShops.forEach(shop => {
        const shopDiv = document.createElement("div");
        shopDiv.classList.add("coffee-shop");

        const img = document.createElement("img");
        img.src = shop.image;
        img.alt = shop.name;

        const h3 = document.createElement("h3");
        h3.textContent = shop.name;

        const rating = document.createElement("p");
        rating.textContent = shop.rating;

        const distance = document.createElement("p");
        distance.textContent = `Distance: ${shop.distance}`;

        // Append all elements to the coffee shop div
        shopDiv.appendChild(img);
        shopDiv.appendChild(h3);
        shopDiv.appendChild(rating);
        shopDiv.appendChild(distance);

        // Append the coffee shop div to the container
        coffeeShopsContainer.appendChild(shopDiv);
    });

    // Search functionality for coffee shops
    document.getElementById("coffee-search").addEventListener("input", function (event) {
        const searchQuery = event.target.value.toLowerCase();
        const coffeeShops = document.querySelectorAll(".coffee-shop");

        coffeeShops.forEach(shop => {
            const shopName = shop.querySelector("h3").textContent.toLowerCase();
            if (shopName.includes(searchQuery)) {
                shop.style.display = "block";
            } else {
                shop.style.display = "none";
            }
        });
    });
});
