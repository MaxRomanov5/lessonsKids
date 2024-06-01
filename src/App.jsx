
import './App.css'
import User from './components/User/User'
import userData from './data/user'

function App() {

  const {username,tag,location,avatar,stats:{followers,views,likes}} = userData

  return (
    <>
    <User name={username} tag={tag} location={location}
     avatar={avatar} followers={followers} views={views}
     likes={likes}
    />

    </>
  )
}

export default App
