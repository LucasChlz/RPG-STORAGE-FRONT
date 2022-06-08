import '../styles/form.css';
import React from 'react';
import axios from 'axios';

const Form = () => {

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
        <div></div>
    )
}

export default Form;