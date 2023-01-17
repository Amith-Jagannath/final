function validatePhone(num) {
  // regex pattern for phone number
  console.log("Called");
  const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
  // check if the phone number is valid
  let result = num.match(re);
  if (result) {
    console.log("valid");
    return 1;
  }
  console.log("not ");
  return 0;
}

const express = require("express"); //interact with html file
const bodyParser = require("body-parser"); //to get data from user
const mongoose = require("mongoose"); //package to connect to db
const hbs = require("express-handlebars"); //used for hbs file soo as to use js componenets for displaying images
const { handlebars } = require("hbs");
const cookieParser = require("cookie-parser"); //used to store cookies for user sessions
const sessions = require("express-session");
const jsonMerger = require("json-merger");
// const oneDay = 1000 * 60 * 60 * 24;
const oneDay = 20;
const path = __dirname; //+ "/public/views";
// var jsonMerger = require("json-merger");
// mongoose
//   .connect("mongodb://localhost:27017/SneakX", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     //useCreateIndex:true
//   })
//   .then(() => {
//     console.log("connection sucessfull");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

mongoose
  .connect(
    "mongodb+srv://amyth2002:Soorenji%40456@cluster0.bzzlyno.mongodb.net/sneak?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex:true
    }
  )
  .then(() => {
    console.log("connection sucessfull");
  })
  .catch((e) => {
    console.log(e);
  });
