import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

function HomeFront() {

    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'error') {
        return <p>Error!</p>;
    }

    if (status === 'unauthenticated') {
        router.push('/login');
    }

    return (
        <div>
            {
                session ? (
                    <>
                        <h2>{session.user.name}</h2>
                        <h3>{session.user.email}</h3>
                        <img src={session.user.image} alt="" />
                        <button onClick={() => router.push('/api/auth/signout')}>Sign out</button>
                    </>
                ) : (
                    <p>skeleton</p>
                )
            }
        </div>
    )
}

export default HomeFront;