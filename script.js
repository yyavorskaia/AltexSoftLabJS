function shuffle(array) {
    var i = 0,
        j = 0,
        temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    return array;
}

let one = shuffle(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);


let arr = [];

for (var i = 0; i < 5; i++) {
    arr.push(one[i]);
}


let select = document.getElementById("selectNumber");

for (var i = 0; i < arr.length; i++) {
    let opt = arr[i];
    let el = document.createElement("option");
    el.text = opt;
    el.value = opt;
    select.add(el);
}


function foo() {
    let out = document.querySelector('.out');

    fetch('list.json')
        .then(response => response.json())

    const filterData = (data, letter) => {
        result = data.filter(item => item.name.charAt(0) === letter)
        if (result.length === 0) {
            out.innerHTML = 'Cовпадений не обнаружено!';

        } else {
            out.innerHTML = '';

            for (let i = 0; i < result.length; i++) {
                out.innerHTML += result[i].name + '<br>';
            }
        }
        return result;
    }

    fetch("list.json")
        .then((response) => response.json())
        .then((json) => filterData(json, select.value));
}

select.onchange = foo;
