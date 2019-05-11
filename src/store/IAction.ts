import { ActionEnum } from './ActionEnum';

export interface IAction {
    type: ActionEnum;
    payload: any;
}
