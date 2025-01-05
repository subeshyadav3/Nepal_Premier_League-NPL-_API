const fs = require('fs');
const path = require('path');

// Load JSON data
const dataPath = path.join(__dirname, '../data/npl_data.json');
const nplData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Controller functions
exports.getAllData = (req, res) => {
  res.json(nplData);
};

exports.getMatches = (req, res) => {
  res.json(nplData.matches);
};

exports.getMatchNo = (req, res) => {
  const matchNo = req.params.matchNo;

  const match = nplData.matches.find((m, index) => {
    console.log("Running")
    if ((index + 1) == Number(matchNo)) {
      return m;
    }
  });
  if (match) {
    res.json(match);
  } else {
    res.status(404).send('Match not found');
  }
};

exports.getPointsTable = (req, res) => {
  res.json(nplData.points_table);
};

exports.getResults = (req, res) => {
  res.json(nplData.result);
};

exports.getTeamsName = (req, res) => {
  const teamName = req.params.team;
  const team = nplData.teams.find(t => t.id.toLowerCase() === teamName.toLowerCase());
  if (team) {
    res.json(team);
  } else {
    res.status(404).send('Team not found');
  }
};


exports.getTeams = (req, res) => {
  res.json(nplData.teams);
};