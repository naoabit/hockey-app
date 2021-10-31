import React from 'react';

import Page from '@app/components/core/page/PageComponent';
import Header from '@app/components/header/HeaderComponent';
import Team from '@app/components/team/TeamComponent';

const MainView = () => (
    <Page>
        <Header />
        <Team />
    </Page>
);

export default MainView;
