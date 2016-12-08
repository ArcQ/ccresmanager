// loader bridge for different devices

const IosLoader = require('./iosloader.js');
const WebLoader = require('./webloader.js');

module.exports = (cc.sys.os === 'iOS') ? new IosLoader() : new WebLoader();
