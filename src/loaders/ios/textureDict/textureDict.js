const listObj = require('./listObj.js');
const dLinkedList = require('dlinkedlist');
const utils = require('../../../utils/utils.js');
const logger = require('../../../errors/logger.js');

let findByName = function(node){
  return (node.obj.name == resName);
};

let resetTextureDict = function(tDict){
  tDict = new textureDict();
};

let removeResTextureByName = function(resName){
  let node = this.findFirst(findByName);
  if(node){
    this.remove(node);
  }
  else{
    logger.noResInTextureDict("removeResTextureArr",resName);
  }
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
  else{
    logger.noResInTextureDict("getTexture",resName);
  }
    return null;
  }
  getSprite(resName){
    var texture = this.getTexture(resName);
    if(texture){
      return cc.Sprite.createWithTexture(texture);
    }
    else{
      logger.noResInTextureDict("getSprite",resName);
    }
    return null;
  }
  //TODO resObj needs to be set
  addTexture() {
    resources.forEach((resource)=>{
      let resName = utils.getNameFromResObj(resource);
      let texture = this.getTexture(resource);
      this.push(new ListObj(resName,texture));
    });
  }
  //TODO resObj needs to be set
  addTextureArr(resArr) {
    resources.forEach((resource)=>{
      let resName = utils.getNameFromResObj(resource);
      let texture = this.getTexture(resource);
      this.push(new ListObj(resName,texture));
    });
  }
  removeResTextureArr(resources){

    for (var res in resources) {
      if (resources.hasOwnProperty(res)) {
        let resName = utils.getNameFromResObj(res);
        removeResTextureByName.call(this,name);
      }
    }
  }
  removeAllResources(){
    resetTextureDict(this);
  }
}

module.exports = textureDict; 
