const Users = require('./users.models')
const Messages= require('./messages.models')
const Participants= require('./participants.models')
const Conversations= require('./conversations.models')

const initModels = () => {
    
Users.hasMany(Conversations)
Conversations.belongsTo(Users)

Users.hasMany(Participants)
Participants.belongsTo(Users)

Users.hasMany(Messages)
Messages.belongsTo(Users)


Participants.hasMany(Conversations)
Conversations.belongsTo(Participants)

Conversations.hasMany(Messages)
Messages.belongsTo(Conversations)
}

module.exports = initModels