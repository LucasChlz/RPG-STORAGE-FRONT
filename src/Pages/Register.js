import '../styles/register.css'
import React from 'react';
import axios from 'axios';

const Register = () => {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [messa, setMessa] = React.useState("");

    const handlesubmit = async e => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);

        await sendData(name,email,password)
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
        <div className='container'>
        <div className='bg'>
            <img className='bg-image' src={process.env.PUBLIC_URL + '/images/swordsman.png'}/>
            <div className='content'>
                <h1>want to store your </h1>
                <h1>rpg characters?</h1>
                <h1>now you have a</h1>
                <h1>place to do it</h1>
            </div>
        </div>
            <div className='container-form'>
                <h1>CREATE YOUR ACCOUNT</h1>
                <form onSubmit={handlesubmit}>
                    <div className='div-input'>
                        <label>Name</label>
                        <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
                    </div>
                    <div className='div-input'>
                        <label>Email</label>
                        <input type='email' value={email} onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div className='div-input'>
                        <label>Password</label>
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <div className='input-button'>
                        <input type="submit" value="SIGN UP"></input>
                    </div>
                </form>
            </div>
            <div className='clear'></div>
        </div>
    );
}

export default Register;