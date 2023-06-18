import React from 'react';
import Title from "../Components-are-repeated/Title";
import axios from 'axios';
import './dog.css'



class Dogs extends React.Component {

    state = {
        img: '',
        type: '',
        Gender: 'male',
        Life: {
            min: '',
            max: ''
        },
        Weight: '',
        Height: ''
    }

    componentDidMount() {
        this.getInfoDog()
    }

    getInfoDog = async (ele) => {
        const headers = {
            'X-Api-Key': 'JoZVxmdhZb7f+8LuMEomLw==yQbLuUAuS7Ew5Ns7',
        };
        const options = document.querySelectorAll('option')
        const value = ele && ele.value !== options[0].value ? ele.value : options[1].value
        try {
            const respons = await axios.get(`https://api.api-ninjas.com/v1/dogs?name=${value}`, { headers })
            const data = respons.data[0]
            this.setState({
                img: data.image_link,
                type: data.name,
                Life: {
                    min: data.min_life_expectancy,
                    max: data.max_life_expectancy
                },
                Weight: data.max_weight_male,
                Height: data.max_height_male
            })
        } catch (error) {
            window.alert('Your input is incorrect Or this type of dog is not available')
        }
    }

    render() {
        return (
            <main>
                <div className="container">
                    <div className="parent-dogs">
                        <Title Title='Welcome to the dogs page' />
                        <div className='inputs'>
                            <div className='input'>
                                <input type='text' placeholder='Enter a dog name' />
                                <button onClick={() => {
                                    const input = document.querySelector('input')
                                    this.getInfoDog(input)
                                }}>Enter</button>
                            </div>
                            <select onChange={(ev) => {
                                this.getInfoDog(ev.target)
                            }}>
                                <option value='some dog name'>some dog name{'>'}</option>
                                <option value='Akita'>Akita</option>
                                <option value='Alaskan Malamute'>Alaskan Malamute</option>
                                <option value='Alaskan Klee Kai'>Alaskan Klee Kai</option>
                                <option value='Afghan Hound'>Afghan Hound</option>
                            </select>
                        </div>
                        <div className='card'>
                            <div className='image'>
                                <img src={this.state.img} alt='img' />
                            </div>
                            <div className='info'>
                                <h3>Type: {this.state.type}</h3>
                                <ul>
                                    <li>Gender:
                                        <span>{this.state.Gender}</span>
                                    </li>
                                    <li>Life:
                                        <div>
                                            <span>Min: {this.state.Life.min} years</span> <span>Max: {this.state.Life.max} years</span>
                                        </div>
                                    </li>
                                    <li>Weight:
                                        <span> {this.state.Weight} pound</span>
                                    </li>
                                    <li>Height:
                                        <span> {this.state.Height} inches</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}


export default Dogs