// Instance export
"strict mode";

class Logger {
  constructor() {
    this.infoCalls = 0;
    this.warnCalls = 0;
  }
  info(message) {
    this.infoCalls++;
    console.log(`info ${this.infoCalls}: ${message}`);
  }
  warning(message) {
    this.warnCalls++;
    console.log(`warning ${this.infoCalls}: ${message}`);
  }
}

// Attenzione che questo non genera un vero Singleton
module.exports = new Logger();
