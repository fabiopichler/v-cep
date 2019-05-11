import { IAction } from './IAction';
import { IState } from './IState';
import { ActionEnum } from './ActionEnum';
import { ErrorType } from './ErrorType';

export const initialState: IState = {
    cepList: [],
    currentCep: undefined,
    loading: false,
    error: ErrorType.Ok
};

export const reducer = (state: IState, action: IAction): IState => {

    const { payload } = action;

    switch (action.type) {
        case ActionEnum.INIT:
            return { ...state, cepList: payload };

        case ActionEnum.DONE:
            const cepList = [ ...state.cepList ];
            const index = cepList.map(x => x.cep).indexOf(payload.cep);

            if (index !== -1)
                cepList.splice(index, 1);

            cepList.unshift(payload);

            if (cepList.length > 10)
                cepList.splice(10, cepList.length - 10);

            localStorage.setItem('cepList', JSON.stringify(cepList));

            return {
                cepList,
                currentCep: payload,
                loading: false,
                error: ErrorType.Ok
            };

        case ActionEnum.START:
            return { ...state, loading: payload, error: ErrorType.Ok };

        case ActionEnum.ERROR:
            return { ...state, currentCep: undefined, loading: false, error: payload };

        default:
            throw new Error('Unexpected action');
    }
};
