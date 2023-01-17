// window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navigation");
var sticky = navigation.offsetTop;

// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navigation.classList.add("sticky");
//     } else {
//         navigation.classList.remove("sticky");
//     }
// }
const shoe_database = [
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike1a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "2",
    name: "Air Jordan 1 Mid SE",
    img: {
      img1: "shoe_image/nike2a.webp",
      img2: "shoe_image/nike2b.webp",
      img3: "shoe_image/nike2c.webp",
      img4: "shoe_image/nike2d.webp",
    },
    cost: "₹11,895",
    description: "Men's Shoes",
  },
  {
    productId: "3",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike3a.jpg",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "4",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike4a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "5",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike5a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "6",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike6a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "7",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike7a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "7",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike8a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike9a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike10a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike11a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike12a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike13a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike14a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike15a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike16a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike1a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "2",
    name: "Air Jordan 1 Mid SE",
    img: {
      img1: "shoe_image/nike2a.webp",
      img2: "shoe_image/nike2b.webp",
      img3: "shoe_image/nike2c.webp",
      img4: "shoe_image/nike2d.webp",
    },
    cost: "₹11,895",
    description: "Men's Shoes",
  },
  {
    productId: "3",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike3a.jpg",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "4",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike4a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "5",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike5a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "6",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike6a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "7",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike7a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "7",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike8a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike9a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike10a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike11a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike12a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike13a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike14a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike15a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike16a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike1a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "2",
    name: "Air Jordan 1 Mid SE",
    img: {
      img1: "shoe_image/nike2a.webp",
      img2: "shoe_image/nike2b.webp",
      img3: "shoe_image/nike2c.webp",
      img4: "shoe_image/nike2d.webp",
    },
    cost: "₹11,895",
    description: "Men's Shoes",
  },
  {
    productId: "3",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike3a.jpg",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "4",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike4a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "5",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike5a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "6",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike6a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "7",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike7a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "7",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike8a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike9a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike10a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike11a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike12a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike13a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike14a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike15a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike16a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike1a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "2",
    name: "Air Jordan 1 Mid SE",
    img: {
      img1: "shoe_image/nike2a.webp",
      img2: "shoe_image/nike2b.webp",
      img3: "shoe_image/nike2c.webp",
      img4: "shoe_image/nike2d.webp",
    },
    cost: "₹11,895",
    description: "Men's Shoes",
  },
  {
    productId: "3",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike3a.jpg",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "4",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike4a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "5",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike5a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "6",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike6a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "7",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike7a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "7",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike8a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike9a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike10a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike11a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike12a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike13a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike14a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike15a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
  {
    productId: "1",
    name: "Air Jordan XXXVII PF",
    img: {
      img1: "shoe_image/nike16a.webp",
      img2: "shoe_image/nike1b.webp",
      img3: "shoe_image/nike1c.webp",
      img4: "shoe_image/nike1d.webp",
    },
    cost: "17,295",
    description: "Men's Basketball Shoes",
  },
];

// const shoe_main = document.querySelector('.shoe_main');
// function renderShoes(shoe) {
//     let html = `<div class="col-lg-3">
//     <img class="shoe-image" src=${shoe.img.img1} alt="">
//     <p>
//        ${shoe.name}<br>
//       ${shoe.description}<br>
//        MRP : ${shoe.cost}<br>
//        incl. of taxes</p>
//    </div> `

//     shoe_main.insertAdjacentHTML('beforeend', html);

// }

// for (let i = 0; i < shoe_database.length; i++)
//     renderShoes(shoe_database[i]);

function anchor_click() {
  fetch("/shoes", {
    method: "POST",
    header: { Content_Type: "application/json" },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log(res);
  });
}
var log = document.getElementById("login");
var reg = document.getElementById("regsiter");
var btn = document.getElementById("but");
function register() {
  log.style.left = "-450px";
  reg.style.left = "50px";
  btn.style.left = "110px";
}
function login() {
  log.style.left = "50px";
  reg.style.left = "-450px";
  btn.style.left = "0px";
}
console.log("ugxfcv");
const payment = document.getElementById("payment");
payment.addEventListener("click", function () {
  console.log("yep");
});
