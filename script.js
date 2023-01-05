document.addEventListener('DOMContentLoaded', function() {
    var submit = document.getElementById('submit')
    var resultOfDraw = document.getElementById('resultOfDraw')
    var playerWins = 0
    var cpuWins = 0
    var draws = 0

    submit.addEventListener('click', function() {
        var pick = document.getElementById('pick').value
        var game = whoWins(pick)
        if (game == 'Draw') {
            resultOfDraw.innerHTML = 'Draw'
        }
        else if (game == 'Player') {
            resultOfDraw.innerHTML = "WIN!"
        }
        else {
            resultOfDraw.innerHTML = "LOST!"
        }
        countGames(game)
    })

    function CPUPlay() {
        var options = ['rock', 'paper', 'scissors']
        return options[(Math.floor(Math.random() * 3))]
    }

    function whoWins(pick) {
        var cpu = CPUPlay()
        document.getElementById('cpu-played').innerHTML = cpu
        console.log(pick, cpu)
        if (pick == cpu) {
            return 'Draw'
        }
        else if (pick == 'rock' && cpu == 'scissors') {
            return 'Player'
        }
        else if (pick == 'scissors' && cpu == 'paper') {
            return 'Player'
        }
        else if (pick == 'paper' && cpu == 'rock') {
            return 'Player'
        }
        return 'Cpu'
    }

    var writeWins = document.getElementById('wins')
    var writeDraws = document.getElementById('draws')
    var writeLoses = document.getElementById('loses')
    
    function countGames(result) {
        writeWins.innerHTML = ""
        writeDraws.innerHTML = ""
        writeLoses.innerHTML = ""
        if (result == 'Cpu') {
            cpuWins++
        }
        else if (result = 'Draw') {
            draws++
        }
        else {
            playerWins++
        }

        if (playerWins + cpuWins + draws == 10) {
            writeWins.innerHTML = 'Wins: ' + playerWins
            writeDraws.innerHTML = 'Draws: ' + draws
            writeLoses.innerHTML = 'Loses : ' + cpuWins
            playerWins = 0
            draws = 0
            cpuWins = 0
        }
    }
    
})