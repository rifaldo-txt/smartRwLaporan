import React, {lazy, Suspense} from 'react'
import { useRoutes } from 'react-router-dom'


const Loadable = Component => props => {
    return(
        <Suspense>
            <Component {...props} />
        </Suspense>
    )
}

const Home = Loadable(lazy(()=>import('../page/home.jsx')))
const Login = Loadable(lazy(()=>import('../page/login.jsx')))


const mainRoutes =[{
    path: '',
    element: <Home />
},
{
    path: '/login',
    element: <Login/>
}

]

export default function Routes(){
    const routing = useRoutes(mainRoutes)
    return <>{routing}</>
}