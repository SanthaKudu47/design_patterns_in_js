const typesOfLogs = {
  console: "CONSOLE",
  file: "FILE",
  remote: "REMOTE",
  debug: "DEBUG",
};

function getLogMessage(message, type) {
  const logType = typesOfLogs[type] ?? "UNKNOWN";
  return `LOG:::${logType}:::||==|${message}|==||${new Date().toISOString()}`;
}

const logManager = {
  console: function (message) {
    const msg = getLogMessage(message, "console");
    console.log(msg);
  },
  file: function (message) {
    const msg = getLogMessage(message, "file");
    console.log(msg);
  },
  remote: function (message) {
    const msg = getLogMessage(message, "remote");
    console.log(msg);
  },
  debug: function (message) {
    const msg = getLogMessage(message, "debug");
    console.log(msg);
  },
};

module.exports = logManager;
