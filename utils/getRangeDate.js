// startDate: 计划开始时间； endDate：计划结束时间；dayLength：每隔几天，0-代表每天，1-代表日期间隔一天
function getDateStr(startDate, endDate, dayLength) {
	var str = [startDate];
	for (var i = 0 ;; i++) {
		var getDate = getTargetDate(startDate, dayLength);
		startDate = getDate;
		if (getDate <= endDate) {
			str.push(getDate)
		} else {
			break;
		}
	}
	return str
}

// startDate: 开始时间；dayLength：每隔几天，0-代表获取每天，1-代表日期间隔一天
function getTargetDate(date,dayLength) {
	dayLength = dayLength + 1;
    var tempDate = new Date(date);
    tempDate.setDate(tempDate.getDate() + dayLength);
    var year = tempDate.getFullYear();
    var month = tempDate.getMonth() + 1 < 10 ? "0" + (tempDate.getMonth() + 1) : tempDate.getMonth() + 1;
    var day = tempDate.getDate() < 10 ? "0" + tempDate.getDate() : tempDate.getDate();
    return year + "-" + month + "-" + day;
}

module.exports = getDateStr