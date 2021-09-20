const path = require('path');
const { getJson, setJson } = require('./utils');
const chatsFile = path.resolve(__dirname, 'data', 'chats.json');

module.exports = app => {
  const getChats = () => {
    return getJson(chatsFile);
  };

  const setChats = chats => {
    return setJson(chatsFile, chats);
  };

  app.get('/chats', async (req, res) => {
    res.json(await getChats());
  });

  app.post('/chats', async (req, res) => {
    const chats = await getChats();
    const newChat = req.body;

    if (chats.some(({ chatId }) => chatId === newChat.chatId)) {
      res
        .status(400)
        .send(`Чат с идентификатором ${newChat.chatId} уже существует`);
    }

    chats.push(newChat);
    await setChats(chats);

    res.status(204).end();
  });

  app.delete('/chats/:id', async (req, res) => {
    const chats = await getChats();
    const delChatId = req.params.id;

    setChats(chats.filter(({ chatId }) => chatId !== delChatId));

    res.status(204).end();
  });

  app.post('/chats/messages/:id', async (req, res) => {
    const chats = await getChats();
    const chatIdx = req.params.id;
    const newMsg = req.body;

    if (chats[chatIdx].messages.some(({ id }) => id === newMsg.id)) {
      res
        .status(400)
        .send(`Сообщение с идентификатором ${newMsg.id} уже существует`);
    }

    chats[chatIdx].messages.push(newMsg);
    await setChats(chats);

    res.status(204).end();
  });

  app.delete('/chats/messages/:id', async (req, res) => {
    const chats = await getChats();
    const chatIdx = req.params.id;
    const msgId = Number(req.query.messageId);
    const MsgIdIdx = chats[chatIdx].messages.findIndex(
      ({ id }) => id === msgId
    );
    chats[chatIdx].messages.splice(MsgIdIdx, 1);
    await setChats(chats);

    res.status(204).end();
  });
};
