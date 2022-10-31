const router = require('express').Router()
const passport = require('passport')
const conversationsServices= require('../conversations/conversations.services')

require('../middlewares/auth.middleware')(passport)
const messagesServices = require('../messages/messages.services')
require('../middlewares/auth.middleware')(passport)

router.route('/')
.get(conversationsServices.getConversations)
.post(
    passport.authenticate('jwt',{session:false}), 
    conversationsServices.createConversations
)

router.route('/:id')
.get(conversationsServices.getConversationById) 
.patch(
    passport.authenticate('jwt', {session:false}), 
    conversationsServices.patchMyConversation
)
.delete(
    passport.authenticate('jwt', {session:false}), 
    conversationsServices.deleteMyconversation)


router.route('/:id/messages')
.get(passport.authenticate('jwt', {session: false}), 
messagesServices.getMessages)
.post(passport.authenticate('jwt', {session: false}),
messagesServices.createMessages)



router.route('./:id/messages/:id')
.get(passport.authenticate('jwt', {session: false}), messagesServices.getMessageById)
.delete(passport.authenticate('jwt', {session: false}), 
messagesServices.deleteMessages)

module.exports= router