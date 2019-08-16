
interface Gender {
    group: string,
    level: number
}

interface Grade {
    male: Gender,
    female: Gender,
    vermin: null|string,
    font: null|string,
    ircra: number,
    yds: string,
    sport: string,
    british: null|string,
    tech: null|string,
    ewbank: number,
    brz: string,
    uiaa: string,
    uiaa_metric: number,
    watts: null|number,
    [key:string]:any
}

export const grades: Array<Grade> = [
    {
        male: {
            group: 'Lower',
            level: 1
        },
        female: {
            group: 'Lower',
            level: 1
        },
        vermin: null,
        font: null,
        ircra: 1,
        yds: '5.1',
        sport: '1',
        british: null,
        tech: '2',
        ewbank: 4,
        brz: 'I sup',
        uiaa: 'I',
        uiaa_metric: 1.00,
        watts: null
    },
    {
        male: {
            group: 'Lower',
            level: 1
        },
        female: {
            group: 'Lower',
            level: 1
        },
        vermin: null,
        font: null,
        ircra: 2,
        yds: '5.2',
        sport: '2',
        british: '3',
        tech: '2',
        ewbank: 6,
        brz: 'II',
        uiaa: 'II',
        uiaa_metric: 2.00,
        watts: null
    },
    {
        male: {
            group: 'Lower',
            level: 1
        },
        female: {
            group: 'Lower',
            level: 1
        },
        vermin: null,
        font: null,
        ircra: 3,
        yds: '5.3',
        sport: '2+',
        british: '3',
        tech: null,
        ewbank: 8,
        brz: 'II sup',
        uiaa: 'III',
        uiaa_metric: 3.00,
        watts: null
    },
    {
        male: {
            group: 'Lower',
            level: 1
        },
        female: {
            group: 'Lower',
            level: 1
        },
        vermin: null,
        font: null,
        ircra: 4,
        yds: '5.4',
        sport: '3-',
        british: '3',
        tech: '4',
        ewbank: 8,
        brz: 'III',
        uiaa: 'III+',
        uiaa_metric: 3.5,
        watts: null
    },
    {
        male: {
            group: 'Lower',
            level: 1
        },
        female: {
            group: 'Lower',
            level: 1
        },
        vermin: null,
        font: null,
        ircra: 5,
        yds: '5.5',
        sport: '3',
        british: '3',
        tech: '4',
        ewbank: 10,
        brz: 'IV',
        uiaa: 'IV',
        uiaa_metric: 4.00,
        watts: null
    },
    {
        male: {
            group: 'Lower',
            level: 1
        },
        female: {
            group: 'Lower',
            level: 1
        },
        vermin: null,
        font: null,
        ircra: 6,
        yds: '5.6',
        sport: '3+',
        british: null,
        tech: '4',
        ewbank: 12,
        brz: 'V',
        uiaa: 'V-',
        uiaa_metric: 4.66,
        watts: 0.00
    },
    {
        male: {
            group: 'Lower',
            level: 1
        },
        female: {
            group: 'Lower',
            level: 1
        },
        vermin: null,
        font: null,
        ircra: 7,
        yds: '5.7',
        sport: '4',
        british: null,
        tech: '4',
        ewbank: 14,
        brz: 'V',
        uiaa: 'V',
        uiaa_metric: 5.00,
        watts: 0.25
    },
    {
        male: {
            group: 'Lower',
            level: 1
        },
        female: {
            group: 'Lower',
            level: 1
        },
        vermin: null,
        font: null,
        ircra: 8,
        yds: '5.8',
        sport: '4+',
        british: '5a',
        tech: '4',
        ewbank: 14,
        brz: 'V sup',
        uiaa: 'V+',
        uiaa_metric: 5.33,
        watts: 0.50
    },
    {
        male: {
            group: 'Lower',
            level: 1
        },
        female: {
            group: 'Lower',
            level: 1
        },
        vermin: 'VB',
        font: '<2',
        ircra: 9,
        yds: '5.9',
        sport: '5',
        british: '5a',
        tech: null,
        ewbank: 16,
        brz: 'V sup',
        uiaa: 'VI-',
        uiaa_metric: 5.66,
        watts: 0.75
    },

    // INTERMEDIATE
    {
        male: {
            group: 'Intermediate',
            level: 2
        },
        female: {
            group: 'Intermediate',
            level: 2
        },
        vermin: null,
        font: null,
        ircra: 10,
        yds: '5.10a',
        sport: '5+',
        british: '5a',
        tech: '5b',
        ewbank: 18,
        brz: 'VI',
        uiaa: 'VI',
        uiaa_metric: 6.00,
        watts: 1.00
    },
    {
        male: {
            group: 'Intermediate',
            level: 2
        },
        female: {
            group: 'Intermediate',
            level: 2
        },
        vermin: 'V0-',
        font: '3',
        ircra: 11,
        yds: '5.10b',
        sport: '6a',
        british: '5c',
        tech: '5b',
        ewbank: 19,
        brz: 'VI',
        uiaa: 'VI+',
        uiaa_metric: 6.33,
        watts: 1.25
    },
    {
        male: {
            group: 'Intermediate',
            level: 2
        },
        female: {
            group: 'Intermediate',
            level: 2
        },
        vermin: 'V0',
        font: '4',
        ircra: 12,
        yds: '5.10c',
        sport: '6a+',
        british: '5c',
        tech: '5b',
        ewbank: 19,
        brz: 'VI sup',
        uiaa: 'VII-',
        uiaa_metric: 6.66,
        watts: 1.50
    },
    {
        male: {
            group: 'Intermediate',
            level: 2
        },
        female: {
            group: 'Intermediate',
            level: 2
        },
        vermin: 'V0+',
        font: '4+',
        ircra: 13,
        yds: '5.10d',
        sport: '6b',
        british: '5c',
        tech: '6a',
        ewbank: 20,
        brz: 'VI sup',
        uiaa: 'VII',
        uiaa_metric: 7.00,
        watts: 1.75
    },
    {
        male: {
            group: 'Intermediate',
            level: 2
        },
        female: {
            group: 'Intermediate',
            level: 2
        },
        vermin: 'V1',
        font: '5',
        ircra: 14,
        yds: '5.11a',
        sport: '6b+',
        british: '5c',
        tech: '6a',
        ewbank: 21,
        brz: '7a',
        uiaa: 'VII',
        uiaa_metric: 7.00,
        watts: 2.00
    },
    {
        male: {
            group: 'Intermediate',
            level: 2
        },
        female: {
            group: 'Advanced',
            level: 3
        },
        vermin: 'V2',
        font: '5+',
        ircra: 15,
        yds: '5.11b',
        sport: '6c',
        british: '6b',
        tech: '6a',
        ewbank: 22,
        brz: '7b',
        uiaa: 'VIII-',
        uiaa_metric: 7.66,
        watts: 2.25
    },
    {
        male: {
            group: 'Intermediate',
            level: 2
        },
        female: {
            group: 'Advanced',
            level: 3
        },
        vermin: 'V2',
        font: '6a',
        ircra: 16,
        yds: '5.11c',
        sport: '6c+',
        british: '6b',
        tech: '6a',
        ewbank: 22,
        brz: '7b',
        uiaa: 'VIII-',
        uiaa_metric: 7.66,
        watts: 2.50
    },
    {
        male: {
            group: 'Intermediate',
            level: 2
        },
        female: {
            group: 'Advanced',
            level: 3
        },
        vermin: 'V3',
        font: '6b',
        ircra: 17,
        yds: '5.11d',
        sport: '7a',
        british: '6b',
        tech: '6a',
        ewbank: 23,
        brz: '7c',
        uiaa: 'VIII',
        uiaa_metric: 8.00,
        watts: 2.75
    },
    {
        male: {
            group: 'Advanced',
            level: 3
        },
        female: {
            group: 'Advanced',
            level: 3
        },
        vermin: 'V4',
        font: '6b+',
        ircra: 18,
        yds: '5.12a',
        sport: '7a+',
        british: '6b',
        tech: '6c',
        ewbank: 24,
        brz: '8a',
        uiaa: 'VIII+',
        uiaa_metric: 8.33,
        watts: 3.00
    },
    {
        male: {
            group: 'Advanced',
            level: 3
        },
        female: {
            group: 'Advanced',
            level: 3
        },
        vermin: 'V5',
        font: '6c',
        ircra: 19,
        yds: '5.12b',
        sport: '7b',
        british: '6b',
        tech: '6c',
        ewbank: 25,
        brz: '8b',
        uiaa: 'IX-',
        uiaa_metric: 8.66,
        watts: 3.25
    },
    {
        male: {
            group: 'Advanced',
            level: 3
        },
        female: {
            group: 'Advanced',
            level: 3
        },
        vermin: 'V6',
        font: '7a',
        ircra: 20,
        yds: '5.12c',
        sport: '7b+',
        british: '6b',
        tech: '6c',
        ewbank: 26,
        brz: '8c',
        uiaa: 'IX-',
        uiaa_metric: 8.66,
        watts: 3.50
    },
    {
        male: {
            group: 'Advanced',
            level: 3
        },
        female: {
            group: 'Elite',
            level: 4
        },
        vermin: 'V7',
        font: '7a+',
        ircra: 21,
        yds: '5.12d',
        sport: '7c',
        british: '6b',
        tech: '6c',
        ewbank: 27,
        brz: '9a',
        uiaa: 'IX',
        uiaa_metric: 9.00,
        watts: 3.75
    },
    {
        male: {
            group: 'Advanced',
            level: 3
        },
        female: {
            group: 'Elite',
            level: 4
        },
        vermin: 'V8',
        font: '7b',
        ircra: 22,
        yds: '5.13a',
        sport: '7c+',
        british: '7a',
        tech: '6c',
        ewbank: 28,
        brz: '9b',
        uiaa: 'IX+',
        uiaa_metric: 9.33,
        watts: 4.00
    },
    {
        male: {
            group: 'Advanced',
            level: 3
        },
        female: {
            group: 'Elite',
            level: 4
        },
        vermin: 'V8',
        font: '7b+',
        ircra: 23,
        yds: '5.13b',
        sport: '8a',
        british: '7a',
        tech: '6c',
        ewbank: 29,
        brz: '9c',
        uiaa: 'X-',
        uiaa_metric: 9.66,
        watts: 4.25
    },
    {
        male: {
            group: 'Elite',
            level: 4
        },
        female: {
            group: 'Elite',
            level: 4
        },
        vermin: 'V9',
        font: '7c',
        ircra: 24,
        yds: '5.13c',
        sport: '8a+',
        british: '7a',
        tech: '6c',
        ewbank: 30,
        brz: '10a',
        uiaa: 'X',
        uiaa_metric: 10.00,
        watts: 4.50
    },
    {
        male: {
            group: 'Elite',
            level: 4
        },
        female: {
            group: 'Elite',
            level: 4
        },
        vermin: 'V10',
        font: '7c+',
        ircra: 25,
        yds: '5.13d',
        sport: '8b',
        british: '7a',
        tech: null,
        ewbank: 31,
        brz: '10b',
        uiaa: 'X',
        uiaa_metric: 10.00,
        watts: 4.75
    },
    {
        male: {
            group: 'Elite',
            level: 4
        },
        female: {
            group: 'Elite',
            level: 4
        },
        vermin: 'V11',
        font: '8a',
        ircra: 26,
        yds: '5.14a',
        sport: '8b+',
        british: '7a',
        tech: null,
        ewbank: 32,
        brz: '10c',
        uiaa: 'X+',
        uiaa_metric: 10.33,
        watts: 5.00
    },
    {
        male: {
            group: 'Elite',
            level: 4
        },
        female: {
            group: 'Higher Elite',
            level: 5
        },
        vermin: 'V12',
        font: '8a+',
        ircra: 27,
        yds: '5.14b',
        sport: '8c',
        british: '7a',
        tech: '7b',
        ewbank: 33,
        brz: '11a',
        uiaa: 'XI-',
        uiaa_metric: 10.66,
        watts: 5.25
    },
    {
        male: {
            group: 'Higher Elite',
            level: 5
        },
        female: {
            group: 'Higher Elite',
            level: 5
        },
        vermin: 'V13',
        font: '8b',
        ircra: 28,
        yds: '5.14c',
        sport: '8c+',
        british: '7a',
        tech: '7b',
        ewbank: 34,
        brz: '11b',
        uiaa: 'XI',
        uiaa_metric: 11.00,
        watts: 5.50
    },
    {
        male: {
            group: 'Higher Elite',
            level: 5
        },
        female: {
            group: 'Higher Elite',
            level: 5
        },
        vermin: 'V14',
        font: '8b+',
        ircra: 29,
        yds: '5.14d',
        sport: '9a',
        british: null,
        tech: '7b',
        ewbank: 35,
        brz: '11c',
        uiaa: 'XI+',
        uiaa_metric: 11.33,
        watts: 5.75
    },
    {
        male: {
            group: 'Higher Elite',
            level: 5
        },
        female: {
            group: 'Higher Elite',
            level: 5
        },
        vermin: 'V14',
        font: '8b+',
        ircra: 30,
        yds: '5.15a',
        sport: '9a+',
        british: null,
        tech: '7b',
        ewbank: 36,
        brz: '12a',
        uiaa: 'XI+',
        uiaa_metric: 11.33,
        watts: 6.00
    },
    {
        male: {
            group: 'Higher Elite',
            level: 5
        },
        female: {
            group: 'Higher Elite',
            level: 5
        },
        vermin: 'V15',
        font: '8c',
        ircra: 31,
        yds: '5.15b',
        sport: '9b',
        british: null,
        tech: '7b',
        ewbank: 37,
        brz: '12b',
        uiaa: 'XII-',
        uiaa_metric: 11.66,
        watts: 6.25
    },
    {
        male: {
            group: 'Higher Elite',
            level: 5
        },
        female: {
            group: 'Higher Elite',
            level: 5
        },
        vermin: 'V16',
        font: '8c+',
        ircra: 32,
        yds: '5.15c',
        sport: '9b+',
        british: null,
        tech: '7b',
        ewbank: 38,
        brz: '12c',
        uiaa: 'XII',
        uiaa_metric: 12.00,
        watts: 6.50
    }
]
