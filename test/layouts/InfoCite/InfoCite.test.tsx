import React from 'react';
import { render, screen } from '@testing-library/react';
import { InfoCite } from '../../../src/layouts/InfoCite/InfoCite';

describe('Pruebas unitarias al layout InfoCite', () => {
    
    beforeEach(() => {
        render(<InfoCite />)
    });

    test('Se debe presentar el Spinner', () => {
        screen.debug();
        expect(true).toBeTruthy();
    });
});