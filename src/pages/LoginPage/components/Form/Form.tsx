import { Box, Button, Checkbox, FormControlLabel, InputLabel, TextField } from "@mui/material"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoginForm } from '../../interfaces/loginForm';
import { Messages } from '../../../../enums/messages.enum';

export const Form = () => {
    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Correo electrónico no es válido').required(Messages.required),
            password: Yup.string().required(Messages.required)
                .min(8, "Contraseña debe tener mínimo 8 caracteres")
                .max(20, "Contraseña debe tener máximo 20 caracteres"),
        }),
        onSubmit: (values: LoginForm) => {
            // TODO: Implementar Login desde campos
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box className="form-control">
                <InputLabel
                    htmlFor="email"
                    className="form-control-label"
                >
                    Correo electrónico
                </InputLabel>
                <TextField
                    id="email"
                    error={ formik.touched.email && formik.errors.email ? true : false }
                    variant="outlined"
                    type="email"
                    className="form-control-input"
                    helperText={formik.touched.email && formik.errors.email}
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </Box>
            <Box className="form-control">
                <InputLabel
                    htmlFor="password"
                    className="form-control-label"
                >
                    Contraseña
                </InputLabel>
                <TextField
                    id="password"
                    error={ formik.touched.password && formik.errors.password ? true : false }
                    variant="outlined"
                    type="password"
                    className="form-control-input"
                    helperText={formik.touched.password && formik.errors.password}
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </Box>
            <Box className="form-control">
                <FormControlLabel
                    className='form-control-checkbox'
                    control={
                        <Checkbox
                            disableRipple={true}
                            className='checkbox'
                            sx={{
                                '&.Mui-checked': {
                                    color: '#3C37FF',
                                },
                            }}
                        />}
                    label="Recordar información"
                />
            </Box>
            <Button
                type='submit'
                className="button-principal button-mt-10"
            >
                Iniciar sesión
            </Button>
        </form>
    )
}
