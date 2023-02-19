const reactionTitle = document.getElementById('reaction-title');
const recScore = document.getElementById('rec-score');

const memoryTitle = document.getElementById('memory-title');
const memScore = document.getElementById('mem-score');

const verbalTitle = document.getElementById('verbal-title');
const vbScore = document.getElementById('vb-score');

const visualTitle = document.getElementById('visual-title');
const vsScore = document.getElementById('vs-score')

const totalScore = document.getElementById('total-score');

fetch('./data.json')
    .then(response => response.json())
    .then(json => {
        updateReaction(json[0].category, json[0].score);
        updateMemory(json[1].category, json[1].score);
        updateVerbal(json[2].category, json[2].score);
        updateVisual(json[3].category, json[3].score);

        let totalScore = (json[0].score + json[1].score + json[2].score + json[3].score) / json.length;
        updateTotal(totalScore);
    });


function updateReaction(title, value) {
    reactionTitle.innerHTML = title;
    recScore.innerHTML = value;
}

function updateMemory(title, value) {
    memoryTitle.innerHTML = title;
    memScore.innerHTML = value;
}

function updateVerbal(title, value) {
    verbalTitle.innerHTML = title;
    vbScore.innerHTML = value;
}

function updateVisual(title, value) {
    visualTitle.innerHTML = title;
    vsScore.innerHTML = value;
}

function updateTotal(value) {
    totalScore.innerHTML = Math.floor(value);
}



