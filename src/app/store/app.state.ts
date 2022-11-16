import { createAction, createReducer, on } from "@ngrx/store";

export interface AppState {
    currentPatrimonyAmount: number;
}

export const InitialState: AppState = {
    currentPatrimonyAmount: 895000.00,
}

export const aportar10k = createAction('aportar10k');

export const appReducer = createReducer(
    InitialState,
    on(aportar10k, (state: AppState) => {
        return {
            ...state,
            currentPatrimonyAmount: state.currentPatrimonyAmount + 10000,
        }
    })
);