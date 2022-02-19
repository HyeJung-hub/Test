const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const clearBtn = document.querySelector('.footer__button-clear');

function onAdd() {
    // 1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }
    // 2. 새로운 아이템을 만듦 ( 텍스트 + 삭제 버튼)
    const item = createItem(text);
    // 3. items 컨테이너안에 새로 만든 아이템을 추가한다
    items.appendChild(item);
    // 4. 인풋을 초기화 한다.
    input.value = '';
    input.focus();
}

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'items__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const span = document.createElement('span');
    span.setAttribute('class', 'item__name');
    span.innerText = text;
    span.style.textDecoration = 'none';

    const bundle = document.createElement('div');
    bundle.setAttribute('class', 'btnBundle');

    const checkBtn = document.createElement('button');
    checkBtn.setAttribute('class', 'item__check');
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkBtn.addEventListener('click', () => {
        if (span.style.textDecoration === 'none') {
            span.style.textDecoration = 'line-through';
            span.style.color = '#b8b8b8';
            checkBtn.style.color = '#91dfa8';
        }
        else {
            span.style.textDecoration = 'none';
            span.style.color = 'black';
            checkBtn.style.color = 'black';
        }
    })

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    // <i></i>는 변동될 일 없으므로 
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider')

    bundle.appendChild(checkBtn);
    bundle.appendChild(deleteBtn);

    item.appendChild(span);
    item.appendChild(bundle);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;
}

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        onAdd();
    }
});

clearBtn.addEventListener('click', () => {
    const itemRow = document.querySelectorAll('.items__row');
    for (let i = 0; i < itemRow.length; i++) {
        items.removeChild(itemRow[i]);
    }
    console.log('click');
});

