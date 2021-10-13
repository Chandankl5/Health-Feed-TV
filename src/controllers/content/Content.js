const Channel = require("../channel/Channel");

const ContentModel = require("../../model/schema").Content;

class Content {
  constructor(info) {
    this.info = info;
  }

  async create() {
    const { info } = this;

    let channel = await Channel.findOneByName(info.channel.name);

    return ContentModel.create({ ...info, createdOn: Date.now(), modifiedOn: Date.now(), channelId: channel.id });
  }
}

module.exports = Content;
