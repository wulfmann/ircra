type GradeSetName = 'ircra' | 'vermin' | 'font' | 'yds' | 'french' | 'british' | 'tech' | 'ewbank' | 'brz' | 'uiaa' | 'uiaa_metric' | 'watts' | 'group' | 'level'
type IRCAGrades = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32

type GradeValue = string | number | null

interface GradeSet {
    ircra: IRCAGrades | IRCAGrades[] | null,
    vermin: string | string[] | null,
    font: string | string[] | null,
    yds: string | string[] | null,
    french: string | string[] | null,
    british: string | string[] | null,
    tech: string | string[] | null,
    ewbank: number | number[] | null,
    brz: string | string[] | null,
    uiaa: string | string[] | null,
    uiaa_metric: string | string[] | null,
    watts: string | string[] | null,
    group: string,
    level: {
        male: number,
        female: number
    }
}
