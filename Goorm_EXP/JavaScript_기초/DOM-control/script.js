const buttons = document.querySelectorAll('button');

const info = document.querySelector('.info');
const hobbies = document.querySelector('.hobby-list');
const likes = document.querySelector('.likes-list');

const hobbyItems = document.querySelectorAll('.hobby-list__item')
const likesItems = document.querySelectorAll('.likes-list__item')

function handleBtnEvent(e) {
    const btn = e.target;

    if (btn.classList.contains('info-btn')) {
        console.log('자기소개 display 활성화');
        info.style.display = 'block';
    } else if (btn.classList.contains('hobby-btn')) {
        hobbies.style.display = 'block';
    } else if (btn.classList.contains('likes-btn')) {
        likes.style.display = 'block';
    } else if (btn.classList.contains('hobby-list-btn')) {
        hobbyItems.forEach(item => {
            item.style.color = 'red';
            item.style.textDecoration = 'underline';
        });
    } else if (btn.classList.contains('likes-list-btn')) {
        likesItems.forEach(item => {
            item.style.color = 'green';
            item.style.fontWeight = 'bold';
        });
    }
}

buttons.forEach(btn => {
    btn.addEventListener('click', handleBtnEvent);
})