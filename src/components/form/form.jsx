import React, {useState} from "react";
import style from "./form.module.css"

export default function Form(props){
    const [user, setUser] = useState({email: "", password: ""})

    const [errors, setErrors] = useState({})

    function handleSubmit(event){
        event.preventDefault()
        props.login(user)
    }

    function handleChange(event){
        setUser({...user, [event.target.name]: event.target.value})
        setErrors(validate({...user, [event.target.name]: event.target.value}))
    }

    function validate(datos){
        const regexEmail = new RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)
        const regexPassword = new RegExp(/^(?=.*[0-9])/)

        let incorrect = {}

        if (!regexEmail.test(datos.email)){
            incorrect.email = "No es un mail valido"
        }
        else if (datos.email.length >= 35){
           incorrect.email = "Debe tener menos de 35 caracteres"
        }

        if (!regexPassword.test(datos.password)){
            incorrect.password = "Debe contener al menos un numero"
        } else if (datos.password.length < 6 || datos.password.length > 10){
            incorrect.password = "Debe tener entre 6 a 10 carateres"
        }
        
        return incorrect
    }

    return (
        <div className={style.conteiner}>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.formInfo}>
                    {errors.email ? (<span className={style.error}>{errors.email}</span>): null} 
                    <input 
                        className={style.input}
                        type="text" 
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Email..."
                    />

                    {errors.password ? (<span className={style.error}>{errors.password}</span>) :null}
                    <input 
                        className={style.input}
                        type="password" 
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Password..."
                    />

                <input 
                        type="submit" 
                        className={style.button}
                    />
                </div>
            </form>
        </div>
    )
}