function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateMathExamples(count) {
    const operators = ['+', '-', '*', '/'];
    const examples = [];

    for (let i = 0; i < count; i++) {
        const num1 = getRandomInt(1, 20);
        const num2 = getRandomInt(1, 20);
        const operator = operators[getRandomInt(0, operators.length - 1)];
        
        if (operator === '/' && num2 === 0) {
            num2 = 1; 
        }

        examples.push({ expression: `${num1} ${operator} ${num2}`, answer: eval(`${num1} ${operator} ${num2}`) });
    }

    return examples;
}

function checkAnswers(examples) {
    examples.forEach(example => {
        const userAnswer = prompt(`Решите пример: ${example.expression}`);
        if (parseFloat(userAnswer) === example.answer) {
            alert(`Ваш ответ верный - ${userAnswer}`);
        } else {
            alert(`Ваш ответ не верный - ${userAnswer}. Правильный ответ - ${example.answer}!`);
        }
    });
}


function main() {
    const count = parseInt(prompt("Введите количество примеров, которые вы хотите решить:"), 10);
    if (isNaN(count) || count <= 0) {
        alert("Пожалуйста, введите корректное число.");
        return;
    }

    const examples = generateMathExamples(count);
    checkAnswers(examples);
}


main();