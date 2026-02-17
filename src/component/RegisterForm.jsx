import {useState} from "react";
import {useForm} from "react-hook-form";
import { registerSchema } from "../validations/RegisterSchema";
import {yupResolver} from "@hookform/resolvers/yup"

export default function RegisterForm(){
    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState("");

    const {register, handleSubmit, reset, formState: {errors, isValid, isSubmitting}} = useForm({
        resolver: yupResolver(registerSchema),
        mode: "onTouched"
    });

    function onSubmit(data){
         reset();
        console.log("Account created", data);
        setSuccess("Account created successfully!");
    }

    function handelReset(){
        reset();
        setShowPassword(false);
        setSuccess("");
    }

    return(
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {success && <div className="success">{success}</div>}
            <div className="field">
                <label htmlFor="reg-name">Full Name</label>
                <input type="text" name="name" id="reg-name" placeholder="Please enter full name" autoComplete="name" {...register("fullName")} />

                {errors.fullName && <div className="error">{errors.fullName.message}</div>}
            </div>
            <div className="field">
                <label htmlFor="reg-email">Email</label>
                <input type="email" name="email" id="reg-email" placeholder="you@example.com" autoComplete="email" {...register("email")} />

                {errors.email && <div className="error">{errors.email.message}</div>}
            </div>
            <div className="field">
                <label htmlFor="reg-pass">Password</label>
                <input type={showPassword ? "text" : "password"} name="password" id="reg-pass" placeholder="••••••••" autoComplete="current-password" {...register("password")}/>

                {errors.password && <div className="error">{errors.password.message}</div>}

                <div className="helpRow">
          <label className="row small" style={{ cursor: "pointer" }}>
            <input
              className="checkbox"
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            Show password
          </label>
          <span className="small">Min 6 characters</span>
        </div>
            </div>
            <div className="field">
                <label htmlFor="reg-confirm">Confirm password</label>
                <input name="confirmPassword" id="reg-confirm"  autoComplete="new-password" placeholder="••••••••" {...register("confirmPassword")}/>
    
                {errors.confirmPassword && <div className="error">{errors.confirmPassword.message}</div>}
            </div>
            <div className="actions">
                <button className="primary" type="submit" disabled={!isValid || isSubmitting}>Create account</button>
                <button className="ghost" type="button" onClick={handelReset}>Reset</button>
            </div>
        </form>
    )

}
