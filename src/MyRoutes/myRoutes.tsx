import { useRoutes } from "react-router-dom"
import { Layout } from "../pages/Layout/layout"
import { Tasks } from "../pages/Tasks/tasks"
import { AddTasks } from "../pages/AddTasks/addTasks"

export const MyRoutes:React.FC = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {path: "/", element: <Tasks/>},
                {path: "/addTasks", element: <AddTasks/>},
            ]
        }
    ])  
    
    return routes
}