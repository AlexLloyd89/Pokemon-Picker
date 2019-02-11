<div align="center">
<a href="https://mighty-anchorage-59445.herokuapp.com/"><img src="https://dumielauxepices.net/sites/default/files/drawn-pokeball-green-567123-6351456.jpg"></a>
</div>

# Pokemon Picker

> A short quiz that will determine which starter Pokemon is right for you

> Please note there will be a short delay when launching the application through Heroku

> Pokemon, survey, full stack, Node, JavaScript, Express

The Application uses the following algorithm to determine the correct starter Pokemon for the user based off of the user's answers to the questions 
```javascript
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
        //below line would push the user's answers into the Pokemon array. Since I only want users to be able to select from 3 pre-defined Pokemon however, I'm leaving this part commented out.
        // pokeData.push(newPokemon);
        res.json(match)
        console.log(newPokemon)
    });
```
**The following was used to build this application**

- JavaScript
- Express
- Node.JS
- Bootstrap
- CSS
- HTML


