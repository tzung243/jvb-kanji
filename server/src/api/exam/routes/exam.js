

/**
 * exam router
 */

module.exports = {
  routes: [
    {
      handler: "exam.generate",
      method: "POST",
      path: "exam/generate",
    },
  ],
};
