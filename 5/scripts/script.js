        const zero = [
            [1, 1, 1],
            [1, 0, 1],
            [1, 0, 1],
            [1, 0, 1],
            [1, 1, 1]
        ];

        const one = [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0]
        ];

        const two = [
            [1, 1, 1],
            [0, 0, 1],
            [1, 1, 1],
            [1, 0, 0],
            [1, 1, 1]
        ];

        const three = [
            [1, 1, 1],
            [0, 0, 1],
            [1, 1, 0],
            [0, 0, 1],
            [1, 1, 1]
        ];

        const four = [
            [1, 0, 1],
            [1, 0, 1],
            [1, 1, 1],
            [0, 0, 1],
            [0, 0, 1]
        ];

        const five = [
            [1, 1, 1],
            [1, 0, 0],
            [1, 1, 1],
            [0, 0, 1],
            [1, 1, 1]
        ];

        const six = [
            [1, 1, 1],
            [1, 0, 0],
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]
        ];

        const seven = [
            [1, 1, 1],
            [0, 0, 1],
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0]
        ];

        const eight = [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]
        ];

        const nine = [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1],
            [0, 0, 1],
            [0, 0, 1]
        ];

        const digitArrays = {
            0: zero,
            1: one,
            2: two,
            3: three,
            4: four,
            5: five,
            6: six,
            7: seven,
            8: eight,
            9: nine
        };
        const digitContainer = document.getElementById("digit-container");
document.addEventListener("DOMContentLoaded", function () {
    const captchaContainer = document.getElementById("captcha");
    const captchaInput = document.getElementById("captchaInput");
    const checkButton = document.getElementById("checkButton");
    const message = document.getElementById("message");
    let cap = 0;
    function generateCaptcha(digits) {
        let captcha = "";
        for (let i = 0; i < digits; i++) {
            const digit = Math.floor(Math.random() * 10); // Генеруємо випадкову цифру від 0 до 9
            captcha += digit;
        }
        cap = captcha;
        return captcha;
    }

    function renderCaptcha(digits) {
        const captchaText = generateCaptcha(digits);
        const captchaArray = captchaText.split(""); // Розділяємо кожну цифру

        captchaArray.forEach(function (digit) {
            const digitArray = digitArrays[digit];
            const digitDiv = document.createElement("div");
            digitDiv.className = "digit";

            for (let row = 0; row < digitArray.length; row++) {
                for (let col = 0; col < digitArray[row].length; col++) {
                    const span = document.createElement("span");
                    if(digitArray[row][col] === 1){
                        span.classList.add("red");
                    }
                    digitDiv.appendChild(span);
                }
                digitDiv.appendChild(document.createElement("br"));
            }

            digitContainer.appendChild(digitDiv);
        });
    }

    renderCaptcha(2); // Встановлюємо кількість цифр у CAPTCHA

    checkButton.addEventListener("click", function () {
        const enteredValue = captchaInput.value;
        const captchaValue = cap;
        if (enteredValue === captchaValue) {
            message.textContent = "Введено вірну CAPTCHA!";
        } else {
            message.textContent = "Введено невірну CAPTCHA. Спробуйте ще раз.";
        }
    });
});
