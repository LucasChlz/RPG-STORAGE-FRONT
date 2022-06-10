import '../styles/login.css'
import React from 'react';
import axios from 'axios';

const Login = () => {

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
       <div className='container-login'>
           <div className='container-form-login'>
                <h1>CREATE YOUR ACCOUNT</h1>
                <form onSubmit={handlesubmit}>
                    <div className='div-input-login'>
                        <label>Name</label>
                        <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
                    </div>
                    <div className='div-input-login'>
                        <label>Email</label>
                        <input type='email' value={email} onChange={e => setEmail(e.target.value)}></input>
                    </div>
/                    <div className='div-input-login'>
                        <label>Password</label>
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                        <a href='http://localhost:3000/login'>already have an account ?</a>
                    </div>
                    <div className='input-button-login'>
                        <input type="submit" value="SIGN UP"></input>
                    </div>
                </form>
            </div>
       </div>
    );
}

export default Login;