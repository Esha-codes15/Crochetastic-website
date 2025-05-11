let contentTitle = [
    {
    id: "16",
    name: "Teddy Travel Nest",
    brand: "Crochetastic",
    price: 200,
    preview: "img/new-content-6(1).jpeg",
    isAccessory: false
  },
  {
    id: "15",
    name: "Panda Snuggle Set",
    brand: "Crochetastic",
    price: 200,
    preview: "img/new-content-4(1).jpeg",
    isAccessory: true
  },
  {
    id: "14",
    name: "Mini Bloom Crochet",
    brand: "Crochetastic",
    price: 20,
    preview: "img/new-content-5(2).jpeg",
    isAccessory: false
  },
  {
    id: "13",
    name: "Handmade Baby Booties",
    brand: "Crochetastic",
    price: 50,
    preview: "img/new-content-3(4).jpeg",
    isAccessory: false
  },
  {
    id: "11",
    name: "Crochet Tulip Bouquet",
    brand: "Crochetastic",
    price: 10,
    preview: "img/new-content-1.jpeg",
    isAccessory: false
  },
  {
    id: "12",
    name: "Floral Wristbands",
    brand: "Crochetastic",
    price: 30,
    preview: "img/new-content-2.png",
    isAccessory: false
  },
  {
    id: "1",
    name: "Handmade Bouquet",
    brand: "Crochetastic",
    price: 100,
    preview: "img/content-1.jpeg",
    isAccessory: false
  },
  {
    id: "2",
    name: "Sunbeam Buddy",
    brand: "Crochetastic",
    price: 20,
    preview: "img/content-2(1).jpeg",
    isAccessory: false
  },
  {
    id: "3",
    name: "Pink Handbag",
    brand: "Crochetastic",
    price: 180,
    preview: "img/content-3(1).jpeg",
    isAccessory: false
  },
  {
    id: "4",
    name: "Crochet beanies",
    brand: "Crochetastic",
    price: 30,
    preview: "img/content-4(1).jpeg",
    isAccessory: false
  },
  {
    id: "5",
    name: "Bouquet Photo Frames",
    brand: "Crochetastic",
    price: 100,
    preview: "img/content-5(1).jpeg",
    isAccessory: false
  },
   {
    id: "6",
    name: "Autumn Bloom Wear",
    brand: "Crochetastic",
    price: 200,
    preview: "img/content2-1.jpeg",
    isAccessory: true
  },
  {
    id: "7",
    name: "Baby Bear Snuggle",
    brand: "Crochetastic",
    price: 150,
    preview: "img/content2-2.jpeg",
    isAccessory: true
  },
  {
    id: "8",
    name: "Bear Cub Hoodie",
    brand: "Crochetastic",
    price: 200,
    preview: "img/content2-3.jpeg",
    isAccessory: true
  },
  {
    id: "9",
    name: "Panda Snuggle Tee",
    brand: "Crochetastic",
    price: 200,
    preview: "img/content2-4.jpeg",
    isAccessory: true
  },
  {
    id: "10",
    name: "Neon Green Lily",
    brand: "Crochetastic",
    price: 250,
    preview: "img/content2-5.png",
    isAccessory: true
  }
];

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
  let h3Text = document.createTextNode(ob.name);
  h3.appendChild(h3Text);

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode(ob.brand);
  h4.appendChild(h4Text);

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode( ob.price + " Dhs");
  h2.appendChild(h2Text);

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(h2);

  return boxDiv;
}

// Ensure the badge updates with cookie cart count
if (document.cookie.indexOf(",counter=") >= 0) {
  var counter = document.cookie.split(",")[1].split("=")[1];
  document.getElementById("badge").innerHTML = counter;
}

// Find the main container elements
let containerClothing = document.getElementById("containerClothing");
let containerAccessories = document.getElementById("containerAccessories");

// Loop through the products and display them
for (let i = 0; i < contentTitle.length; i++) {
  if (contentTitle[i].isAccessory) {
    containerAccessories.appendChild(dynamicClothingSection(contentTitle[i]));
  } else {
    containerClothing.appendChild(dynamicClothingSection(contentTitle[i]));
  }
}
