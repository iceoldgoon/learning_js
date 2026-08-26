let ism = prompt('Ismingizni kiriting')

let brinchiHarf = ism.charAt(0).toUpperCase()
let davomi = ism.substring(1).toLowerCase()
let result = brinchiHarf.concat(davomi)

alert(`Salom, ${result}`)