const app = express();
app.set("view engine", "hbs"); //view engine for handlebars page
app.use(express.static(__dirname));
// const path = __dirname;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
var server_port = process.env.YOUR_PORT || process.env.PORT || 9000;
console.log(server_port);
app.use(
  sessions({
    //this the data sent and stored in brower cookie
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

app.listen(server_port, function () {
  console.log("Listening on port %d", server_port);
});

const ProductSchema = new mongoose.Schema({
  product_id: {
    type: Number,
  },

  name: {
    type: String,
  },
  gender: {
    type: String,
  },
  images: {
    img1: {
      type: String,
    },
    img2: {
      type: String,
    },
    img3: {
      type: String,
    },
    img4: {
      type: String,
    },
  },
  cost: {
    type: String,
  },
  costInVal: {
    type: Number,
  },
  description: {
    type: String,
  },
});
const CustomerSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  number: {
    type: String,
  },
});
const CartSchema = new mongoose.Schema({
  cart_id: {
    type: Number,
  },
  prod_id: {
    type: Number,
  },
  cus_id: {
    type: String,
  },
});
const Product = new mongoose.model("Product", ProductSchema);
const Customer = new mongoose.model("Customer", CustomerSchema);
const Cart = new mongoose.model("Cart", CartSchema);
// const Product_scrap = new mongoose.model("product_scrap");
// const registerDetail = new mongoose.model("project", customerSchema);

module.exports = { Product, Customer };
module.exports = Cart;

const createDoc = async () => {
  try {
    const result = await Product.insertMany([
      new Product({
        product_id: 21,
        name: "puma",
        gender: "female",
        images: {
          img1: "",
          img2: "",
          img3: "",
          img4: "",
        },
        cost: "₹2,359",
        costInVal: 2359,
        description: "",
      }),
    ]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
// createDoc();
console.log("Yepp");
console.log(path);
var session;
app.get("/", function (req, res) {
  //used to identify user sessions
  res.sendFile("/index.html");
});
app.post("/home", async function (req, res) {
  res.sendFile(path + "/index.html");
});
app.post("/shoes", async function (req, res) {
  const shoes_details = await Product.find({});
  //   res.send(shoes_details);
  // console.log(shoes_details);
  // console.log(shoes_details);
  res.render("shop", { info: shoes_details });
});

app.post("/register", async function (req, res) {
  try {
    const values = req.body;
    if (
      !values.email ||
      !values.username ||
      !values.password ||
      !values.number
    ) {
      res.sendFile(path + "/index.html");
    } else {
      const data = await Customer.findOne({ email: values.email });

      console.log(Boolean(data));
      if (Boolean(data)) res.sendFile(path + "/index.html");
      else {
        if (!validatePhone(req.body.number))
          res.render("index", { message: "Phone number doesn't exist" });
        const entry1 = new Customer({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          number: req.body.number,
        });
        // await entry1.save();
        console.log(entry1);
      }
    }
    res.sendFile(path + "/index.html");
    // res.status(201).sendFile(path + "/index.html");

    // res.redirect("/index.html", { user: username });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

app.post("/login", async function (req, res) {
  try {
    const values = req.body;
    session = req.session;
    console.log(values);
    if (!values.email || !values.password) {
      res.sendFile(path + "/index.html");
    } else {
      data = await Customer.find({ email: values.email });
      if (!data[0]) {
        res.render("index"); //res.render("index", { message: "Email has not been registered!!" });
      } else {
        if (data[0].password === values.password) {
          session.userid = values.email;
          console.log(session.userid);
          res.sendFile(path + "/index.html");
        } else {
          res.sendFile(path + "/index.html");
        }
      }
    }
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

app.post("/individualshoe", async function (req, res) {
  const val = req.body.product_id;

  const shoes_det = await Product.findOne({ product_id: val });
  console.log(shoes_det);
  console.log(val);
  res.render("detail", { info: shoes_det });
  console.log("yes");
});
console.log(path);
app.post("/nike", async function (req, res) {
  console.log("yes");
  const nike = await Product.find({ name: "nike" });
  console.log(nike);

  // res.render("shop", { info: nike });
  res.render("shop", { info: nike });
  // res.send("nike");
});

app.post("/puma", async function (req, res) {
  const puma = await Product.find({ name: "puma" });
  res.render("shop", { info: puma });
});
app.post("/addidas", async function (req, res) {
  const adidas = await Product.find({ name: "adidas" });
  res.render("shop", { info: adidas });
});
app.post("/sparx", async function (req, res) {
  const sparx = await Product.find({ name: "sparx" });
  res.render("shop", { info: sparx });
});

app.post("/search_box", async function (req, res) {
  const name = req.body.shoe_name.toLowerCase();
  const shoes = await Product.find({ name: name });
  res.render("shop", { info: shoes });
});

app.post("/male", async function (req, res) {
  const male_shoe = await Product.find({ gender: "male" });
  res.render("shop", { info: male_shoe });
});
app.post("/female", async function (req, res) {
  const female_shoe = await Product.find({ gender: "female" });
  res.render("shop", { info: female_shoe });
});
app.post("/crocs", async function (req, res) {
  const crocs = await Product.find({ name: "crocs" });
  res.render("shop", { info: crocs });
});
app.post("/under5k", async function (req, res) {
  // await Product.find({
  //     $and: [{ costInVal: {} }, { diet_id: req.body.id }],
  // });
  const under5k = Product.find({ costInVal: { $lt: 5000 } });
  console.log(under5k);
  res.render("shop", { info: under5k });
});

app.post("/addToCart", async function (req, res) {
  console.log(session.userid);
  await Cart.find().sort({ cart_id: -1 });
  if (session == undefined) res.render("index", { message: "Kindly Login" });
  const user = await Cart.findOne({ customer_id: session.userid }).sort({
    cart_id: -1,
  });
  if (user) {
    c = user.cart_id + 1;
    console.log(c);
  } else {
    c = 1;
  }

  var cartItem = new Cart({
    cart_id: c,
    cus_id: session.userid,
    prod_id: req.body.id,
  });
  console.log(session.userid);
  console.log(req.body.id);

  await cartItem.save();
  const shoe = await Product.find({ product_id: req.body.id });
  res.render("detail", { info: shoe });
});

// Product.aggregate([
//   {
//     $lookup: {
//       From: "Cart",
//       LocalField: "product_id",
//       foreignField: "prod_id",
//       as: "user_cart",
//     },
//   },
// ]);

app.post("/cart", async function (req, res) {
  if (session == undefined) res.sendFile(path + "/index.html");
  else {
    const result = await Product.aggregate[
      {
        $lookup: {
          from: "carts",
          localField: "product_id",
          foreignField: "prod_id",
          as: "cart_product",
        },
      }
    ];

    const test = await Cart.aggregate([
      // {
      //   $project: {
      //     "Product.name": 1,
      //     "Product.product_id": 1,
      //     "Product.description": 1,
      //     cust_id: 1,
      //   },
      // },
      {
        $lookup: {
          from: "products",
          localField: "prod_id",
          foreignField: "product_id",
          as: "cart_product",
        },
      },
      {
        $match: {
          cus_id: "amithjagannath02@gmail.com",
        },
      },
    ]);

    const ans = await Cart.aggregate([
      [
        {
          $lookup: {
            from: "products",
            localField: "prod_id",
            foreignField: "product_id",
            as: "result",
          },
        },
        {
          $addFields: {
            array: {
              $arrayElemAt: ["$result", 0],
            },
          },
        },
        {
          $addFields: {
            descrption: "$array.description",
            image: "$array.images.img1",
            cost: "$array.cost",
            costInValue: "$array.costInVal",
            total: {
              $sum: "$array.costInVal",
            },
          },
        },
        {
          $match: {
            cus_id: session.userid,
          },
        },
      ],
    ]);

    // const resul = await cart_product.find({});
    console.log(ans);
    // const resu = await Product_cart.find({});
    res.render("cart", { info: ans });
  }
});
app.post("/checkout", async function (req, res) {
  const id = req.body.id;
  if (session == undefined) res.sendFile(path + "/index.html");
  const product = await Product.findOne({ product_id: id });
  const user = await Customer.findOne({ customer_id: session.userid });
  var result = jsonMerger.mergeObjects([product, user]);
  console.log(product);
  res.render("checkout", { info: product });
});
app.post("/delete", async function (req, res) {
  console.log("delete");
  console.log(req.body.id);
  const shoe = await Product.find({ product_id: req.body.id });
  await Cart.deleteOne({
    $and: [{ customer_id: session.userid }, { prod_id: req.body.id }],
  });
  const ans = await Cart.aggregate([
    [
      {
        $lookup: {
          from: "products",
          localField: "prod_id",
          foreignField: "product_id",
          as: "result",
        },
      },
      {
        $addFields: {
          array: {
            $arrayElemAt: ["$result", 0],
          },
        },
      },
      {
        $addFields: {
          descrption: "$array.description",
          image: "$array.images.img1",
          cost: "$array.cost",
          costInValue: "$array.costInVal",
        },
      },
      {
        $match: {
          cus_id: session.userid,
        },
      },
    ],
  ]);
  console.log(ans);
  res.render("cart", { info: ans });
});

app.post("/under2k", async function (req, res) {
  const result = await Product.find({ costInVal: { $lt: 2500 } });
  res.render("shop", { info: result });
});
app.post("/under2-5k", async function (req, res) {
  const result = await Product.find({ costInVal: { $gt: 2500, $lt: 5000 } });
  res.render("shop", { info: result });
});
app.post("/under5-7k", async function (req, res) {
  const result = await Product.find({ costInVal: { $gt: 5000, $lt: 7500 } });
  res.render("shop", { info: result });
});
app.post("/under7k", async function (req, res) {
  const result = await Product.find({ costInVal: { $gt: 7500 } });
  res.render("shop", { info: result });
});

app.post("/logout", async function (req, res) {
  req.session.destroy();
  res.sendFile(path + "/index.html");
});
