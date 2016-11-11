let utils = require('../utils.js');

class IOSLoader{
  constructor(){
    this.percentResLoaded = 0;
    this.delayedCb = 0;
    this.currentTextureCache = [];
    this.textureDict = null;
  }
  load(ctrl,key,resources,onUpdate,onFinish){
    resources.forEach((resource)=>{
      var resName = utils.getNameFromResObj(resources[i]);
      var texture = cc.UIImageToTextureConverter.create(resName);     
      var listObj = {name:resName,key:key,texture:texture};
      this.textureDict.push(listObj);
    });
    onFinish.call(ctrl);
  }
}

module.exports = IOSLoader;








