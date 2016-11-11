const textureDict = require('../../src/loaders/ios/textureDict/textureDict.js');
let testTextureDict = new textureDict();
console.log(textureDict);

describe('textureDict', () => {
  it('should fail well when empty', () => {
    expect(testTextureDict.getTexture('test')).toBeNull();
    expect(testTextureDict.getSprite('test')).toBeNull();
  });

  it('should fail well when empty', () => {
    expect(testTextureDict.getTexture('test')).toBeNull();
    expect(testTextureDict.getSprite('test')).toBeNull();
  });

  it('should fail well when empty', () => {
    expect(testTextureDict.getTexture('test')).toBeNull();
    expect(testTextureDict.getSprite('test')).toBeNull();
  });

});
