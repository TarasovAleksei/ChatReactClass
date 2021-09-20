import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'content-type': 'application/json',
  },
});
export const chatsAPI = {
  loadChats: () => instance.get('chats/').then(response => response.data),
  addChat: newChat => instance.post('chats/', newChat),
  deleteChat: chatId => instance.delete(`chats/${chatId}`),
  sendMessage: (newMsg, chatId) =>
    instance.post(`chats/messages/${chatId - 1}`, newMsg),
  deleteMessage: (chatId, msgId) =>
    instance.delete(`chats/messages/${chatId - 1}?messageId=${msgId}`),
};

export const profileAPI = {
  loadProfile: () => instance.get(`profile`).then(response => response.data),
};
