class CustomError {
  constructor(message, status, log) {
    this.type = "custom_err";
    this.status = status;
    this.message = message;
    if (log) {
      console.error(message);
    }
  }
}

module.exports = { CustomError };
