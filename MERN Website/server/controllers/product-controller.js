const Product = require("../models/products-model");

exports.addProduct = async (req, res) => {
  try {
    const { title, description, price, image } = req.body;

    if (!title || !description || !price || !image) {
      return res.status(400).json({
        msg: "Title , Description , Price & Image is required !",
        ok: false,
      });
    }

    const product = new Product({
      title,
      description,
      price,
      image,
    });

    const newProduct = await product.save();

    if (!newProduct) {
      return res.status(400).json({
        msg: "Error while adding new product !",
        ok: false,
      });
    }

    res.status(201).json({
      msg: "New Product Added !",
      ok: true,
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server error in addProduct !",
      err: error.message,
      ok: false,
    });
  }
};
