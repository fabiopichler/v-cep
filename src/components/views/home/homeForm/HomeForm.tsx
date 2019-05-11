import React, { useState } from 'react';

import './homeForm.scss';

import { useStoreContext } from '../../../../store/StoreContext';
import { ErrorType } from '../../../../store/ErrorType';

const HomeForm: React.FC = () => {

    const {
        state: {
            loading,
            error
        },
        actions: {
            checkCep
        }
    } = useStoreContext();

    const [cep, setCep] = useState<string>('');
    const [currentSearch, setCurrentSearch] = useState<string>('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        setCurrentSearch(cep);
        checkCep(cep);
    }

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value.replace(/[^\d]/g, '');

        if (value.length > 8)
            return;

        setCep(value.replace(/(\d{5})(\d)/, '$1-$2'));
    }

    return (
        <form onSubmit={onSubmit} className="home-form">
            <div>
                <input
                    value={cep}
                    onChange={onTextChange}
                    type="text"
                    placeholder="Insira um CEP"
                    className="input-text blue-grey lighten-5"
                    autoFocus
                />

                <button
                    disabled={cep.length !== 9 || loading}
                    type="submit"
                    className="btn waves-effect waves-light"
                >
                    <i className="material-icons right">send</i>
                </button>
            </div>

            {loading ? (
                <div className="info teal-text text-darken-1">Carregando...</div>

            ) : error === ErrorType.NotFound ? (
                <div className="info error">A pesquisa por {currentSearch} não retornou resultados</div>

            ) : error === ErrorType.Error ? (
                <div className="info error">Erro ao realizar a consulta</div>

            ) : null}
        </form>
    );
}

export default HomeForm;
