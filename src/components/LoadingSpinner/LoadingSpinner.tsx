import { LoadingSpinnerProps } from './interfaces/LoadingSpinner'
import { Fade, Box, CircularProgress } from '@mui/material';

export const LoadingSpinner = ({ isLoading }: LoadingSpinnerProps) => {
    return (
        <>
        {
            isLoading && 
            <Fade in={true}>
                <Box className='main-spinner'><CircularProgress /></Box>
            </Fade>
        }
        </>
    )
}
