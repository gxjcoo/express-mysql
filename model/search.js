const db = require('../db/mysql.js');

module.exports = async (data) => {
    const { category, price, uName } = data;
    const search_category = category||"";
    const search_price = price||[0,10000];
    const search_uName = uName||"";
    console.log(search_uName,search_price,search_category)
    // uName like %%${search_uName}%% AND category like %%${search_category}%% AND
    const searchSQL = `SELECT * FROM vedioInfo WHERE uName like N'%${search_uName}%' AND category like '%${search_category}%' AND price > ${search_price[0]} AND price < ${search_price[1]};`;
    let a  = await db.query(searchSQL)
    console.log(a)
    return await db.query(searchSQL);
};

