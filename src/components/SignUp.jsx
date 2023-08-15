import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export function SignUp() {
    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().integer().positive().min(18).required(),
        password: yup.string().min(6).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], " Passwords Don't match").required()
    })

    const { register, handleSubmit, formState : {errors} } = useForm({
        resolver:yupResolver(schema)
    })
    const formSubmit = (data) => {
        console.log("form Submit...")
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(formSubmit)} style={{ display: "flex", flexDirection: "column", width: "35%", marginLeft: "auto", marginRight: "auto" }}>
                <input type="text" placeholder="Enter Full Name..." {...register("fullName")} />
                <i style={{color:'red'}}>{errors.fullName?.message}</i>
                <input type="text" placeholder="Enter Email..." {...register("email")} />
                <i style={{color:'red'}}>{errors.email?.message}</i>
                <input type="number" placeholder="Enter Enter Age..." {...register("age")} />
                <i style={{color:'red'}}>{errors.age?.message}</i>
                <input type="password" placeholder="Enter Password..." {...register("password")} />
                <i style={{color:'red'}}>{errors.password?.message}</i>
                <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")} />
                <i style={{color:'red'}}>{errors.confirmPassword?.message}</i>
                <input type="submit" />
            </form>
        </div>
    );

}