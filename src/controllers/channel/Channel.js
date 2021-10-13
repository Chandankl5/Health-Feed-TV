const ChannelModel = require("../../model/schema").Channel;
const UserModel = require("../../model/schema").User;

const User = require("../user/User");

class Channel {
  constructor(info) {
    this.info = info;
  }

  static async findOneById(id) {
    return ChannelModel.findOne({ where: { id } });
  }

  static async findOneBySlug(slug) {
    return ChannelModel.findOne({ where: { slug } });
  }

  static async findOneByName(name) {
    return ChannelModel.findOne({ where: { name } });
  }

  async create() {
    const { info } = this;

    return ChannelModel.create({
      ...info,
      createdOn: Date.now(),
    });
  }

  static async subscribe(channelInfo, user_id) {
    let user = await User.findOneById(user_id);

    let channel = await this.findOneById(channelInfo.id);

    return channel.addUser(user);
  }

  static async addContent(content, channel_id) {
    let channel = await this.findOneById(channel_id);

    return channel.addContent(content);
  }
}

module.exports = Channel;
