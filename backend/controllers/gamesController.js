const Games = require("../models/gamesModel");

exports.getAllGames = async (req, res) => {
  try {
    const games = await Games.findAll();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: "Error fetching games", error });
  }
};

exports.getGamesById = async (req, res) => {
  try {
    const game = await Games.findById(req.params.id);
    if (game) {
      res.status(200).json(game);
    } else {
      res.status(404).json({ message: "Game not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching game", error });
  }
};
