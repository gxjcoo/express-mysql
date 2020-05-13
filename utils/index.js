//get查询条件转对象
const parseQuery = function (query) {
 let reg = /([^=&\s]+)[=\s]*([^&\s]*)/g;
 let obj = {};
 while (reg.exec(query)) {
     obj[RegExp.$1] = RegExp.$2;
 }
 return obj;
}

//字符串转数组
const str2arr = function (str) {
 let arr = str.split(',')
 return arr;
}
module.exports = {
 parseQuery,
 str2arr
}