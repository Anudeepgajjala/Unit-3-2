const BaseController = require("./baseController");
const VandanaPlayersModel = require("../models/vandanaPlayersModel");
class VandanaPlayers extends BaseController {
  constructor() {
    super(VandanaPlayers, VandanaPlayersModel);
  }
}
module.exports = new VandanaPlayers();
