import './App.css'
import Friendlist from './components/FriendList/Friendlist'
import User from './components/User/User'
import friends from './data/Friendlist'
import userData from './data/user'

function App() {

  const {username,tag,location,avatar,stats:{followers,views,likes}} = userData

  return (
    <>
    <User name={username} tag={tag} location={location}
     avatar={avatar} followers={followers} views={views}
     likes={likes}
    />
    <Friendlist friendlist = {friends}/>

    </>
  )
}

export default App
