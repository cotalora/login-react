import { Box, IconButton } from '@mui/material';
import { AnimatedIcon } from '../../../../components';
import { PaginationProps } from './interfaces/Pagination';
import './Pagination.scss';

export const Pagination = ({ 
        nextAction, 
        prevAction, 
        prevDisabled = false, 
        nextDisabled = false
    }: PaginationProps) => {
    return (
        <>
            <Box className='buttons-page-container'>
                <IconButton
                    id='previous-button'
                    className='button button-left'
                    disabled={prevDisabled}
                    onClick={prevAction}>
                    <AnimatedIcon
                        className='button-icon'
                        target={'#previous-button'}
                        trigger={'hover'}
                        src={'../../../src/assets/icons/arrow-icon.json'}
                        colors={{
                            primary: '#3C37FF',
                            secondary: '#3C37FF'
                        }}
                    />
                </IconButton>
                <IconButton
                    id='next-button'
                    className='button button-rigth'
                    disabled={nextDisabled}
                    onClick={nextAction}>
                    <AnimatedIcon
                        className='button-icon'
                        target={'#next-button'}
                        trigger={'hover'}
                        src={'../../../src/assets/icons/arrow-icon.json'}
                        colors={{
                            primary: '#3C37FF',
                            secondary: '#3C37FF'
                        }}
                    />
                </IconButton>
            </Box>
        </>
    )
}
