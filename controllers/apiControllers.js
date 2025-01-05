const fs = require('fs');
const path = require('path');

// getting the json file i've not used any database here, can be used in future for better performance
const dataPath = path.join(__dirname, '../data/npl_data.json');
const nplData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// functions to get data from json file and send it to the client as response 
// there is no need to create different functions for each route, we can use a single function to get all the data
// but for better understanding i've created different functions for each route

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