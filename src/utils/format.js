const subjects = [

    "Artes",
    "Biologia",
    "Quimica",
    "Ciencias",
    "Educacao Fisica",
    "Geografia",
    "Historia",
    "Matematica",
    "Ingles",
    "Portugues"
]
const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sabado"
]

// Funcionalidades

function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function convertHoursToMinutes(time){
    const [hour, minutes] = time.split(":") //Separando as horas de minutos, uma parte vai para o objeto hour, e a outra parte para o minute
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}