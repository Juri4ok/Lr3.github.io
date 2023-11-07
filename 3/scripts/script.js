        function generateTask() {
            const num1 = Math.floor(Math.random() * 10) + 1; // Випадковий множник 1-10
            const num2 = Math.floor(Math.random() * 10) + 1; // Випадковий множник 1-10
            const correctAnswer = num1 * num2;
            const answerOptions = generateAnswerOptions(correctAnswer);
            return { num1, num2, correctAnswer, answerOptions };
        }
        
        function generateAnswerOptions(correctAnswer) {
            const options = [correctAnswer];
            while (options.length < 4) {
                const randomOption = Math.floor(Math.random() * 100) + 1;
                if (options.indexOf(randomOption) === -1) {
                    options.push(randomOption);
                }
            }
            return shuffleArray(options);
        }
        
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
        
        let currentTask = generateTask();
        let totalScore = 0;
        let isAnswered = false;
        
        // Оновлення завдання та варіантів відповіді на сторінці
        function updateTask() {
            document.getElementById("task").textContent = `Завдання: ${currentTask.num1} x ${currentTask.num2} = ?`;
            for (let i = 1; i <= 4; i++) {
                document.getElementById(`label${i}`).textContent = currentTask.answerOptions[i - 1];
            }
        }
        
        // Перевірка вибору відповіді
        function checkAnswer() {
            if (!isAnswered) {
                isAnswered = true;
                const selectedAnswer = document.querySelector('input[name="answer"]:checked');
                if (selectedAnswer) {
                    const userAnswer = parseInt(selectedAnswer.id.replace("option", ""));
                    if (userAnswer === currentTask.answerOptions.indexOf(currentTask.correctAnswer) + 1) {
                        totalScore += 1;
                        document.getElementById("result").textContent = "Правильно!";
                    } else {
                        document.getElementById("result").textContent = "Неправильно. Правильна відповідь: " + currentTask.correctAnswer;
                    }
                    document.getElementById("total-score").textContent = "Загальний рахунок: " + totalScore;
                }
            }
        }
        
        // Обробник для кнопки "Перевірити"
        document.getElementById("check-answer").addEventListener("click", function() {
            checkAnswer();
        });
        function nextTask() {
            currentTask = generateTask();
            updateTask();
            isAnswered = false;
            document.querySelector('input[name="answer"]:checked').checked = false;
            document.getElementById("result").textContent = "";
        }
        document.getElementById("next-task").addEventListener("click", function() {
            nextTask();
        });

        updateTask();

        const answerOptions = document.querySelectorAll('input[name="answer"]');
        answerOptions.forEach(function (option) {
            option.addEventListener("input", function() {
                isAnswered = false;
            });
        });