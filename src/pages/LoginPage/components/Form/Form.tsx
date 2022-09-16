import { Box, Button, Checkbox, FormControlLabel, InputLabel, TextField } from "@mui/material"

export const Form = () => {
    return (
        <>
            <Box className="form-control">
                <InputLabel
                    htmlFor="email"
                    className="form-control-label"
                >
                    Correo electrónico
                </InputLabel>
                <TextField
                    id="email"
                    variant="outlined"
                    type="email"
                    className="form-control-input"
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
                    variant="outlined"
                    type="password"
                    className="form-control-input"
                />
            </Box>
            <Box className="form-control">
                <FormControlLabel
                    className='form-control-checkbox'
                    control={
                        <Checkbox
                            disableRipple={ true }
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
        </>
    )
}
