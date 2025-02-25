let contentTitle = [
    {
      id: "1",
      name: "Handmade Bouquet",
      brand: "Crochetastic",
      price: 50,
      preview: "img/content-1.jpeg",
      isAccessory: false,
      description: "A beautifully handcrafted bouquet made with love and precision.",
      photos: [
        "img/content1-preview(1).jpeg",
        "img/content1-preview(2).jpeg",
        "img/content1-preview(3).jpeg",
        "img/content1-preview(4).jpeg"
      ]
    },
    {
      id: "2",
      name: "Sunbeam Buddy",
      brand: "Crochetastic",
      price: 20,
      preview: "img/content-2(1).jpeg",
      isAccessory: false,
      description: "A cheerful companion to brighten your day.",
      photos: [
        "img/content-2(1).jpeg",
        "img/content2-preview(1).jpeg",
        "img/content2-preview(2).jpeg",
        "img/content2-preview(3).jpeg"
      ]
    },
    {
      id: "3",
      name: "Pink Handbag",
      brand: "Crochetastic",
      price: 180,
      preview: "img/content-3(1).jpeg",
      isAccessory: false,
      description: "Stylish and practical, perfect for any occasion.",
      photos: [
        "img/content-3(1).jpeg",
        "img/content3-preview(1).jpeg",
        "img/content3-preview(2).jpeg",
      ]
    },
    {
      id: "4",
      name: "Crochet beanies",
      brand: "Crochetastic",
      price: 30,
      preview: "img/content-4(1).jpeg",
      isAccessory: false,
      description: "Warm and trendy beanies made with intricate crochet work.",
      photos: [
        "img/content-4(1).jpeg",
        "img/content4-preview(1).jpeg"
      ]
    },
    {
      id: "5",
      name: "Bouquet Photo Frames",
      brand: "Crochetastic",
      price: 100,
      preview: "img/content-5(1).jpeg",
      isAccessory: false,
      description: "Unique photo frames with a handcrafted twist.",
      photos: [
        "img/content-5(1).jpeg",
        "img/content5-preview(1).jpeg"
      ]
    },
    {
      id: "6",
      name: "Autumn Bloom Wear",
      brand: "Crochetastic",
      price: 200,
      preview: "img/content2-1.jpeg",
      isAccessory: true,
      description: "Experience comfort with our cozy autumn wear.",
      photos: [
        "img/content2-1.jpeg",
      ]
    },
    {
      id: "7",
      name: "Baby Bear Snuggle",
      brand: "Crochetastic",
      price: 150,
      preview: "img/content2-2.jpeg",
      isAccessory: true,
      description: "Adorable and snuggly, perfect for your little one.",
      photos: [
        "img/content2-2.jpeg",
      ]
    },
    {
      id: "8",
      name: "Bear Cub Hoodie",
      brand: "Crochetastic",
      price: 200,
      preview: "img/content2-3.jpeg",
      isAccessory: true,
      description: "Stay cozy with our Bear Cub themed hoodie.",
      photos: [
        "img/content2-3.jpeg",
        "img/content8-preview(1).jpeg"
      ]
    },
    {
      id: "9",
      name: "Panda Snuggle Tee",
      brand: "Crochetastic",
      price: 200,
      preview: "img/content2-4.jpeg",
      isAccessory: true,
      description: "A cute tee that brings a smile with its playful design.",
      photos: [
        "img/content2-4.jpeg",
      ]
    },
    {
      id: "10",
      name: "Neon Green Lily",
      brand: "Crochetastic",
      price: 250,
      preview: "img/content2-5.png",
      isAccessory: true,
      description: "Bold, bright, and full of life – a statement piece.",
      photos: [
        "img/content2-5.png",
      ]
    }
  ];
  
  console.clear();
  
  // Get the product id from the URL query string (e.g. ?1)
  let id = location.search.split('?')[1];
  console.log("Product id:", id);
  
  // Function to dynamically create and display product details
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
      // Use provided description or fallback to a default message
      para.appendChild(document.createTextNode(ob.description || 'No description available.'));
      detailsDiv.appendChild(para);
  
      // Product Preview Section for additional images
      let productPreviewDiv = document.createElement('div');
      productPreviewDiv.id = 'productPreview';
      let h3Preview = document.createElement('h3');
      h3Preview.appendChild(document.createTextNode('Product Preview'));
      productPreviewDiv.appendChild(h3Preview);
  
      // Check for additional photos and create clickable preview images
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
          // Construct the prefilled message using product details
          let message = "I'm interested in buying " + ob.name + " (Brand: " + ob.brand + ") priced at Dhs " + ob.price;
          // Replace YOUR_PHONE_NUMBER with your actual WhatsApp number including country code, without the '+' sign.
          let phoneNumber = "+971526286151";
          let whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
          window.location.href = whatsappUrl;
      }
      buttonDiv.appendChild(buttonTag);
  
      // Append all created elements to the main container
      mainContainer.appendChild(imageSectionDiv);
      mainContainer.appendChild(productDetailsDiv);
      productDetailsDiv.appendChild(h1);
      productDetailsDiv.appendChild(h4);
      productDetailsDiv.appendChild(detailsDiv);
      productDetailsDiv.appendChild(productPreviewDiv);
      productDetailsDiv.appendChild(buttonDiv);
  
      return mainContainer;
  }
  
  // Find the product from the local array using the id from the URL.
  let product = contentTitle.find(item => item.id === id);
  if (product) {
      dynamicContentDetails(product);
  } else {
      console.error("Product not found!");
  }
  