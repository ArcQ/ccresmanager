const ListObj = require('./list-obj.js');
const Utils = require('../../utils/utils.js');
const Logger = require('../../errors/logger.js');
const require('immutable');

function _findByName(node, resName) {
  return (node.obj.name === resName);
}

const _removeResTextureByName = function (resName) {
  const node = this.findFirst(_findByName);
  if (node) {
    this.remove(node);
  } else {
    Logger.noResInTextureDict('removeResTextureArr', resName);
  }
};

const _getTexture = function (resName) {
  const foundNode = this.findFirst(node => (node.obj.name === resName));
  if (!foundNode) {
    Logger.noResInTextureDict('getTexture', resName);
  } else {
    return foundNode.obj.texture;
  }
  return null;
};

class TextureDict extends  {
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
  addTexture(resource) {
    resources.forEach((resource) => {
      const resName = Utils.getNameFromResObj(resource);
      const texture = this.getTexture(resource);
      this.push(new ListObj(resName, texture));
    });
  }
  removeResTextures(key) {
    for (const res in resources) {
      if (resources.hasOwnProperty(res)) {
        const resName = Utils.getNameFromResObj(res);
        _removeResTextureByName.call(this, resName);
      }
    }
  }
}

module.exports = TextureDict;
