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

    // it('converts male to female', () => {
    //     const ircra = new IRCRA()
    //     const expected = { female: { group: 'Lower', level: 1 } }
    //     expect(ircra.convert('male', '1').to('female')).toEqual(JSON.stringify(expected))
    // })

    // TODO
    // it('converts female to vermin', () => {
    //     const ircra = new IRCRA()
    //     const expected = { vermin: null }
    //     expect(ircra.convert('female', '1').to('vermin')).toEqual(JSON.stringify(expected))
    // })

    it('converts vermin to font', () => {
        const ircra = new IRCRA()
        const expected = { font: '4' }
        expect(ircra.convert('vermin', 'V0').to('font')).toEqual(JSON.stringify(expected))
    })

    it('converts font to ircra', () => {
        const ircra = new IRCRA()
        const expected = { ircra: 28 }
        expect(ircra.convert('font', '8b').to('ircra')).toEqual(JSON.stringify(expected))
    })

    it('converts ircra to yds', () => {
        const ircra = new IRCRA()
        const expected = { yds: '5.12d' }
        expect(ircra.convert('ircra', 21).to('yds')).toEqual(JSON.stringify(expected))
    })

    it('converts yds to sport', () => {
        const ircra = new IRCRA()
        const expected = { sport: '7a' }
        expect(ircra.convert('yds', '5.11d').to('sport')).toEqual(JSON.stringify(expected))
    })

    it('converts sport to british', () => {
        const ircra = new IRCRA()
        const expected = { british: '5c' }
        expect(ircra.convert('sport', '6b+').to('british')).toEqual(JSON.stringify(expected))
    })

    // TODO fix duplicate
    // it('converts british to tech', () => {
    //     const ircra = new IRCRA()
    //     const expected = { tech: '6a' }
    //     expect(ircra.convert('british', '6b').to('tech')).toEqual(JSON.stringify(expected))
    // })

    // TODO fix duplicate
    // it('converts tech to ewbank', () => {
    //     const ircra = new IRCRA()
    //     const expected = { ewbank: 35 }
    //     expect(ircra.convert('tech', '7b').to('ewbank')).toEqual(JSON.stringify(expected))
    // })

    it('converts ewbank to brz', () => {
        const ircra = new IRCRA()
        const expected = { brz: '12b' }
        expect(ircra.convert('ewbank', 37).to('brz')).toEqual(JSON.stringify(expected))
    })


    it('converts brz to uiaa', () => {
        const ircra = new IRCRA()
        const expected = { uiaa: 'VIII-' }
        expect(ircra.convert('brz', '7b').to('uiaa')).toEqual(JSON.stringify(expected))
    })

    it('converts uiaa to uiaa_metric', () => {
        const ircra = new IRCRA()
        const expected = { uiaa_metric: 9.33 }
        expect(ircra.convert('uiaa', 'IX+').to('uiaa_metric')).toEqual(JSON.stringify(expected))
    })

    // TODO fix duplicate
    it('converts uiaa_metric to watts', () => {
        const ircra = new IRCRA()
        const expected = { watts: 5.75 }
        expect(ircra.convert('uiaa_metric', 11.33).to('watts')).toEqual(JSON.stringify(expected))
    })
})
