import React, { useEffect } from 'react';

import './homePage.scss';

import { setPageTitle } from '../../../helpers/system';
import { useStoreContext } from '../../../store/StoreContext';

import HomeContent from './homeContent/HomeContent';
import HomeForm from './homeForm/HomeForm';
import H4 from '../../common/h4/H4';

const HomePage: React.FC = () => {
    const { state: { cepList, currentCep } } = useStoreContext();

    useEffect(() => {
        setPageTitle();
    }, []);
    
    return (
        <div className="home-view">
            <div className="home-view-container container">
                <HomeForm />
                
                {currentCep ? (
                    <>
                        <H4>Resultado para: {currentCep.cep}</H4>
                        
                        <HomeContent cep={currentCep} />
                    </>
                ) : null}

                <H4>Últimas Pesquisas</H4>

                {cepList.length === 0 ? (
                    <div className="card red accent-1">
                        <div className="card-content white-text">
                            Você ainda não realizou pesquisas de CEP
                        </div>
                    </div>

                ) : cepList.map((cep, index) => (
                    <HomeContent cep={cep} key={index} showDate={true} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
