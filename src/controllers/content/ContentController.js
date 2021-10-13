const Content = require("./Content");

const ContentController = {
  create: async (req, res, next) => {
    const contentInfo = req.body;

    try {
      let response = await new Content(contentInfo).create();

      res.send(response);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = ContentController;
