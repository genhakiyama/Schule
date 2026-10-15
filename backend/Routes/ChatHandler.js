const express = require('express');
const MessageController = require('../Controller/MessageControl');
const ConversationController = require('../Controller/ConversationControl');
const router = express.Router();

router.post('/send' , MessageController.SendMessageController);
router.post('/conversation/create' , ConversationController.CreateConversation);
router.post('/conversation/join' , ConversationController.JoinConversation);

module.exports = router;
