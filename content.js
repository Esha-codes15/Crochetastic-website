// Fetch product data from content.json
fetch("content.json")
  .then((response) => response.json())
  .then((contentTitle) => {
    // Ensure the badge updates with cookie cart count
    if (document.cookie.indexOf(",counter=") >= 0) {
      var counter = document.cookie.split(",")[1].split("=")[1];
      document.getElementById("badge").innerHTML = counter;
    }

    // Find the main container elements
    let containerClothing = document.getElementById("containerClothing");
    let containerAccessories = document.getElementById("containerAccessories");

    // Reverse the array to show newest first
    contentTitle.reverse();

    // Loop through the products and display them
    for (let i = 0; i < contentTitle.length; i++) {
      const product = contentTitle[i];
      const productCard = dynamicClothingSection(product);

      if (product.isAccessory) {
        containerAccessories.appendChild(productCard);
      } else {
        containerClothing.appendChild(productCard);
      }
    }
  })
  .catch((error) => console.error("Error loading content.json:", error));

// Reusable function to create a product card
function dynamicClothingSection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.id = "box";

  let boxLink = document.createElement("a");
  boxLink.href = "/contentDetails.html?" + ob.id;

  let imgTag = document.createElement("img");
  imgTag.src = ob.preview;

  let detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  let h3 = document.createElement("h3");
  h3.innerText = ob.name;

  let h4 = document.createElement("h4");
  h4.innerText = ob.brand;

  let h2 = document.createElement("h2");
  h2.innerText = ob.price + " Dhs";

  // Assemble DOM structure
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(h2);

  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);

  boxDiv.appendChild(boxLink);

  return boxDiv;
}
