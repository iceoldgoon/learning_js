// template string
const title = 'Rastamojka qachon ochiladi?! Yohud Monopoliya Respublikasi !';
const author = "Lag'mon markazi";
const likes = 3500000;

// concatenation way

// let result = 'Bu post nomi ' + title + '  ' + author + ' tomonidan yozilgan.' + 'va bu post ' + likes + ' ta like bor.';
//
// console.log(result);

// template string way
//
// let result = `Bu post nomi ${title}  ${author} tomonidan yozilgan. va bu post ${likes} ta like bor.`;
//
// console.log(result);

let result = `
    <h2>${title}</h2>
    <p>Written by ${author}</p>
    <span>This post has ${likes} likes</span>
`

console.log(result)