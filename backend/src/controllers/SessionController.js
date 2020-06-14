<<<<<<< HEAD
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email } = req.body;
    const user = await User.create({ email });

    return res.json(user);
  },
};
=======
// index, show, update, destroy

const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;
        const user = await User.create({ email });

        return res.json(user);

    }
}
>>>>>>> d0d6bf2d0993186d06507d2f8b9355e4ddb85a91
