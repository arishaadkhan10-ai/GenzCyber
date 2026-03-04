// Compatibility wrapper so older bundlers that don't honor
// package.json "exports" can resolve this subpath.
//
// Delegate to the compiled ES module.
module.exports = require('../es/enhance-user-content')
module.exports.default = module.exports

