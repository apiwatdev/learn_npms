const log = require('loglevel');
const originalFactory = log.methodFactory;

// Override the default logging methods with customMethodFactory
log.methodFactory = function (methodName, logLevel, loggerName) {
  var rawMethod = originalFactory(methodName, logLevel, loggerName);

  return function (message) {
      rawMethod("Newsflash: " + message + ":" +loggerName);
  };
};

const loggerName = 'MyLogger';
const logger = log.getLogger(loggerName);

// Set the log level and log messages using the custom methods
logger.setLevel('debug');
logger.debug('This is a debug message');
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');