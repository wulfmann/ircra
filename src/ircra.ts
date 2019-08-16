'use strict'

import { grades } from './master'

class Classification {
    index: Map<any, any>
    grade: string

    constructor (index: Map<any, any>, grade: string) {
        if (!(grade)) {
            throw new Error('grade is required')
        }
        this.index = index
        this.grade = grade
        return this
    }

    public to (gradeType: string) {
        const result = grades[this.index.get(this.grade)][gradeType]
        return JSON.stringify({ [gradeType]: result })
    }
}

export default class IRCRA  {
    maps: Map<any, any>
    supportedTypes: string[] = [
        'male',
        'female',
        'vermin',
        'font',
        'ircra',
        'yds',
        'sport',
        'british',
        'tech',
        'ewbank',
        'brz',
        'uiaa',
        'uiaa_metric',
        'watts'
    ]

    constructor () {
        this.maps = new Map()
        return this
    }

    public static all () {
        return JSON.stringify(grades)
    }

    public load (gradeType: string, grade: string) {
        if (gradeType in this.supportedTypes) {
            throw new Error(`${gradeType} is unsupported`)
        }
        if (!(this.maps.has(gradeType))) {
            let map = this.maps.set(gradeType, this._index(gradeType))
            return new Classification(map.get(gradeType), grade)
        } else {
            return new Classification(this.maps.get(gradeType), grade)
        }
    }

    private _index (key: string) {
        let map: Map<any ,any> = new Map()
        for (var i=0; i<grades.length; i++) {
            if (!(key in grades[i])) {
                throw new Error('no ' + key + ' key found in grade')
            }
            map.set(grades[i][key], i)
        }
        return map
    }
}
