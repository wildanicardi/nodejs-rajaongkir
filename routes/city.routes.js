const express = require('express')
const router = express.Router()
const cityController = require("../controller/city.controller")

router.get("/cities", cityController.getCity)

module.exports = router