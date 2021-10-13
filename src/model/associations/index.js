const User = require("../schema").User;
const Channel = require("../schema").Channel;
const Content = require("../schema").Content;

// Many to Many Association
User.belongsToMany(Channel, { through: "Subscription" });
Channel.belongsToMany(User, { through: "Subscription" });

// One to Many Association
Channel.hasMany(Content);
Content.belongsTo(Channel);
