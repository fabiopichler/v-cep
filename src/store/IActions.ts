
export interface IActions {
    init(): void;
    checkCep(cep: string): Promise<void>;
}
