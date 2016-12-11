const TextureDict = require('./texture-dict/texture-dict.js');
const Loader = require('../loader/loader.js');

const _loadedKeysArr = [];

let _resDict = new TextureDict();

function _isKeyAdded(key) {
  if (_loadedKeysArr.filter(val => val === key).length > 0) return true;
  return false;
}

function _addKey(key) {
  _loadedKeysArr.push(key);
}

const Manager = {
  loadResources: (key, resources, isShowAnimation, cb) => {
    if (!_isKeyAdded(key)) {
      _addKey(key);
      Loader.load(key, resources, isShowAnimation, cb);
    } else {
      cc.warn('Resources for key already added');
    }
  },
  getSprite: resName => _resDict.getSprite(resName),
  removeAllResources: () => {
    _resDict = new TextureDict();
  },
  removeResTextures: (key) => {
    _resDict.removeResTextures(key);
  },
};

module.exports = Manager;
