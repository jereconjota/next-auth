import { getSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

function Home({ session }) {

    const router = useRouter();
    
    return (
        <div>
            {
                session ? (
                    <>
                        <h2>{session.user.name}</h2>
                        <h3>{session.user.email}</h3>
                        <img src={session.user.image} alt="" />
                        {/* <button onClick={() => router.push('/api/auth/signout')}>Sign out</button> */}
                        <button onClick={() => signOut()}>logout</button>
                    </>
                ) : (
                    <p>skeleton</p>
                )
            }
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context);

    if (!session) return {
        redirect: {
            destination: '/login',
            permanent: false,
        }
    }
    
    return {
        props: {
            session
        }
    }
}


export default Home;