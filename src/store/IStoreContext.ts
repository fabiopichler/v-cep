import { IState } from './IState';
import { IActions } from './IActions';

export interface IStoreContext {
    state: IState;
    actions: IActions;
}
