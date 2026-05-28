const SYSTEM_EMAIL = "system@gmail.com";
const SYSTEM_SMS_ENDPOINT = "+1112121212121";

function sendNotifications(
  type = "email",
  options = {
    from: "system@gmail.com",
    to: "user@gmail.com",
    message: "Hi User Welcome",
  },
) {
  const from = options.from ?? SYSTEM_EMAIL;
  const { message, to } = options;

  if (type === "email") {
    //each have different implementation.
    console.log(`Sent Email From ${from} To ${to}`);
    console.log(message);
  }

  if (type === "push") {
    console.log(`Sent Push From ${from} To ${to}`);
    console.log(message);
  }

  if (type === "SMS") {
    console.log(`Sent SMS From ${from} To ${to}`);
    console.log(message);
  }

  if (type === "WhatsApp") {
    console.log(`Sent WhatsApp message From ${from} To ${to}`);
    console.log(message);
  }
}

sendNotifications("email");
sendNotifications("push", {
  from: SYSTEM_EMAIL,
  to: "user2 push id",
  message: "Hello from system ,This is Push notification",
});
sendNotifications("SMS", {
  from: SYSTEM_SMS_ENDPOINT,
  to: "user3_contact_number",
  message: "Hello from system ,This is SMS notification",
});
sendNotifications("WhatsApp", {
  from: SYSTEM_SMS_ENDPOINT,
  to: "user3_contact_number",
  message: "Hello from system ,This is WhatsApp notification",
});
