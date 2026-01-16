// let nowDate = new Date();
// console.log(nowDate);

// const week = ["일", "월", "화", "수", "목", "금", "토"];

// let month = nowDate.getMonth() + 1;
// let date = nowDate.getDate();
// let day = nowDate.getDay();
// let hours = nowDate.getHours(); // 0-24
// let minutes = nowDate.getMinutes(); // 0-59

// console.log(`${month}월 ${date}일 ${week[day]}요일`);
// console.log(`${hours}:${minutes}`);

// ------ Date 객체

const inputElement = document.getElementById("input");

inputElement.addEventListener("mouseover", () => {
  console.log(inputElement.value);
});

const selectElement = document.getElementById("color");
const resultElement = document.getElementById("result");

selectElement.addEventListener("change", () => {
  resultElement.textContent = selectElement.value;
});

selectElement.addEventListener("change", () => {
  console.log(selectElement.value);
});

// ------ 입력 폼 활용하기
