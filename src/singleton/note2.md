# 📘 Class‑Based Singleton — Core Notes (Sections 1–5)

## 🔥 1. The Core Idea

A class‑based Singleton ensures your application creates **only one instance** of a class, and every part of the app uses that same instance.  
This is useful when you need:

- One shared resource  
- One shared state  
- One global access point  
- One instance that should never be duplicated  

Examples: logger, DB connection, config loader, cache client.

---

## 🧩 2. Exporting the Instance (Simplest Singleton)

When you export an already‑created instance, Node caches that instance.  
Every import receives the **same object**, guaranteeing Singleton behavior automatically.

This approach is simple and ideal for:

- Config  
- Logger  
- Database client  
- Cache manager  

Because the instance itself is cached, no other part of the app can create a second instance.

---

## 🧩 3. Exporting the Class (Still a Singleton)

When you export the **class**, Node caches the **class definition**, not the instance.  
Each file that imports the class can call `new Logger()`, but the constructor enforces the Singleton:

- First call → constructor creates the instance and stores it in a static property  
- Next calls → constructor returns the stored instance immediately  

This works because:

> **Static properties live on the class, and the class itself is cached by Node.**

So all files share the same `Logger.instance`.

---

## 🧠 4. Why Prototype Methods Are Never Lost

Prototype attachment happens **before** the constructor runs:

1. JavaScript creates an empty object  
2. It attaches `Logger.prototype` to it  
3. It binds `this` to that object  
4. Then it runs the constructor  

So even if the constructor returns early (because the instance already exists), the returned instance still has:

- All prototype methods  
- All class behavior  

Nothing is lost, because the instance was originally created using `new Logger()`.

---

## 📊 5. Export Instance vs Export Class (Comparison)

| Concept | Export Instance | Export Class |
|--------|-----------------|--------------|
| What is cached? | The instance | The class |
| Who enforces Singleton? | Node module cache | Constructor logic |
| Can multiple instances be created? | ❌ No | ✔️ Yes (if constructor is wrong) |
| Prototype methods available? | ✔️ Yes | ✔️ Yes |
| Static properties shared? | ✔️ Yes | ✔️ Yes |
| Best for | Simple apps | Flexible/testable apps |

---

## 🔁 Quick Actions

- **[Review Singleton mental model](ca://s?q=Explain_Singleton_mental_model)**  
- **[Review constructor execution order](ca://s?q=Explain_constructor_execution_order)**  
- **[Review prototype chain basics](ca://s?q=Explain_prototype_chain_basics)**  
