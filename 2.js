// Завдання 2. Створити колекцією товарів в кошику. 
// Кожен товар має мати ключі з різними типами даних,
// використати як значення усі типи даних, які ви вичили.
// Продемонструвати в консолі, що отримуємо.
// Undefined (непроникний),
//  Null (нульовий),
//   Boolean (логічний),
//    String (рядковий),
//     Number (числовий) 
//     і Object (об'єктний).

const beg = {

    onion: {
        name: `white onion`,
        count: 14,
        sugar: false,
        nothing:null,
        
    }

}

console.log(beg.onion.name);
console.log(beg.onion.count);
console.log(beg.onion.sugar);
console.log(beg.onion.nothing);
console.log(beg.onion.underfinded);