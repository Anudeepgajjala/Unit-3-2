var mongoose = require("mongoose");

var vandanaPlayersSchema = mongoose.Schema({
  player_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: false,
  },
  matches: {
    type: Number,
    required: false,
  },
  runs: {
    type: Number,
    required: false,
  },
  ballsFaced: {
    type: Number,
    required: false,
  },
  battingStrikeRate: {
    type: Number,
    required: false,
  },
});

const VandanaPlayers = mongoose.model("Vandana Players", vandanaPlayersSchema);
module.exports = VandanaPlayers;
