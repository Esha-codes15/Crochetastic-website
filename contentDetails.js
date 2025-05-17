console.clear();

// Get the product id from the URL query string (e.g. ?16)
let id = location.search.split('?')[1];
console.log("Product id:", id);

// Fetch product data from contentdetail.json
fetch("contentdetail.json")
  .then(response => {
    if (!response.ok) throw new Error("Failed to load contentdetail.json");
    return response.json();
  })
  .then(contentTitle => {
    // Find the product by id
    let product = contentTitle.find(item => item.id === id);
    
    if (product) {
      dynamicContentDetails(product);
    } else {
      console.error("Product not found!");
      document.getElementById('containerProduct').textContent = 'Product not found.';
    }
  })
  .catch(error => {
    console.error("Error loading contentdetail.json:", error);
    document.getElementById('containerProduct').textContent = 'Error loading product data.';
  });

// Your existing dynamicContentDetails function stays exactly the same
function dynamicContentDetails(ob) {
    let mainContainer = document.createElement('div');
    mainContainer.id = 'containerD';
    document.getElementById('containerProduct').appendChild(mainContainer);

    // Image section
    let imageSectionDiv = document.createElement('div');
    imageSectionDiv.id = 'imageSection';

    let imgTag = document.createElement('img');
    imgTag.id = 'imgDetails';
    imgTag.src = ob.preview;
    imageSectionDiv.appendChild(imgTag);

    // Product details section
    let productDetailsDiv = document.createElement('div');
    productDetailsDiv.id = 'productDetails';

    let h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(ob.name));

    let h4 = document.createElement('h4');
    h4.appendChild(document.createTextNode(ob.brand));

    let detailsDiv = document.createElement('div');
    detailsDiv.id = 'details';

    let h3Price = document.createElement('h3');
    h3Price.appendChild(document.createTextNode(ob.price + " Dhs"));
    detailsDiv.appendChild(h3Price);

    // Updated Description Section
    let h3Desc = document.createElement('h3');
    h3Desc.appendChild(document.createTextNode('Description'));
    detailsDiv.appendChild(h3Desc);

    let para = document.createElement('p');
    para.appendChild(document.createTextNode(ob.description || 'No description available.'));
    detailsDiv.appendChild(para);

    // Product Preview Section for additional images
    let productPreviewDiv = document.createElement('div');
    productPreviewDiv.id = 'productPreview';
    let h3Preview = document.createElement('h3');
    h3Preview.appendChild(document.createTextNode('Product Preview'));
    productPreviewDiv.appendChild(h3Preview);

    if (ob.photos && Array.isArray(ob.photos)) {
        for (let i = 0; i < ob.photos.length; i++) {
            let imgPreview = document.createElement('img');
            imgPreview.className = 'previewImg';
            imgPreview.src = ob.photos[i];
            imgPreview.onclick = function () {
                imgTag.src = ob.photos[i];
            }
            productPreviewDiv.appendChild(imgPreview);
        }
    }

    // WhatsApp Button
    let buttonDiv = document.createElement('div');
    buttonDiv.id = 'button';

    let buttonTag = document.createElement('button');
    buttonTag.appendChild(document.createTextNode('Buy via WhatsApp'));
    buttonTag.onclick = function () {
        let message = "I'm interested in buying " + ob.name + " (Brand: " + ob.brand + ") priced at Dhs " + ob.price;
        let phoneNumber = "+971526286151";
        let whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
        window.location.href = whatsappUrl;
    }
    buttonDiv.appendChild(buttonTag);

    mainContainer.appendChild(imageSectionDiv);
    mainContainer.appendChild(productDetailsDiv);
    productDetailsDiv.appendChild(h1);
    productDetailsDiv.appendChild(h4);
    productDetailsDiv.appendChild(detailsDiv);
    productDetailsDiv.appendChild(productPreviewDiv);
    productDetailsDiv.appendChild(buttonDiv);

    return mainContainer;
}
