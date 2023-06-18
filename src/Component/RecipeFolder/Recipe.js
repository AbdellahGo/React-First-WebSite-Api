import './recipe.css'
import React from 'react';
import Title from "../Components-are-repeated/Title";
import axios from 'axios';


class Recipes extends React.Component {

    state = {
        img: '',
        title: '',
        instruction: '',
        ingredients: []
    }

    componentDidMount() {
        this.getDataRecipes()
    }

    getDataRecipes = async (ele) => {
        const options = document.querySelectorAll('option')
        const value = ele && ele.value !== options[0].value ? ele.value : options[1].value
        try {
            const respons = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
            const data = respons.data.meals[0]
            const ingredients = []
            for (let i = 1; ; i++) {
                if (data[`strIngredient${i}`] !== '') {
                    ingredients.push(`${data[`strIngredient${i}`]} ${data[`strMeasure${i}`]}`);
                } else {
                    break
                }
            }
            this.setState({
                img: data.strMealThumb,
                title: data.strMeal,
                instruction: data.strInstructions,
                ingredients: ingredients
            })
        } catch(error) {
            window.alert('Your input is incorrect or this meal is not available')
        }
    }


    render() {
        return (
            <main>
                <div className="container">
                    <div className="parent-recipe">
                        <Title Title='Welcome to the recipes page' />
                        <div className='inputs'>
                            <div className='input'>
                                <input type='text' placeholder='Enter a recipe' />
                                <button onClick={() => {
                                    const input = document.querySelector('input')
                                    this.getDataRecipes(input)
                                }}>Enter</button>
                            </div>
                            <select onChange={(ev) => {
                                this.getDataRecipes(ev.target)
                            }}>
                                <option value='some recipes'>some recipes{'>'}</option>
                                <option value='Tortang Talong'>Tortang Talong</option>
                                <option value='Eggplant Adobo'>Eggplant Adobo</option>
                                <option value='Asado'>Asado</option>
                                <option value='Caldereta'>Caldereta</option>
                            </select>
                        </div>
                        <div className='card'>
                            <div className='image'>
                                <img src={this.state.img} alt='img' />
                            </div>
                            <div className='info'>
                                <h3>{this.state.title}</h3>
                                <p>{this.state.instruction}</p>
                                <ul className='ingredients'>
                                    {this.state.ingredients.map((text, i) => (<li key={i}>{text}</li>))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

}


export default Recipes