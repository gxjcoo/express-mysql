const vedioInfo = require('../../model/search.js')
const util = require('../../utils')
module.exports = {
 getList: async(req, res, next)=>{
  const query=req.query;
  query.price?query.price = util.str2arr(query.price):null
  let data = await vedioInfo(query)
  data&&res.send(data)
 }
}