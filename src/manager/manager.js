const TextureDict = require('./texture-dict/texture-dict.js');
const Loader = require('../loader/loader.js');

const loadedKeysArr = [];

let _resDict = new TextureDict();

function _isKeyAdded(key) {
  if (loadedKeysArr.filter(val => val === key).length > 0) return true;
  return false;
}

const Manager = {
  loadResources: (key, resources, isShowAnimation, cb) => {
    if (!_isKeyAdded(key)) {
      Manager.addkey(key, resources);
      Loader.loadresources(key, resources, isShowAnimation, cb);
    } else {
      cc.warn('Resources for key already added');
    }
  },
  removeAllResources: () => {
    _resDict = new TextureDict();
  },
  removeResTextures: (resources) => {
    _resDict.removeResTexture(resources);
  },
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
// resmanager.texturedict = new texturedict();
//
// resmanager.loaderctrl = new resloaderctrl(resmanager.texturedict);
//
// resmanager.addkey = function(key){
//     resmanager.loadedkeysarr[resmanager.loadedkeysarr.length] = key;
// };
//
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
