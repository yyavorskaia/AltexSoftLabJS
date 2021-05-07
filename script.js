let result = '';

function makeid(length) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}

makeid(5);

let arr = result.split('');
let select = document.getElementById("selectNumber");

for (var i = 0; i < arr.length; i++) {
    let opt = arr[i];
    let el = document.createElement("option");
    el.text = opt;
    el.value = opt;
    select.add(el);
}


function foo() {

    fetch('list.json')
        .then(response => response.json())
        .then(json => console.log(json))

    const filterData = (data, letter) => {
        result = data.filter(item => item.name.charAt(0) === letter)
        if (result.length === 0) {
            console.log('Cовпадений не обнаружено!');
        } else {
            console.log('result: ', result);
        }
        return result;
    }

    fetch("list.json")
        .then((response) => response.json())
        .then((json) => filterData(json, select.value));


    console.log(select.value);
}

select.onchange = foo;
