const textureDict = require('./texture-dict/texture-dict.js');

let Manager = {

};

module.exports = Manager;
// let resloaderctrl = require('./resloaderctrl.es6');
// let texturedict = require('./texturedict.es6'); 
// let resmanager = {
//     loaderctrl:null,
//     texturedict:null,
//     loadedkeysarr:null
// };
//
// //private
// resmanager.loadedkeysarr = [];
// resmanager.texturedict = new texturedict();
//
// resmanager.loaderctrl = new resloaderctrl(resmanager.texturedict);
//
// resmanager.addkey = function(key){
//     resmanager.loadedkeysarr[resmanager.loadedkeysarr.length] = key;
// };
//
// resmanager.iskeyadded = function(key){
//     for( var i = 0; i < resmanager.loadedkeysarr.length; i++ ) {
//         if (key == resmanager.loadedkeysarr[i]){
//             return true;
//         }
//     }
//     return false;
// };
//
// //public
//
// //resloader does not track what resources have been loaded or deleted, so avoid loading assets of the same name without removing it first
// resmanager.loadresources = function(key,resources,isshowanimation,cb){
//     if(!resmanager.iskeyadded(key)){
//         resmanager.addkey(key,resources);
//         resmanager.loaderctrl.loadresources(key,resources,isshowanimation,cb);
//     }
// };
//
// resmanager.resettexturedict = function(){
//     resmanager.texturedict.removeallresources();
//     resmanger.texturedict = null;
//     resmanager.texturedict = new texturedict();
// };
//
// window.resmanager = resmanager;
// module.exports = resmanager;
