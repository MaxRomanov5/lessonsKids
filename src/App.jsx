import './App.css'
import Pokemons  from './Pokemons/Pokemons.jsx'
import Friendlist from './components/FriendList/Friendlist'
import Transactions from './components/Transactions/Transactions'
import User from './components/User/User'
import friends from './data/Friendlist'
import userData from './data/user'
import transactions from './data/transactions'

import Store from './components/Store/Store'
import FindProduct from './components/FindProduct/FindProduct'
import Todo from './components/Todo/Todo.jsx'
function App() {

  // const {username,tag,location,avatar,stats:{followers,views,likes}} = userData

  return (
    <>
    {/* <User name={username} tag={tag} location={location}
     avatar={avatar} followers={followers} views={views}
     likes={likes}
    />
    <Friendlist friendlist = {friends}/>
    <Transactions transactions = {transactions}/> */}
    {/* <FeedbackForm></FeedbackForm> */}
    {/* <Store /> */}
    {/* <FindProduct /> */}
{/* <Todo/> */}
  <Pokemons/>
    </>
  )
}

export default App
