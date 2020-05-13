const db = require('../db/mysql.js');

module.exports = async (data) => {
    const { category, price, uName } = data;
    const search_category = category&&"";
    const search_price = price&&"";
    const search_uName = uName&&"";
    // const searchSQL = `SELECT * FROM vedioInfo WHERE category = "${search_category}" AND password = "${password}"`;
    const searchSQL = `SELECT * FROM vedioInfo`;
    return await db.query(searchSQL);
};

