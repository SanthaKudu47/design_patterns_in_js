const ENV_VARS = {
  SYSTEM_EMAIL: "system@gmail.com",
  SYSTEM_SMS_ENDPOINT: "+1112121212121",
  SYSTEM_PUSH_ENDPOINT: "PUSH_END",
};

function loadFromEnv(name) {
  return ENV_VARS[name];
}

const notificationCenter = {
  options: {
    email: loadFromEnv("SYSTEM_EMAIL"),
  },

  email: function (from, to, message) {
    console.log("Sent Email");
    console.log("From->", from, "|=====|", "TO->", to);
  },

  triggerNotification: function (type, to, message) {
    const implementation = notificationCenter[type];
    const from = notificationCenter.options[type];
    if (!implementation) return;
    implementation(from, to, message);
  },
};

module.exports = {notificationCenter,loadFromEnv};
