var inputValue = document.getElementById('goal')
var btn = document.getElementById('add-btn')
var list = document.getElementById('list')

function addGoal(){
    console.log(inputValue.value);
    if(inputValue === ''){
        alert("Please enter a value")
    }else{
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(inputValue.value));
        list.appendChild(li);
    }
    inputValue.value = ''
}

btn.addEventListener('click',addGoal)
