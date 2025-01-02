import { createBrowserRouter } from "react-router-dom"
import Layout from "./Layout/Layout"
import SubmissionList from "./pages/SubmissionList"
import SubmissionForm from "./pages/SubmissionForm"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <SubmissionList />,
            },
            {
                path: "/form",
                element: <SubmissionForm />,
            },
        ],
    },
]);

export default router;