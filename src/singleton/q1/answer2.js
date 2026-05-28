const { notificationCenter, loadFromEnv } = require("./notificationManager.js");
console.log("Current Options", notificationCenter.options);
notificationCenter.triggerNotification(
  "email",
  "user@gmail.com",
  "Hello User1 Good Morning",
);

//registering new SMS notifications implementation,
notificationCenter.options["sms"] = loadFromEnv("SYSTEM_SMS_ENDPOINT");
function smsImplementation(from, to, message) {
  console.log("Sent SMS");
  console.log("From->", from, "|=====|", "TO->", to);
}

notificationCenter.sms = smsImplementation;//this will be shared form now on/
notificationCenter.triggerNotification(
  "sms",
  "+7569865214858",
  "Hello User Good Morning",
);

//Push notification implementation.
notificationCenter.options["push"] = loadFromEnv("SYSTEM_PUSH_ENDPOINT");
function pushImplementation(from, to, message) {
  console.log("Sent Push");
  console.log("From->", from, "|=====|", "TO->", to);
}
notificationCenter.push = pushImplementation;
notificationCenter.triggerNotification(
  "push",
  "Don't KNOW HOW THE PUSH RECEIVERS ID.DEVICE IS MAY BE",
  "Hello User Good Morning",
);
//like this we can do whatsapp too.


