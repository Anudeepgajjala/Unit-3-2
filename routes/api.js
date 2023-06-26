var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");

const vandanaPlayersController = require("../controllers/vandanaPlayersController");

router.post("/insert-player", async (req, res) => {
  data = req.body;
  data.player_id = uuidv4();
  vandanaPlayersController.create(data, (err, response) => {
    if (err) {
      return res.send({ response: err });
    }
    res.send({
      response: response,
    });
  });
});

router.post("/update-player", (req, res) => {
  let data = req.body;
  vandanaPlayersController.findOneAndUpdate(
    { player_id: req.body.player_id },
    data,
    (err, response) => {
      if (err) {
        return res.send({ response: err });
      }
      res.send({
        response: response,
      });
    }
  );
});

router.get("/find-player/:id", (req, res) => {
  vandanaPlayersController.find(
    { player_id: req.params.id },
    (err, response) => {
      if (err) {
        return res.send({ response: err });
      }
      res.json({
        response: response,
      });
    }
  );
});

router.delete("/delete-player/:id", (req, res) => {
  vandanaPlayersController.findOneAndRemove(
    { player_id: req.params.id },
    (err, response) => {
      if (err) {
        return res.send({ response: err });
      }

      res.send({
        response: response,
      });
    }
  );
});

router.get("/find-all-players", (req, res) => {
  vandanaPlayersController.find({}, (err, response) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: response,
    });
  });
});

router.get("/who-played-least-matches", (req, res) => {
  baseController
    .find({})
    .sort({ matches: 1 })
    .limit(1)
    .exec((err, response) => {
      if (err) {
        return res.send({ response: err });
      }

      res.json({
        response: response,
      });
    });
});
router.get("/players-list-by-runs", (req, res) => {
  baseController
    .find({})
    .sort({ runs: -1 })
    .exec((err, response) => {
      if (err) {
        return res.send({ response: err });
      }

      res.json({
        response: response,
      });
    });
});
router.get("/who-scored-highest-runs", (req, res) => {
  baseController
    .find({})
    .sort({ runs: -1 })
    .limit(1)
    .exec((err, response) => {
      if (err) {
        return res.send({ response: err });
      }

      res.json({
        response: response,
      });
    });
});
router.get("/who-faced-more-balls", (req, res) => {
  baseController
    .find({})
    .sort({ ballsFaced: -1 })
    .limit(1)
    .exec((err, response) => {
      if (err) {
        return res.send({ response: err });
      }

      res.json({
        response: response,
      });
    });
});

router.get("/who-is-having-least-batting-strike-rate", (req, res) => {
  baseController
    .find({})
    .sort({ battingStrikeRate: 1 })
    .limit(1)
    .exec((err, response) => {
      if (err) {
        return res.send({ response: err });
      }

      res.json({
        response: response,
      });
    });
});

module.exports = router;
