import { Outlet } from "react-router-dom";

export default function DefaultLayout () {
    return (
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}