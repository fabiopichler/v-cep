import React from 'react';
import Moment from 'react-moment';

import { IHomeContentProps } from './IHomeContentProps';

const HomeContent: React.FC<IHomeContentProps> = ({ cep, showDate }) => (
    <div className="card teal lighten-4">
        <div className="card-content teal-text text-darken-4">
            <span className="card-title">CEP: {cep.cep}</span>

            {showDate ? (
                <p>
                    Pesquisado <Moment fromNow withTitle titleFormat="LLL" date={cep.date} />
                </p>
            ) : null}

            <p>
                <strong>Logradouro:</strong> {cep.logradouro} {cep.complemento ? `- ${cep.complemento}` : ''}
            </p>

            <p>
                <strong>Bairro:</strong> {cep.bairro}
            </p>

            <p>
                <strong>Cidade/Estado:</strong> {cep.localidade}/{cep.uf}
            </p>
        </div>
    </div>
);

export default HomeContent;
