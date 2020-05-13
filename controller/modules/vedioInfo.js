const vedioInfo = require('../../model/search.js')
module.exports = {
 getList: async(req, res, next)=>{
  const {category, price, uName} = req.body;
  let data = await vedioInfo({category, price, uName})
  data&&res.send(data)
 }
}