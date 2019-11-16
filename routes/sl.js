var express = require('express');
var router = express.Router();
var fb = require('./../db');

const db = fb.database();

/* GET home page. */
router.get('/', function(req, res, next) {

    /*
    let sl = { area: 'asia', checked: false, speed: 20, text:'Cooper', timeLeftToBWH: '05:33:21', waterHeight: 9 };
    writeUserData(sl);
    */
    db.ref('sls').once('value').then(function (snapshot) {
        console.log(snapshot.val());
        res.json(snapshot.val());
    })
});


function writeUserData(sl) {
    db.ref('sls/' + Math.floor(Math.random() * Math.floor(1000))).set(sl);
}

module.exports = router;
