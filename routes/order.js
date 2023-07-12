const express = require("express");
const Orders = require("../models/orders");
const OrdersRouter = express.Router();


// POST REQUEST TO ADD LESSONS
OrdersRouter.post("/orders/add", async (req, res) => {
  try {
    const { subject, location, price , space } = req.body;
    let orders = new Orders({ subject, location, price , space  });
    ordersData = await orders.save();
    res.json(ordersData);
    res.status(200);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});


// GET REQUEST TO GET ALL THE LESSONS FROM MONGODB 
OrdersRouter.get("/orders", async function (req, res) {
  try {
    // Retrieve all the available fields/documents in the model
    var orders = await Orders.find({});
    res.json(orders);
  } catch (error) {
    res.status(500).send(error);
  }
});


// GET LESSONS USING ID TO GET THE ONE LESSONS GIVEN BY ID
OrdersRouter.get('/orders/:id', async function (req, res) {
    try {
      // Retrieve all the available fields/documents in the model
      var orders = await Orders.findById(req.params.id)
      if(orders) res.json(orders);
    } catch (error) {
      res.status(500).send(error);
    }
  });


module.exports = OrdersRouter;
