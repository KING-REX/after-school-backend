const validateRequestBody = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        error: "Invalid arguments!",
        issues: result.error.issues.map((issue) => ({ path: issue.path.join("."), message: issue.message })),
      });
    }

    req.body = result.data;
    next();
  };
};

module.exports = validateRequestBody;
