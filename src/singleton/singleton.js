//1. Module Singleton (Recommended)

export const config = {
  db: "mongodb://localhost",
  port: 3000,
};

//class based

class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance; // return existing instance
    }

    this.logs = [];           // instance state
    Logger.instance = this;   // store instance
  }

  log(msg) {
    this.logs.push(msg);
    console.log("LOG:", msg);
  }
}

//3. Closure‑Based Singleton


const createStore = (()=>{
  let instance=null;
  return function(){
    if(instance) return instance;
    instance = {
      logs:[]
    }

    return instance;
  }
})()


export const store = createStore();
module.exports = store;

export const logger = new Logger();
module.exports = logger;
