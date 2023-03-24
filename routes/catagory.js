const express = require('express');
const categoryModel = require('../models/CategorySchema');
const router = express.Router();
router.use(express.json());

router.post('/Category', async (req, res) => {
  try {
    const { Category , color } = req.body;
    console.log(req.body);
    const category = await categoryModel.create({
        Category: Category,
        color: color
    })
    return res.send({ data : category });
  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
});

router.get('/Category', async (req, res) => {
  try {
    const category = await categoryModel.findById({ _id: req.body._id });
    res.status(200).json({
      data: category
    })
  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
})

module.exports = router;