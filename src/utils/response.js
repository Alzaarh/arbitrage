export default {
  success: (res, data, status = 200) => res.status(status).json({ statusCode: status, data }),

  error: (res, message, status) => res.status(status).json({ statusCode: status, error: message }),
};
