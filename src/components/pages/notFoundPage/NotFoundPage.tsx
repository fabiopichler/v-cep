import React, { useEffect } from 'react';

import { setPageTitle } from '../../../helpers/system';

import H4 from '../../common/h4/H4';

const NotFoundPage: React.FC = () => {

    useEffect(() => {
        setPageTitle('Página não encontrada');
    }, []);

    return (
        <div className="container">
            <H4>Página não encontrada</H4>

            <p>
                A página que você está tentando acessar não foi encontrada.
            </p>

            <p>
                Talvez ela nunca tenha existido ou tenha sido removida.
            </p>
        </div>
    );
};

export default NotFoundPage;
