const express = require('express')
const Mock = require('mockjs')
const apiRoutes = express.Router()
const getRangeDate = require('../../utils/getRangeDate')
const { Random } = Mock

const randomDate = ({ start = '2019-02-01', end = '2019-03-05' }) => {
	const dates = getRangeDate(start, end, 0)
	return dates.map(date => {
		return {date, value: Random.natural(1000,5000)}
	})
}

apiRoutes.post('/dashborad/getTopChart', function (req, res) {
	res.json({
		status: 200,
		message: '返回成功',
		data: Mock.mock({
			'salesVolume': Mock.mock({
				'totalAmount|200000-600000.0-3': 200000,
				'increasePercent|0-100': 50,
				'reducePercent|0-100': 50,
				'currentAmount|1000-5000.0-3': 2000
			}),
			'trafficVolume': {
				totalAmountList: randomDate({}),
				increasePercentList: randomDate({}),
				reducePercentList: randomDate({}),
				currentAmountList: randomDate({}) 
			}
		})
	})
})

module.exports = apiRoutes