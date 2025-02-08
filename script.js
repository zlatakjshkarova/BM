let elem1 = document.getElementById('elem1');

let elem2 = document.getElementById('elem2');

let elem3 = document.getElementById('elem3');

elem1.addEventListener('click', () => {
    console.log('зеленый')
})

elem2.addEventListener('click', () => {
    console.log('голубой');
    Event.stopPropagation()
})
elem2.addEventListener('click', (event) => {
    console.log('голубой');
    event.stopImmediatePropagation()
})

elem3.addEventListener('click', () => {
    console.log('красный')

})

let parent = document.querySelector('#parent')
let button = document.querySelector('#button')
let block = document.querySelector('#block')

button.addEventListener('click', (event) => {
    block.classList.add('active')
    //ОТМЕНЯЕМ всплытия при клике на кнопку
    // Если этого не сделать то при клике на кнопку сработает событие на родителя
    event.stopPropagation()


})

parent.addEventListener('click', () => {
    block.classList.remove('active')
})



//при клике remove удаление
//event.stopImmediatePropagation()-полностью остонавлевает
//Метод event.stopPropagation()-остановка всплытия



elem1.addEventListener('click', (event) => {


    console.log(event.target);

})

//дегирование
let list = document.querySelector("#list");

list.addEventListener('click', (event) => {
    console.log(event.target)
    //проверяет есть такой клас есть или нет toggle,вот вскопках проверяет
    event.target.classList.remove('color', event.target.text)

})

при toggle он оставляет цвет или меняет



