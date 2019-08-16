import IRCRA from 'ircra'

const ircra = IRCRA()

// Convert Grade
const test = ircra.load('yds', '5.3').to('vermin')
console.log(test) // {"vermin":null}

// Load all grades
const all = ircra.all()
console.log(all) // [{...}...]
