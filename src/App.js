import React from 'react';
import { Route, Switch } from 'react-router';
import style from './App.module.scss';
import HeaderContainer from './Components/Header/HeaderContainer';
import ChatListContainer from './Components/ChatList/ChatListContainer';
import EmptyChatContainer from './Components/EmptyChat/EmptyChatContainer';
import MessageFieldContainer from './Components/MessageField/MessageFieldContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';

class App extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <HeaderContainer />
        <ChatListContainer />
        <Switch>
          <Route exact path='/' component={EmptyChatContainer} />
          <Route exact path='/profile' component={ProfileContainer} />
          <Route exact path='/chat/:chatId' component={MessageFieldContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
