import { signIn,signOut,useSession} from "next-auth/react";


const LoginButton = () =>{
    const {data : session } = useSession();
    return session ? (
        <>
            <p>
                Welcome , {session.user?.name}!
            </p>
            <button onClick={()=> signOut()} >Logout</button>
        </>
    ):(
        <>
        <button onClick={() => signIn("google")}>Login with Google</button>
        <button onClick={() => signIn("github")}>Login with GitHub</button>
        </>
    )

}

export default LoginButton