# 📘 Singleton vs Node Module Cache

Understanding the difference between **Node’s module cache** and the **Singleton pattern** is essential for writing predictable, maintainable backend code.  
This document explains the distinction clearly and concisely.

---

## 🔥 1. Core Difference

### Node cache controls execution
- Node loads a module **once**
- Executes it **once**
- Stores the result in the **module cache** store the exports
- All future imports return the **cached export**
- Purpose: **performance + speed**

### Singleton controls shared state
- A Singleton is when a module **exports shared mutable state**
- All imports receive the **same object reference**
- Purpose: **architecture + design**

---

## 📊 2. Comparison Table

| Concept | Node Module Cache | Singleton Pattern |
|--------|-------------------|-------------------|
| **Who controls it?** | Node.js | You (the developer) |
| **Runs code once?** | ✔️ Yes | ❌ Not the point |
| **Shares exports?** | ✔️ Yes | ✔️ Yes |
| **Shared state?** | ❌ Only if you export mutable state | ✔️ Always |
| **Purpose** | Performance, speed | Architecture, design |
| **Can be stateless?** | ✔️ Yes | ❌ No |
| **Is every module a Singleton?** | ❌ No | ❌ Only if you design it |

---

## 🧠 3. What Is Shared State?

**Shared state = a value created once and reused everywhere because all imports point to the same object in memory.**

Shared state exists only when the exported value is **mutable**, such as:

- objects  
- arrays  
- class instances  
- functions with attached properties  

If the exported value is **stateless** (pure function, primitive), then there is **no shared state**, even though the module is cached.

---

## 🧩 4. Function Exports and Shared State

A function becomes shared state **only if you attach mutable properties** to it.

Example:

```js
function add(a, b) {
  return a + b;
}

add.count = 0; // shared state
module.exports = add;
