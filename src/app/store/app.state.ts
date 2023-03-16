import { createAction, createReducer, on } from "@ngrx/store";

export interface Institution {
    id: string;
    name: string;
}

export interface Bond {
    name: string;
    rateAmount: number;
    ratePlusAmount: number;
    ratePlusName: string;
    incomeType: string;
    dueDate: string;
}

export interface Investment {
    amount: number
    recordType: string; // investment || income
    createdAt: string;
    updatedAt: string;
    institution: Institution;
    bond: Bond;
}
export interface AppState {
    currentPatrimonyAmount: number;

    hasFetchedInvestments: boolean;
    investments: Investment[];
}

export const InitialState: AppState = {
    currentPatrimonyAmount: 1000.00,
    hasFetchedInvestments: false,
    investments: [],
}

export const aportar10k = createAction('aportar10k');
export const setInvestments = createAction('setInvestments', (payload: any) => ({ payload }));
export const addInvestment = createAction('addInvestment', (payload: any) => ({ payload }));

export const appReducer = createReducer(
    InitialState,
    on(aportar10k, (state: AppState) => {
        return {
            ...state,
            currentPatrimonyAmount: state.currentPatrimonyAmount + 10000,
        }
    }),

    on(addInvestment, (state: AppState, { payload }) => {
        state = {
            ...state,
            hasFetchedInvestments: true,
            investments: [
                ...state.investments,
                payload,
            ]
        }
        return state;
    }),

    on(setInvestments, (state: AppState, { payload }) => {
        state = {
            ...state,
            hasFetchedInvestments: true,
            investments: payload,
        };
        return state;
    }),
);