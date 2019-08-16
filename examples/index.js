import IRCRA from 'ircra'

const ircra = IRCRA()
const test = ircra.load('yds', '5.3').to('vermin')

console.log(test) // {"vermin":null}