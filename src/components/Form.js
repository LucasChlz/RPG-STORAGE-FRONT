import '../styles/form.css';
import React from 'react';
import axios from 'axios';

const Form = () => {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [messa, setMessa] = React.useState("");

    const handlesubmit = e => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);

        sendData(name,email,password)
    }

    const sendData = async (name, email, password) => {
        const newUser = {
            name: name,
            email: email,
            password: password
        }
        const response = await axios.post('http://localhost:8080/user/create', newUser);
        console.log(response.data.message);
        setMessa(response.data.message);
    }

    return (
        <div className='formContainer'>
            <h1>{messa}</h1>
            <h1>SIGN UP</h1>  
            <form onSubmit={handlesubmit}>
                <div className='ContainerInput'>
                    <label>Name: </label>
                    <input type='text' placeholder='name...' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className='ContainerInput'>
                    <label>Email: </label>
                    <input type='text' placeholder='email...' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='ContainerInput'>
                    <label>Password: </label>
                    <input type='text' placeholder='password...' value={password} onChange={e => setPassword(e.target.value)} />
                </div> 
                <div className='ContainerInput'>
                    <input type='submit' value='Create' />
                </div>
            </form> 
        </div>
    )
}

export default Form;