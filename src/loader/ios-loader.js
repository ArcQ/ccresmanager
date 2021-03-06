const utils = require('../utils/utils.js');
const createStore = require('redux').createStore;

function _create(ctrl, resource) {
  return jsb.reflection.callStaticMethod(CGLoad, createUIImage, resource);
}

class IOSLoader {
  constructor() {
    this.percentResLoaded = 0;
    this.delayedCb = 0;
    this.currentTextureCache = [];
    this.textureDict = null;
  }
  load(ctrl, key, resources, onUpdate, onFinish){
    resources.forEach((resource) => {
      this.textureDict.addTexture(this.create(ctrl,resources[i]));
    });
    onFinish.call(ctrl);
  }
  create(ctrl, resource) {
    return jsb.reflection.callStaticMethod(CGLoad, createUIImage, resource);
  }
}

module.exports = IOSLoader;
