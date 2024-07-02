const body = document.querySelector('#root');
const two = document.querySelector('#two');
const ten = document.querySelector('#ten');
const hundred = document.querySelector('#hundred');
const app = document.querySelector('#app');

body.style.width = '50vw';

two.addEventListener('click', function() {
    for (let i = 0; i < 4; i++) {
        const div = document.createElement('div');
        div.textContent = 'X';
        div.style.width =  '50%';
        div.style.height = '50vh';
        div.style.backgroundColor = 'red';
        div.style.textAlign = 'center';
        div.style.display = 'inline-block';
        body.appendChild(div);

        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = 'blue';
            console.log('X');
        })
    }
})


ten.addEventListener('click', function() {
    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div');
        div.textContent = 'X';
        div.style.width =  '10%';
        div.style.height = '10vh';
        div.style.backgroundColor = 'red';
        div.style.textAlign = 'center';
        div.style.display = 'inline-block';
        body.appendChild(div);

        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = 'blue';
            console.log('X');
        })
    }
})

hundred.addEventListener('click', function() {
    for (let i = 0; i < 10000; i++) {
        const div = document.createElement('div');
        div.style.width = '1%';
        div.style.height = '1vh';
        div.style.backgroundColor = 'red';       
        app.appendChild(div);


        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = 'blue';
            console.log('X');
        })
    }
})