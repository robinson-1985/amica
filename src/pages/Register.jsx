import React from 'react';

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className='logo_principal'></span>
                <span className="logo">AMICA</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="display name"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input style={{display: 'none'}}type="file" id='file'/>
                    <label id='upload_img' htmlFor="file">
                        <span id='img_icon'><i class="fi fi-br-picture"></i></span>
                    </label>
                    <label htmlFor="file" id='img_name'>Select an image</label>
                    <button>Sign up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}

export default Register;