import { ICep } from '../models/ICep';
import { ErrorType } from './ErrorType';

export interface IState {
    cepList: ICep[];
    currentCep?: ICep;
    loading: boolean;
    error: ErrorType;
}
