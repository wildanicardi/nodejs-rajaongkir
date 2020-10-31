const axios = require('axios');
require('dotenv').config();

exports.getProvinces = async (req, res) => {
	try {
		const provinceId = req.query.searchKey;
		const queryParams = provinceId ? `?id=${provinceId}` : '';

		const arrayProvince = await axios.get(process.env.PROVINCE_URL + queryParams, {
			headers: {
				key: process.env.API_KEY
			}
		});

		return res.status(200).send(arrayProvince.data);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};
