import React from 'react';

import './h4.scss';

import { IH4Props } from './IH4Props';

const H4: React.FC<IH4Props> = ({ children, description }) => (
    <div className="h4">
        <h4>{children}</h4>

        {description ? (
            <p>» {description}</p>
        ) : null}
    </div>
);

export default H4;
