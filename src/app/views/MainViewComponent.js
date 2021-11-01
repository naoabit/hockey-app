import React from 'react';

import Page from '@app/components/core/page/PageComponent';
import Header from '@app/components/header/HeaderComponent';
import Team from '@app/components/team/TeamComponent';
import Dialog from '@app/components/dialog/DialogComponent';
import Overlay from '@app/components/core/overlay/OverlayComponent';

const MainView = () => (
    <Page>
        <Header />
        <Team />
        <Dialog />
        <Overlay />
    </Page>
);

export default MainView;
