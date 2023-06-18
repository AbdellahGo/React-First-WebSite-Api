import { NavLink } from "react-router-dom";
import './home.css'
import Title from "../Components-are-repeated/Title";
const Home = () => {
    return (
        <main className="home">
            <div className="container">
                <div className="parent-home">
                    <Title Title='Welcome to my home to get started just click the button'/>
                    <NavLink to='/Recipes'>Get started</NavLink>
                </div>
            </div>
        </main>
    )
}


export default Home