const buttons = document.querySelectorAll('button');

const info = document.querySelector('.info');
const hobbies = document.querySelector('.hobby-list');
const likes = document.querySelector('.likes-list');

const hobbyItems = document.querySelectorAll('.hobby-list__item')
const likesItems = document.querySelectorAll('.likes-list__item')

const header = document.querySelector('header');
let hoverCount = 0;

header.addEventListener('mouseenter', () => {
    hoverCount++;

    if (hoverCount % 2 === 1) {
        console.log('헤더 배경 색 변경(홀수)');
        header.style.backgroundColor = 'lightgreen';
    } else {
        console.log('헤더 배경 색 변경(짝수)');
        header.style.backgroundColor = 'lightskyblue';
    }

})

function handleBtnEvent(e) {
    const btn = e.target;

    if (btn.classList.contains('info-btn')) {
        console.log('자기소개 display 활성화');
        info.style.display = 'block';
    } else if (btn.classList.contains('hobby-btn')) {
        console.log('취미 display 활성화');
        hobbies.style.display = 'block';
    } else if (btn.classList.contains('likes-btn')) {
        console.log('좋아하는 것 display 활성화');
        likes.style.display = 'block';
    } else if (btn.classList.contains('hobby-list-btn')) {
        console.log('취미 글자 색 변경')
        hobbyItems.forEach(item => {
            item.style.color = 'red';
            item.style.textDecoration = 'underline';
        });
    } else if (btn.classList.contains('likes-list-btn')) {
        console.log('좋아하는 것 글자 색 변경')
        likesItems.forEach(item => {
            item.style.color = 'green';
            item.style.fontWeight = 'bold';
        });
    }
}

buttons.forEach(btn => {
    btn.addEventListener('click', handleBtnEvent);
})