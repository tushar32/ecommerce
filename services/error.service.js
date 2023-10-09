class ErrorHandler extends Error {
    constructor(statusCode, message) {
      super(message);
      this.statusCode = statusCode;
    }
  }

  const handleError = (err, req, res, next) => {
    const { statusCode, message } = err;
    console.log('message', message)
    if (req.xhr) {
        return res.status(statusCode).json({success: false, error: message});
    } else {
        next(err)
    }
  };

  module.exports = {
    ErrorHandler,
    handleError
  }