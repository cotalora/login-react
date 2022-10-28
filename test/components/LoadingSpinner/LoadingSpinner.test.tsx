import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from '../../../src/components/LoadingSpinner/LoadingSpinner';

describe('Pruebas unitarias al componente LoadingSpinner', () => {
    
    beforeEach(() => {
        render(<LoadingSpinner isLoading={true} />)
    });

    test('Se debe presentar el Spinner', () => {
        screen.debug();
        expect(screen.getByLabelText('spinnerLoading')).toBeInTheDocument();
    });
});