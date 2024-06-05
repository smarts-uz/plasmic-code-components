import { useState } from "react"
import { createClient } from '@/utils/supabase/client'

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const click = async (e) => {
        // console.log(email)
        // console.log(password)
        // console.log(e.target.value)
        const supabase = createClient()
        // console.log(supabase)
        const authFunction = supabase.auth.signInWithPassword({email, password})
        // const authFunction = supabase.auth.signUp({email, password})
        const {data} = await authFunction
        console.log(data)
        // console.log(authFunction)
        // console.log(email)
        // console.log(password)
    }
    // const change = e => {
    //     setEmail(e.target.value)
    //     setPassword(e.target.value)
    // }
    return (
        <div>
            {/* <form action="">
                <input type="text" />
                <input type="password" />
                <button type="submit" onClick={(e) => console.log(e.target.value)}>Login</button>
            </form> */}
            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button onClick={click}>Click</button>
        </div>
    )
}