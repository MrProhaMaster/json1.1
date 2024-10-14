let deadCount = 0;
let lostCount = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function updateStatus() {
    document.getElementById('dead').textContent = deadCount;
    document.getElementById('lost').textContent = lostCount;
}

function resetGame() {
    deadCount = 0;
    lostCount = 0;
    updateStatus();
    showRandomMole();
}

function showRandomMole() {
    const holes = document.querySelectorAll('.hole');
    holes.forEach(hole => hole.classList.remove('hole_has-mole'));

    const randomIndex = Math.floor(Math.random() * holes.length);
    holes[randomIndex].classList.add('hole_has-mole');
}

document.querySelectorAll('.hole').forEach((hole, index) => {
    hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
            deadCount++;
        } else {
            lostCount++;
        }
        updateStatus();

        if (deadCount >= 10) {
            alert("Вы победили!");
            resetGame();
        } else if (lostCount >= 5) {
            alert("Вы проиграли!");
            resetGame();
        } else {
            showRandomMole();
        }
    });
});

resetGame();