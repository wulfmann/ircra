import IRCRA from './ircra'
import { grades } from './master'

// Base properties
test('default properties  are set', () => {
    const ircra = new IRCRA()
    expect(ircra.maps).toEqual(new Map())
})

// Get
describe('get method', () => {
    it('returns all grades in all grade sets', () => {
        const ircra = new IRCRA()
        expect(ircra.get()).toEqual(JSON.stringify(grades))
    })

    it('returns all grades in chosen grade set', () => {
        const ircra = new IRCRA()
        const expected = grades.map(grade => grade.yds)
        expect(ircra.get('yds')).toEqual(JSON.stringify(expected))
    })
})

// Convert
describe('convert method', () => {
    it('converts to chosen grade set', () => {
        const ircra = new IRCRA()
        const expected = { vermin: null }
        expect(ircra.convert('yds', '5.1').to('vermin')).toEqual(JSON.stringify(expected))
    })
})
