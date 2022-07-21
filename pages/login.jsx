import { useRouter } from 'next/router'
import { useSession, signIn } from 'next-auth/react'
const login = () => {
    const router = useRouter()

    const {data: session, status} = useSession()
    
    if (status !== 'loading' && status === 'authenticated') {
        router.push('/')
    }

    return (
        <div>
            {/* <button onClick={ () => router.push('/api/auth/signin/github') }> */}
            <button onClick={() => signIn('github')}>
                Signin with GitHub
            </button>
        </div>
    )
}

export default login