document.addEventListener('DOMContentLoaded', function() {
    var submit = document.getElementById('submit')
    var resultOfDraw = document.getElementById('resultOfDraw')

    var result1 = document.getElementById('result1')
    var result2 = document.getElementById('result2')

    var summary = document.getElementById('summary')

    submit.addEventListener('click', function() {
        summary.classList.remove('finished')
        var pick = document.getElementById('pick').value
        var game = whoWins(pick)
        if (game == 'Draw') {
            resultOfDraw.innerHTML = 'DRAW'
        }
        else if (game == 'Player') {
            resultOfDraw.innerHTML = "User wins!"
        }
        else {
            resultOfDraw.innerHTML = "CPU wins!"
        }
        countGames(game)
        
    })

    function CPUPlay() {
        var options = ['rock', 'paper', 'scissors']
        return options[(Math.floor(Math.random() * 3))]
    }

    function whoWins(pick) {
        result1.classList.remove('active')
        var cpu = CPUPlay()
        result1.classList.add('active')
        result2.classList.add('active')
        setTimeout(removeClasses, 500)
        
        updateImages(pick, cpu)
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

    function updateImages(pick, cpu) {
        document.getElementById('cpu-icon').src = `./assets/${cpu}.svg`
        document.getElementById('user-icon').src = `./assets/${pick}.svg`
    }

    function removeClasses() {
        result1.classList.remove('active')
        result2.classList.remove('active')
    }

    var scores = {
        "playerWins": 0,
        "cpuWins": 0,
        "draws": 0
    }
   
    function updateStats() {
    document.getElementById('wins').innerHTML = scores['playerWins']
    document.getElementById('draws').innerHTML = scores['draws']
    document.getElementById('loses').innerHTML = scores['cpuWins']
    }


    function countGames(result) {
        if (result == 'Cpu') {
            scores['cpuWins'] += 1
        }
        else if (result == 'Player') {
            scores['playerWins'] += 1
        }
        else {
            scores['draws'] += 1
        }
        updateStats()

        if (scores['cpuWins'] + scores['playerWins'] + scores['draws'] == 10) {
            summary.classList.add('finished')
            scores['cpuWins'] = 0
            scores['playerWins'] = 0
            scores['draws'] = 0
        }

    }
    
})