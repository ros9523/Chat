const ConversationsControllers = require('./conversations.controllers')

const getConversations=(req, res)=>{
    ConversationsControllers.getAllConversations()
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(err=>{
        res.status(400).json({message:err.message})
    })
}


const createConversations= (req, res)=>{
    const userId = req.user.id 
    const {id, title} = req.body 
    if(id && title){
        ConversationsControllers.createConversation({
           id, title, userId}
        )
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            res.status(400).json(err.message)
        })
    }else{
        res.status(400).json({
            message:'Missing Data', 
            field:{
                title:'string'
            }
        })
    }

}

const getConversationById=(req, res)=>{
    const ConversationId= req.params.id
    ConversationsControllers.getConversationById(ConversationId)
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(err=>{
        res.status(400).json({message:err.message})
    })
}

const patchMyConversation=(req, res)=>{
    const id= req.params.id
    const{title}= req.body
    ConversationsControllers.updateConversation(id, {title})
    .then(()=>{
        res.status(200).json({
            message:"your conversations was successfully updated"})})
    .catch(err=>{
        res.status(400).json({message:err.message})
    })

}


const deleteMyconversation=(req,res)=>{
    const id =req.params.id
    ConversationsControllers.deleteConversation(id)
    .then(()=>{
        res.status(200).json({message:"your conversation was successfully deleted"})
    })
    .catch(err=>{
        res.status(400).json({message:err.message})
    })
}


module.exports={
    getConversations,
    createConversations,
    getConversationById,
    patchMyConversation,
    deleteMyconversation
}