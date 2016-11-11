const listObj = require('./listObj.js');
const dLinkedList = require('dlinkedlist');
const utils = require('../../../utils/utils.js');

let findByName = function(node){
  return (node.obj.name == resName);
};

let resetTextureDict = function(tDict){
  tDict = new TextureDict();
};

let removeResTextureByName = function(resName){
  let node = this.findFirst(findByName);
  cc.TextureCache.getInstance().removeTexture(node.obj.texture);
  this.remove(node);
};

class textureDict extends dLinkedList{
  constructor(){
    super();
  }
  getTexture(resName){
    let node = this.findFirst(findByName);
    if(node){
      return node.obj.texture;
    }
    return null;
  }
  getSprite(resName){
    var texture = this.getTexture(resName);
    if(texture){
      return cc.Sprite.createWithTexture(texture);
    }
    return null;
  }
  //TODO resObj needs to be set
  addTexture(key,resObj) {
    resources.forEach((resource)=>{
      let resName = utils.getNameFromResObj(resource);
      let texture = this.getTexture(resource);
      this.push(new ListObj(key,resName,texture));
    });
  }
  removeResTextures(resources){
    resources.forEach((res) => {
      let resName = utils.getNameFromResObj(res);
      this.removeResTextureByName(name);
    });
  }
  removeAllResources(){
    cc.TextureCache.getInstance().removeAllTextures();
    resetTextureDict(this);
  }
}

module.exports = textureDict; 
