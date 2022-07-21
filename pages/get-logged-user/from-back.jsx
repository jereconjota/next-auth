import { getSession } from 'next-auth/react';

function FromBack({ session }) {
  const { user } = session

  return (
    <div>
      <h2>{ user.name }</h2>
      <h3>{ user.email }</h3>
      <img src={user.image} alt="" />
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  console.log(session)
  return {
    props: {
      session: session,
    }
  }
}

export default FromBack