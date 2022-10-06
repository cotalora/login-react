import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useAppDispatch } from '../../src/hooks/useAppDispatch';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from '../../src/store/slices/login';

describe('Pruebas unitarias a hook useAppDispatch', () => {
    beforeEach(() => jest.clearAllMocks());
    
    const store = configureStore({
        reducer: {
            login: loginSlice.reducer,
        }
    });

    test('Se debe llamar la función dispatch resultante del hook', () => {
        const { result } = renderHook(() => useAppDispatch(), {
            wrapper: ({ children }: any) => <Provider store={store}>{children}</Provider>,
        });
        expect(result.current).toHaveBeenCalled;
    })
})