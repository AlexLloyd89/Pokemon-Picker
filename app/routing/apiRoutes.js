var pokeData = require("../data/friends.js");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(pokeData)
    })

    app.post('/api/friends', function (req, res) {
        var newPokemon = req.body;
        var match;

        for (var i = 0; i < newPokemon.scores.length; i++) {
            if (newPokemon.scores[i] == "1 (Strongly Disagree)") {
                newPokemon.scores[i] = 1;
            } else if (newPokemon.scores[i] == "5 (Strongly Agree)") {
                newPokemon.scores[i] = 5;
            } else {
                newPokemon.scores[i] = parseInt(newPokemon.scores[i]);
            }
        }

        var bestMatch = 0;
        var difference = 40;

        for (var i = 0; i < pokeData.length; i++) {
            var totalDifference = 0;

            for (var index = 0; index < pokeData[i].scores.length; index++) {
                var differenceOneScore = Math.abs(pokeData[i].scores[index] - newPokemon.scores[index]);
                totalDifference += differenceOneScore;
            }
            if (totalDifference < difference) {
                bestMatch = i;
                difference = totalDifference;
            }
        }
        match = pokeData[bestMatch];
        //below line would be useful for having a friend-finder application. Since I only want users to be able to select from 3 pre-defined Pokemon however, I'm leaving this part commented out.
        // pokeData.push(newPokemon);
        res.json(match)
        console.log(newPokemon)
    });
};