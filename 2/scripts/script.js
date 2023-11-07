function generateTask() {
    const num1 = Math.floor(Math.random() * 10) + 1; // Випадковий множник 1-10
    const num2 = Math.floor(Math.random() * 10) + 1; // Випадковий множник 1-10
    const correctAnswer = num1 * num2;
    return { num1, num2, correctAnswer };
}
let currentTask = generateTask();
let totalScore = 0;
function updateTask() {
    document.getElementById("task").textContent = `Завдання: ${currentTask.num1} x ${currentTask.num2} =`;
}
function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value, 10);
    if (userAnswer === currentTask.correctAnswer) {
        totalScore += 1;
        document.getElementById("result").textContent = "Правильно!";
    } else {
        document.getElementById("result").textContent = "Неправильно. Правильна відповідь: " + currentTask.correctAnswer;
    }
    document.getElementById("total-score").textContent = "Загальний рахунок: " + totalScore;
}
document.getElementById("next-task").addEventListener("click", function() {
    currentTask = generateTask();
    updateTask();
    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";
});
document.getElementById("check-answer").addEventListener("click", function() {
    checkAnswer();
});
updateTask();