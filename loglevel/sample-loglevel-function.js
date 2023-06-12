// @ts-check
const log = require('loglevel');

// @ts-ignore
const env = process.env;

const originalFactory = log.methodFactory;

function methodFactory(prefixMessage) {
  return function (methodName, logLevel, loggerName) {
    var rawMethod = originalFactory(methodName, logLevel, loggerName);
    return function (message) {
      const logMessage = `${prefixMessage}: ${message}`;
      rawMethod(logMessage);
    };
  };
}

module.exports = (loggerName) => {
  const logLevel = env?.NODE_ENV === 'production' ? 'warn' : 'debug';
  const prefixMessage = `[${new Date().toISOString()}] ${loggerName}`;
  
  log.setLevel(logLevel);
  log.methodFactory = methodFactory(prefixMessage);
  
  const logger = log.getLogger(loggerName);
  return logger;
};
