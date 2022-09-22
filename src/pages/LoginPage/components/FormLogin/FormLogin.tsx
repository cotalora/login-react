import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    InputLabel,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../../../store/slices/login";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Messages } from "../../../../enums/messages.enum";
import './FormLogin.scss'
import { useMemo } from "react";

export const FormLogin = () => {
    const { status } = useSelector((state: any) => state.login);
    const dispatch = useDispatch(); 

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email(Messages.EmailInvalid)
            .required(Messages.Required),
        password: Yup.string()
            .required(Messages.Required)
            .min(8, Messages.PasswordMinLength)
            .max(20, Messages.PasswordMaxLength),
    });

    const isAuthenticating = useMemo(() => status === 'authenticating', [status]);

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(event: any) => {
                event = {
                    ...event,
                    status: 'authenticated',
                    uid: '123456789',
                    displayName: 'John Doe',
                    photoURL: 'asdasd',
                    errorMessage: ''
                }
                dispatch(login(event));
            }}
        >
            {({ touched, errors, getFieldProps }) => (
                <Form>
                    <Box className="form-control">
                        <InputLabel htmlFor="email" className="form-control-label">
                            Correo electrónico
                        </InputLabel>
                        <TextField
                            id="email"
                            error={touched.email && errors.email ? true : false}
                            variant="outlined"
                            type="email"
                            className="form-control-input"
                            helperText={touched.email && errors.email}
                            {...getFieldProps("email")}
                        />
                    </Box>
                    <Box className="form-control">
                        <InputLabel htmlFor="password" className="form-control-label">
                            Contraseña
                        </InputLabel>
                        <TextField
                            id="password"
                            error={touched.password && errors.password ? true : false}
                            variant="outlined"
                            type="password"
                            className="form-control-input"
                            helperText={touched.password && errors.password}
                            {...getFieldProps("password")}
                        />
                    </Box>
                    <Box className="form-control">
                        <FormControlLabel
                            className="form-control-checkbox"
                            control={
                                <Checkbox
                                    disableRipple={true}
                                    className="checkbox"
                                    sx={{
                                        "&.Mui-checked": {
                                            color: "#3C37FF",
                                        },
                                    }}
                                />
                            }
                            label="Recordar información"
                        />
                    </Box>
                    <LoadingButton 
                        type="submit" 
                        className="button-principal button-mbt-10"
                        loading={isAuthenticating}
                    >
                        Iniciar sesión
                    </LoadingButton>
                    <Typography className="register-text" variant="body2">
                        ¿Aún no tienes una cuenta?
                        <Link className="register-anchor" href="#">Registrate</Link>
                    </Typography>
                </Form>
            )}
        </Formik>
    );
};
