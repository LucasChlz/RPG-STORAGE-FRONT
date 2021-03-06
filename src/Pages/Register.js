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
        <div className='container-register'>
                <div className='content-register'>
                    <div className='bg-image'>
                        <img src={process.env.PUBLIC_URL + '/images/Logo.png'}></img>
                    </div>
                    <div className='content-text'>
                        <p>Now you have a complete place to store your rpg characters</p>
                    </div>
                </div>
                <form className='form-register'>
                        <span>Create Your Account   </span>
                    <div className='input-register'>
                        <label>Name</label>
                        <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
                    </div>
                    <div className='input-register'>
                        <label>Email</label>
                        <input type='email' value={email} onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div className='input-register'>
                        <label>Password</label>
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <div className='submit-register'>
                        <input type="submit" value="SIGN UP"></input>
                    </div>
                </form>      
        </div>
    );
}

export default Register;