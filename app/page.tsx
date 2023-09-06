import getCurrentUser from './actions/getCurrentUser'
import { SignOut } from './components/Buttons/SignOut'
const Home = async () => {
  const currentUser = await getCurrentUser()
  console.log(`CURRENT USER: ${currentUser}`)
  return (
    <>
      <div>HOME</div>
      <div>{`Hello, ${currentUser?.name}`}</div>
      <SignOut />
    </>
  )
}

export default Home
