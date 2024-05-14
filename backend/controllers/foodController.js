import foodModel from "../models/foodModel.js";
import fs from "fs";

// Create a new food item

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food item added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error: Failed to add food item" });
  }
};

// View all food items
const listFood = async (req, res) => {
  try {
    const food = await foodModel.find({});
    res.json({ success: true, data: food });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error: Failed to get food list" });
  }
};

// Remove a food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    const imagePath = `uploads/${food.image}`;
    if (!food) {
      return res
        .status(404)
        .json({ success: false, message: "Error: Food item not found" });
    }
    fs.unlink(imagePath, () => {});

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food item deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error: Failed to delete food item" });
  }
};
export { addFood, listFood, removeFood };
