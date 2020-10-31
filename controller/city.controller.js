const axios = require('axios');
require('dotenv').config();

exports.getCity = async (req, res) => {
	try {
		const cityId = req.query.searchKey;
		const queryParams = cityId ? `?id=${cityId}` : '';

		const arrayCity = await axios.get(process.env.CITY_URL + queryParams, {
			headers: {
				key: process.env.API_KEY
			}
		});

		return res.status(200).send(arrayCity.data);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};
