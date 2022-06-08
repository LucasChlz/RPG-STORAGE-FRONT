import '../styles/register.css'

const Register = () => {
      
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
                <form>
                    <div className='div-input'>
                        <label>Name</label>
                        <input type='text'></input>
                    </div>
                    <div className='div-input'>
                        <label>Email</label>
                        <input type='email'></input>
                    </div>
                    <div className='div-input'>
                        <label>Password</label>
                        <input type='password'></input>
                    </div>
                    <div className='input-button'>
                        <input type="button" value="SIGN UP"></input>
                    </div>
                </form>
            </div>
            <div className='clear'></div>
        </div>
    );
}

export default Register;