const Cohort = require('./cohort.js')
const CohortNotFoundERROR = 'ERROR: Cohort not found'
const AlreadyExists = 'Name already exists / Cannot exist without a name'

class Manager {
  constructor () {
    this.cohortList = []
  }

  create () {
    return this.cohortList
  }

  addCohort (name) {
    const cohortName = new Cohort(name)
    for (let i = 0; i < this.cohortList.length; i++) {
      if (this.cohortList[i].cName === name || this.cohortList[i].cName === '') { return AlreadyExists }
    }
    this.cohortList.push(cohortName)
    return this.cohortList
  }

  searchCohort (name) {
    for (let i = 0; i < this.cohortList.length; i++) {
      if (name === this.cohortList[i].cName) {
        return this.cohortList[i]
      }
    }
    return CohortNotFoundERROR
  }

  removeCohort (cName) {
    for (let i = 0; i < this.cohortList.length; i++) {
      if (this.cohortList[i].cName === cName) {
        this.cohortList.splice(i, 1)
      }
    }
    return this.cohortList
  }
}

module.exports = Manager

const manager = new Manager()

const cohort = manager.addCohort('Cohort 4')
const student = manager.cohortList[0].addStudent('ID2', 'Michael', 'Blackson', '@Blackson1', 'MichaelLaughs@gmail.com')

console.log('hello', student)
console.log('bye', cohort)
