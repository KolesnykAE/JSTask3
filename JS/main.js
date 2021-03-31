// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"

    let textContent = document.getElementById('content');
    console.log(textContent);

// b) отримує текст з блоку з id "rules"

    let textRul = document.getElementById('rules');
    console.log(textRul);

// c) замініть текст параграфа з id 'content' на будь-який інший

    textContent.innerText = 'Сегодня будем рассмастривать правила Бойцовского клуба!'

// d) замініть текст параграфа з id 'rules' на будь-який інший

    textRul.innerHTML = 'Ниже представлены основные четыре правила Бойцовского клуба:'

// e) змініть кожному елементу колір фону на червоний

    textContent.style.backgroundColor = "red";
    textRul.style.backgroundColor = 'red';

// f) змініть кожному елементу колір тексту на синій

    textContent.style.color = 'blue';
    textRul.style.color = 'blue';

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log

    console.log(textRul.classList);

// h) отримати всі елементи з класом fc_rules

    let classFc = document.getElementsByClassName('fc_rules');
    console.log(classFc);

// i) поміняти колір тексту у всіх елементів fc_rules на червоний

    for (let i = 0; i < classFc.length; i++) {
        classFc[i].style.color = 'red';
    }

// 2) За допомоги циклу проітерувати  масив users,
// записати кожного юзера в свій блок за допомоги document.createElement.
// Вставити цей блок на сторінку

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

    // for (let i = 0; i < users.length; i++) {
    //     let user = users[i];
    //     let userInfo = document.createElement('div');
    //     let address = '';
    //     for (const addressKey in user.address) {
    //         address = address + " " + user.address[addressKey];
    //     }
    //     userInfo.innerHTML = `name ${user.name} - age ${user.age} - status ${user.status} - address ${address}`
    //     document.body.appendChild(userInfo);
    // }

// 3) За допомоги циклу проітерувати  масив users,
// записати кожного юзера в свій блок за допомоги document.createElement.
// Блок з адресою зробити окремим блоком, з блоками для кожної властивості

    for (let i = 0; i < users.length; i++) {
        let item = users[i];
        let user = document.createElement('div');
        let address = document.createElement("div");

        for (const addrElement in item.address) {
            let userAd = document.createElement("p");
            userAd.innerHTML = item.address[addrElement];
            address.appendChild(userAd);
        }

        user.innerText = `name ${item.name} - age ${item.age} - status ${item.status}`
        user.appendChild(address);
        document.body.appendChild(user);
    }
