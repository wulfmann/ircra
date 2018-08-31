'use strict'

import { grades } from './gradeMap'

export default (grade: string | number, system: GradeSetName, desiredGrade?: GradeSetName) => {
    let errors = []

    if (!grade) errors.push('grade')
    if (!system) errors.push('system')

    if (errors.length > 0) {
        throw new Error(`${errors.join(' and ')} are required.`)
    }

    const gradeSet = grades.find((gradeSet: GradeSet) => gradeSet[system] === grade)

    if (gradeSet) {
        if (desiredGrade) return gradeSet[desiredGrade]
        return gradeSet
    }
}
