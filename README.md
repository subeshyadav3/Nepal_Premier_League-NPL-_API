# Nepal Premier League API V.1 -2024

## Author
Subesh Yadav


Welcome to the Nepal Premier League (NPL) API documentation! This API provides information about the NPL, including teams, matches, results, and rankings.

## Base URL

FOR LOCAL DEPLOY
```
http://localhost:3000/api
```


## Endpoints

### 1. Get All Data
**Endpoint:**
```
GET /api/npl
```
**Description:**
Retrieves all available data about the Nepal Premier League. Everything.

### 2. Get All Matches That Were Played
**Endpoint:**
```
GET /api/npl/matches
```
**Description:**
Retrieves information about all matches.

### 3. Get Match by Number
**Endpoint:**
```
GET /api/npl/matches/:matchNo
```
**Description:**
Retrieves detailed information about a specific match.
**Parameters:**
- `matchNo` (required): The number of the match you want to retrieve.

ex: /api/npl/matches/1

{
  "match1": {
    "date": "2024/11/30",
    "time": "12:15 PM",
    "match_number": 1,
    "TITLE": "BIRATNAGAR KINGS VS JANAKPUR BOLTS",
    "location": "Tribhuvan University International Cricket Ground, Kirtipur",
    "PAIRINGS": [
      "BK",
      "JKB"
    ],
    "score": [
      {
        "team": "BK",
        "runs": 127,
        "wickets": 10,
        "overs": 19
      },
      {
        "team": "JKB",
        "runs": 131,
        "wickets": 2,
        "overs": 15.3
      }
    ],
    "result": "JKB Won By 8 Wickets",
    "player_of_the_match": "Lahiru Milantha",
    "team_of_the_player": "JKB",
    "top_batter": {
      "player": "Lahiru Milantha",
      "runs": 75,
      "balls": 53,
      "fours": 9,
      "sixes": 3
    },
    "top_bowler": {
      "player": "Lalit Rajbanshi",
      "wickets": 3,
      "runs": 28,
      "overs": 4,
      "economy_rate": 7
    },
    "toss_result": "JKB won the toss and elected to field",
    "venue": "Tribhuvan University International Cricket Ground, Kirtipur",
    "third_umpire": "Bismillah Jan Shinwari (AFG)",
    "match_referee": "Mohammed Shafique (NEP)"
  }
}



### 4. Get Points Table
**Endpoint:**
```
GET /api/npl/ranking
```
**Description:**
Retrieves the current points table for the Nepal Premier League. Overall points table. Winner may be different, this is just points table.


### 5. Get Results
**Endpoint:**
```
GET /api/npl/results
```
**Description:**
Retrieves the results of all matches played.
Ex:[
  {
    "winner": "Janakpur Bolts"
  },
  {
    "runner_up": "Sudurpaschim Royals"
  },
  {
    "third_place": "Pokhara Avengers"
  }
]


### 6. Get Team by Name
**Endpoint:**
```
GET /api/npl/teams/:team
```
**Description:**
Retrieves detailed information about a specific team.
**Parameters:**
- `team` (required): Team should be shortform like JK for Janakpur Bolts
ex:
{
  "id": "JB",
  "name": "Janakpur Bolts",
  "marquee_player": "Aasif Sheikh",
  "players": [
    "Lalit Rajbanshi",
    "Anil Kumar Sah",
    "Rupesh K Singh",
    "Kishore Mahato",
    "Aakash Tripathi",
    "Shubh Kansakar",
    "Sher Malla",
    "Hemant Dhami",
    "Arniko Prasad Yadav",
    "Tul Bahadur Thapa Magar",
    "James Neesham",
    "Sohaib Maqsood",
    "Lahiru Milantha",
    "Muhammad Mohsin",
    "Joshua Tromp"
  ]
}

### 7. Get All Teams
**Endpoint:**
```
GET /api/npl/teams
```
**Description:**
Retrieves a list of all teams participating in the Nepal Premier League.



Tags and Keywords

Nepal Premier League

NPL API

Cricket API

Sports API

Express API

Node.js API

MongoDB API

Teams Information

Players Information

Match Details

Points Table

Match Results