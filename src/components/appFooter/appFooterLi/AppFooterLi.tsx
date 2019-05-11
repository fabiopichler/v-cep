import React from 'react';

import { IAppFooterLiProps } from './IAppFooterLiProps';

const AppFooterLi: React.FC<IAppFooterLiProps> = ({ href, children }) => (
    <li>
        <a
            href={href}
            className="grey-text text-lighten-3"
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    </li>
);

export default AppFooterLi;
