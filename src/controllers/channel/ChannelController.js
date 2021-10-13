const Channel = require("./Channel");

const ChannelController = {
  findOneBySlug: async (req, res, next) => {
    const { slug } = req.params;

    try {
      let response = await Channel.findOneBySlug(slug);

      res.send(response);
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    const channelInfo = req.body;

    try {
      let response = await new Channel(channelInfo).create();

      res.send(response);
    } catch (error) {
      next(error);
    }
  },
  subscribe: async (req, res, next) => {
    const { user_id, channel } = req.body;

    try {
      let response = await Channel.subscribe(channel, user_id);

      res.send(response);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = ChannelController;
