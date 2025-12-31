// let val;

// val = document;

// val = document.baseURI; // 웹 페이지의 절대 URI 반환
// val = document.head // <head> 태그 반환
// val = document.body // <body> 태그 반환

// val = document.forms // <form> 태그 반환
// val = document.forms[0].id // <form>의 id 반환
// val = document.forms[0].classList // <form>의 클래스 리스트 반환
// val = document.forms[0].className // <form>의 클래스 이름 반환

// val = document.scripts; // <script> 태그 반환
// val = document.scripts[0].getAttribute('src');

const headerContainer = document.getElementById('header-container');
// headerContainer.style.display = 'none';

// console.log(headerContainer);

headerContainer.textContent = 'Text Content';
headerContainer.innerText = 'Inner Text';
headerContainer.innerHTML = '<span>Inner HTML</span>';

console.log(document.querySelector('#form-first-div'));
console.log(document.querySelector('.form-container'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'blue';

const items = document.getElementsByClassName('list-group-item');
console.log(items);

items[0].style.color = 'blue';
items[3].textContent = 'Hi';

let lists = document.getElementsByTagName('li');

// lists.forEach((list) => {
//     console.log(list);
// }); Collection 객체는 forEach 사용 불가

lists = Array.from(lists);

lists.forEach((list, index) => {
    list.textContent = `${index}. List`
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');

liOdd.forEach((li) => {
    li.style.background = 'gray';
});