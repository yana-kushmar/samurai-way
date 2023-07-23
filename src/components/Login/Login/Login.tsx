import React from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";

import {loginTC} from "../../../Redux/authReducer";
import {useAppDispatch, useAppSelector} from '../../../Redux/redux-store';
import {Navigate} from "react-router-dom";


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export type LoginType = {
    email: string
    password: string
    rememberMe: boolean
}
export const Login = () => {
    const dispatch = useAppDispatch()
    const isAuthIn = useAppSelector(store => store.auth.isAuth)


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email){
                errors.email = 'Required'
            }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid emails address'
            }else if (values.password?.trim().length < 4){
                errors.password = "Should be more that 3 symbol"
            }
            return errors

        },
        onSubmit: values => {
           dispatch(loginTC(values))
            formik.resetForm()
        }
    })
    if (isAuthIn){
        return  <Navigate to={'/profile'}/>
    }
    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <FormControl>
                <FormLabel>
                    <p>To log in get registered
                        <a href={'https://social-network.samuraijs.com/'}
                           target={'_blank'}> here
                        </a>
                    </p>
                    <p>or use common test account credentials:</p>
                    <p>Email: free@samuraijs.com</p>
                    <p>Password: free</p>
                </FormLabel>
                <form onSubmit={formik.handleSubmit}>
                <FormGroup>
                    <TextField
                        label="Email"
                        margin="normal"
                        {...formik.getFieldProps('email')}
                    />
                    {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                    <TextField
                        type="password"
                        label="Password"
                        margin="normal"
                        {...formik.getFieldProps('password')}
                    />
                    {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}

                    <FormControlLabel
                        label={'Remember me'}
                        control={<Checkbox/>}
                        {...formik.getFieldProps('rememberMe')}
                    />
                    <Button type={'submit'} variant={'contained'} color={'primary'}>
                        Login
                    </Button>
                </FormGroup>
            </form>
            </FormControl>
        </Grid>
    </Grid>
}