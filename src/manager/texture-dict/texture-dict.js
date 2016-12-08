const ListObj = require('listobj.js');
const DLinkedList = require('dlinkedlist');
const utils = require('../../../utils/utils.js');
const logger = require('../../../errors/logger.js');

function _findByName(node) {
  return (node.obj.name === resName);
}

function _resetTextureDict(tDict){
  // tDict.applyToEveryNode(node => nodej
}

let removeResTextureByName = function(resName){
  let node = this.findFirst(_findByName);
  if(node){
    this.remove(node);
  }
  else{
    logger.noResInTextureDict("removeResTextureArr",resName);
  }
};

class TextureDict extends DLinkedList{
  constructor(){
    super();
  }
  getTexture(resName){
    let node = this.findFirst(node => (node.obj.name === resName));
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
