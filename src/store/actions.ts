import axios from 'axios';

import { ICep } from '../models/ICep';
import { IAction } from './IAction';
import { IState } from './IState';
import { IActions } from './IActions';
import { ActionEnum } from './ActionEnum';
import { ErrorType } from './ErrorType';

export const useActions = (state: IState, dispatch: React.Dispatch<IAction>): IActions => ({

    init(): void {
        const cepList = localStorage.getItem('cepList');

        if (cepList)
            dispatch({ type: ActionEnum.INIT, payload: JSON.parse(cepList) });
    },

    async checkCep(cep: string): Promise<void> {
        dispatch({ type: ActionEnum.START, payload: true });

        const url: string = `https://viacep.com.br/ws/${cep}/json/unicode/`;

        try {
            const { data } = await axios.get<ICep>(url);

            if (data.erro) {
                dispatch({ type: ActionEnum.ERROR, payload: ErrorType.NotFound });
                return;
            }

            dispatch({
                type: ActionEnum.DONE,
                payload: {
                    ...data,
                    date: new Date()
                }
            });

        } catch (err) {
            dispatch({ type: ActionEnum.ERROR, payload: ErrorType.Error });
        }
    }
});
