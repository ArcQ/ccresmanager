module.exports = {
  noResInTextureDict:(invokingMethod, resname) => {
    cc.warn('During ' + invokingMethod + '(), no res with name ' + resname +' found.');
  }
};
