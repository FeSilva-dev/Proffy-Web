const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/muslim_man_avatar-256.png", 
        whatsapp: "40028922", 
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget augue vel mauris suscipit rutrum in vel eros. Aenean tempor, erat a euismod mollis, tellus tellus consequat velit, nec venenatis diam libero ac sem.', 
        subject: 'Quimica',
        cost: "20", 
        wewkday: [0], 
        time_from: [720], 
        time_to: [1200]
    },

    {
        name: "Felipe Silva", 
        avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/muslim_man_avatar-256.png", 
        whatsapp: "40028922", 
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget augue vel mauris suscipit rutrum in vel eros. Aenean tempor, erat a euismod mollis, tellus tellus consequat velit, nec venenatis diam libero ac sem.', 
        subject: 'Quimica',
        cost: "20", 
        wewkday: [1], 
        time_from: [720], 
        time_to: [1200]
    },
]

const data = req.body

// se tiver dados no formulario
const isNotEmpty = Object.keys(data).length > 0 // essa variavel serve para saber se as chaves sao maiores q 0, ou seja, se possui valores
if (isNotEmpty) {

    data.subject = getSubject(data.subject)
    // adicionar a lista de Proffys
    proffys.push(data) 
    return res.redirect("/study")
}