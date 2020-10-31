const express = require('express')
const router = express.Router()
const provinceController = require("../controller/provinces.controller")

router.get("/provinces", provinceController.getProvinces)

module.exports = router