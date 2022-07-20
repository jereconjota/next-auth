import { useSession } from 'next-auth/react';

function index() {

    const { data, status } = useSession();
    console.log(data, status);  
    return (
        <div>
        </div>
    )
}

export default index