var through     = require('through2');
var PluginError = require('gulp-util').PluginError;

// consts
const PLUGIN_NAME = 'gulp-mincer';

module.exports = function(env) {
  if (!env) {
    throw new PluginError(PLUGIN_NAME, 'Missing Mincer Environment.');
  }

  var obj = through.obj(function(file, enc, cb){

    var asset = env.findAsset(file.path);

    if ( file.isStream() ) {
      var stream = through();

      stream.write(asset.toString());

      file.contents = stream;
    }

    if ( file.isBuffer() ) {
      file.contents = new Buffer(asset.toString())
    }

    cb(null, file);
  });

  return obj;
}
