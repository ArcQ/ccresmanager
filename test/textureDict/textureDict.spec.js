const textureDict = require('../../src/loaders/ios/textureDict/textureDict.js');
let testTextureDict = new textureDict();
let cctestutils = require('cctestutils');

describe('textureDict when empty', () => {
  it('should fail well', () => {
    expect(testTextureDict.getTexture(testRes.test)).toBeNull();
    expect(testTextureDict.getSprite(testRes.test)).toBeNull();
    expect(testTextureDict.removeResTexture(testRes)).not.toThrow();
    expect(testTextureDict.resetAllResources()).not.toThrow();
  });
});

describe('textureDict', () => {
  beforeEach((done) => {
    cctestutils.test.Sprite.create(testRes.test).then((done)=>{
      done();
    });
  });
  it('should be able to add texture', () => {
  });
  it('should be able to remove texture', () => {
  });
  it('should be able to add texture as a resource array', () => {
  });
  it('should be able to remove texture as a resource array', () => {
  });
  it('should be able to remove all textures at once', () => {
  });
});
