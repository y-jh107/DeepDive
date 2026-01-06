const users = {
    name: [],
    age: []
}

const form = document.querySelector('form');
const result = document.querySelector('.result');
const avgAge = document.querySelector('.avg-age');

function calculateAvgAge() {
    const sum = users.age.reduce((acc, cur) => acc + cur, 0);
    return sum / users.age.length;
}

function handleEvent(e) {
    e.preventDefault();

    const nameInput = e.target.name.value;
    const ageInput = e.target.age.value;
    const user = document.createElement('dl');

    users.name.push(nameInput);
    users.age.push(Number(ageInput));
    user.textContent = `이름: ${nameInput}, 나이: ${ageInput}`;

    console.log(users);

    avgAge.textContent = Number(calculateAvgAge());

    result.appendChild(user);

    e.target.reset();
}

form.addEventListener('submit', handleEvent);