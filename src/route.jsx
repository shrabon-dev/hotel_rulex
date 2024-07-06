import { createBrowserRouter } from "react-router-dom";
import Home from '../src/pages/Home'
import Single_room from '../src/pages/Single_room'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'single-room',
        element:<Single_room/>,
    }
])

export default router