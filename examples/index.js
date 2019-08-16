import IRCRA from 'ircra'

const ircra = new IRCRA()

// Convert Grade
const test = ircra.load('yds', '5.3').to('vermin')
console.log(test) // {"vermin":null}

// Load all grades
const all = ircra.load()
console.log(all) // [{...}...]

// Load all grades for certain grade type
console.log(ircra.load('yds'))
// [...]