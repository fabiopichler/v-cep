import React from 'react';

import AppFooterLi from './appFooterLi/AppFooterLi';

const AppFooter: React.FC = () => (
    <footer className="page-footer grey darken-1">
        <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text">ViaCEP</h5>

                    <p className="grey-text text-lighten-4">Todas as consultas realizadas atravéz do V-CEP são servidas pelo webservice da ViaCEP.</p>
                </div>

                <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Links</h5>

                    <ul>
                        <AppFooterLi href="https://github.com/fabiopichler/v-cep">GitHub</AppFooterLi>
                        <AppFooterLi href="https://fabiopichler.net/">Fábio Pichler</AppFooterLi>
                        <AppFooterLi href="https://viacep.com.br/">ViaCEP</AppFooterLi>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright grey darken-2">
            <div className="container">
                V-CEP © 2019, <a href="https://fabiopichler.net/" className="grey-text text-lighten-3">Fábio Pichler</a>
            </div>
        </div>
    </footer>
);

export default AppFooter;
