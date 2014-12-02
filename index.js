var traceur = require('traceur');
traceur.require.makeDefault();
require('traceur-source-maps').install(traceur);

console.log(require('./module').foo());
