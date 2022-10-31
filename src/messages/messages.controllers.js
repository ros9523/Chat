const Messages= require('../models/messages.models')
const uuid= require('uuid')


getAllMessages= async()=>{
    const data= await Messages.findAll({

    })

    return data
}

const getMessagesById= async (id)=>{
    const data= await Messages.findOne({
        where:{
            id
        }
    })
    return data
}


const createMessages= async(data)=>{
    const newMessage= await Messages.create({
        id:uuid.v4(), 
        message: data.message,
        userId:data.userId,
        conversationId: data.conversationId
    })

    return newMessage
}


const deleteMessage= async(id)=>{
    const data= await  Messages.destroy({
where:{
    
    id
}
    })

    return data
}

module.exports={
    getAllMessages,
    getMessagesById,
    createMessages,
    deleteMessage
}

