const cctestutils = require('cctestutils');

const spriteTest = cctestutils.test.Sprite;

describe('cc library object', () => {
  beforeAll((done) => {
    cctestutils.startup.addCanvas();
    cctestutils.startup.ccstart(done);
  });

  it('should be the cocos2d library object', () => {
    const sceneObj = {
      onEnter: () => undefined,
      update: dt => dt,
    };

    expect(cc).toBeDefined();
    expect(cc.Scene.extend(sceneObj)).toBeDefined();
  });

  it('should be able to return a sprite', (done) => {
    const tSprite = new cc.Sprite(testRes.test);

    spriteTest.checkEquals(tSprite, testRes.test).then((isSprite) => {
      expect(isSprite).toBe(true);
      done();
    }).catch(
      (err) => {
        expect(err).toBeNull();
        done();
      });
  });
});

