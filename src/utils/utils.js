let utils = {
  getNameFromResObj : (str) => {
    if(str){
      let arr = str.split('/');
      arr = arr[arr.length-1].split('.');
      return arr[0];
    }
    else{
      console.log("Err: Res String cannot be undefined in getSprite()");
    }
  }
};

module.exports = utils;
