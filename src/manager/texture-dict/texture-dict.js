const ListObj = require('./list-obj.js');
const DLinkedList = require('dlinkedlist');
const Utils = require('../../utils/utils.js');
const Logger = require('../../errors/logger.js');

function _findByName(node, resName) {
  return (node.obj.name === resName);
}

const removeResTextureByName = function (resName) {
  const node = this.findFirst(_findByName);
  if (node) {
    this.remove(node);
  } else {
    Logger.noResInTextureDict('removeResTextureArr', resName);
  }
};

class TextureDict extends DLinkedList {
  getTexture(resName) {
    const foundNode = this.findFirst(node => (node.obj.name === resName));
    if (!foundNode) {
      Logger.noResInTextureDict('getTexture', resName);
    } else {
      return foundNode.obj.texture;
    }
    return null;
  }
  getSprite(resName) {
    const texture = this.getTexture(resName);
    if (!texture) {
      Logger.noResInTextureDict('getSprite', resName);
    } else {
      return cc.Sprite.createWithTexture(texture);
    }
    return null;
  }
  // TODO resObj needs to be set
  addTexture(resources) {
    resources.forEach((resource) => {
      const resName = Utils.getNameFromResObj(resource);
      const texture = this.getTexture(resource);
      this.push(new ListObj(resName, texture));
    });
  }
  //TODO resObj needs to be set
  addTextureArr(resArr) {
    resources.forEach((resource) => {
      const resName = Utils.getNameFromResObj(resource);
      const texture = this.getTexture(resource);
      this.push(new ListObj(resName,texture));
    });
  }
  removeResTextureArr(resources){
    for (var res in resources) {
      if (resources.hasOwnProperty(res)) {
        let resName = Utils.getNameFromResObj(res);
        removeResTextureByName.call(this,name);
      }
    }
  }
  // removeAllResources(){
  //   this.removeAll();
  // }
}

module.exports = TextureDict;
