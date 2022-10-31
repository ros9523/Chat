const messagesControllers = require("./messages.controllers");

const getMessages = (req, res) => {
  messagesControllers
    .getAllMessages()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

const createMessages = (req, res) => {
  const userId = req.user.id;
  const conversationId= req.params.id
  const { id, message } = req.body;
  if (id && message) {
    messagesControllers
      .createMessages({
        id,
        message,
        userId,
        conversationId,

      })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json(err.message);
      });
  } else {
    res.status(400).json({
      message: "Missing Data",
      fields: {
        id: "uuid",
        message: "string",
      },
    });
  }
};

const getMessageById = (req, res) => {
  const MessageId = req.params.id;
  messagesControllers
    .getMessagesById(MessageId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.statu(400).json({ message: err.message });
    });
};

const deleteMessages = (req, res) => {
  const id = req.params.id;
  messagesControllers.deleteMessages(id).then(() => {
    res
      .status(200)
      .json({
        message: "your message has been deleted",
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  });
};

module.exports = {
  getMessages,
  createMessages,
  getMessageById,
  deleteMessages,
};
