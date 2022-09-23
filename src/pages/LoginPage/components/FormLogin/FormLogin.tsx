import {
    Box,
    Checkbox,
    FormControlLabel,
    InputLabel,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { useSelector } from 'react-redux';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Messages } from "../../../../enums/messages.enum";
import './FormLogin.scss'
import { useMemo } from "react";
import { startLoginWithEmailPassword } from "../../../../store/slices/login/thunks";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { ILoginInWithAny } from "../../../../interfaces/login";
import { IRootState } from "../../../../interfaces/rootState";

export const FormLogin = () => {
    const { status } = useSelector((state: IRootState) => state.login);
    const dispatch = useAppDispatch(); 

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
            onSubmit={({ email, password }: ILoginInWithAny) => {
                dispatch(startLoginWithEmailPassword({ email, password }));
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
