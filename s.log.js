var S          = require('s');
var npmlog     = require('npmlog');
var npmlogfile = require('npmlog-file')

var log = {
  info    : S.curry( function( prefix, message ) { return npmlog.info( prefix, message ); } ),
  warn    : S.curry( function( prefix, message ) { return npmlog.warn( prefix, message ); } ),
  error   : S.curry( function( prefix, message ) { return npmlog.error( prefix, message ); } ),
  save    : function( filePath ) { npmlogfile.write(npmlog, filePath); },
};

exports = module.exports = log;
