/**
 * Created by gaoying on 2017/11/3.
 */

var get = require('../tools/promis').get;

module.exports = {

    getData:function(){
        var url ='http://10.132.20.14:8083/mockjsdata/62/getData';
        return get(url);
    }
};

