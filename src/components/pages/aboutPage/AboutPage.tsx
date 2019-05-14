import React, { useEffect } from 'react';

import { setPageTitle } from '../../../helpers/system';

import H4 from '../../common/h4/H4';

const AboutPage: React.FC = () => {

    useEffect(() => {
        setPageTitle('Sobre');
    }, []);

    return (
        <div className="container">
            <H4>Sobre o V-CEP</H4>

            <p>O V-CEP é um aplicativo especialmente desenvolvido para a consulta de CEPs de todo o Brasil.</p>

            <p>Pesquise por qualquer CEP e terá o resultado imediatamente, dum jeito muito rápido e fácil.</p>

            <p>O V-CEP é um aplicativo open source, totalmente gratuito e que utiliza os serviços do webservice ViaCEP.</p>
        </div>
    );
};

export default AboutPage;
