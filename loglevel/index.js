const log = require('loglevel');

const logLevel = process.env.NODE_ENV === 'production' ? 'warn' : 'debug';
log.setLevel(logLevel);


// Log messages at different levels
log.trace('This is a trace message');
log.debug('This is a debug message');
log.info('This is an info message');
log.warn('This is a warning message');
log.error('This is an error message');