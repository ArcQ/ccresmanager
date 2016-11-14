const textureDict = require('../../src/loaders/ios/textureDict/textureDict.js');
let testTextureDict = new textureDict();
let cctestutils = require('cctestutils');

describe('textureDict when empty', () => {
  it('should fail well', (done) => {
    expect(testTextureDict.getTexture(testRes.test)).toBeNull();
    expect(testTextureDict.getSprite(testRes.test)).toBeNull();
    expect(()=>testTextureDict.removeResTextureArr(testRes)).not.toThrow();
    expect(()=>testTextureDict.removeAllResources()).not.toThrow();
    let texture = cc.textureCache.addImage(testRes.test);
    //console.log(texture);
    done();
  });
});

let testTexture;


describe('textureDict', () => {
  beforeEach((done) => {
    // cctestutils.test.Sprite.create(testRes.test).then((initializedSprite)=>{
    //   testSprite = initializedSprite;
    //   done();
    // });
    done();
  });
  it('should be able to add texture', (done) => {
    done();
  });
  it('should be able to remove texture', (done) => {
    done();
  });
  it('should be able to add texture as a resource array', (done) => {
    done();
  });
  it('should be able to remove texture as a resource array', (done) => {
    done();
  });
  it('should be able to remove all textures at once', (done) => {
    done();
  });
});
