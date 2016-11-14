module.exports = {
  noResInTextureDict:(invokingMethod,resname)=>{
    console.warn("During " + invokingMethod + "(), no res with name " + resname +" found.");
  }
};
