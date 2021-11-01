import React from 'react';
import { useSelector } from 'react-redux';

import { ADD_PLAYER_DIALOG_ID } from '@app/constants/dialog';
import Dialog from '@app/components/core/dialog/DialogComponent';

const MAP_DIALOGS = [
    {
        id: ADD_PLAYER_DIALOG_ID,
        children: <div/>,
    },
];

const storePropsSelector = ({ dialog }) => ({
    dialogId: dialog.id,
});

const DialogComponent = () => {
    const { dialogId } = useSelector(storePropsSelector);
    const dialog = MAP_DIALOGS.find((d) => d.id === dialogId);
    if (!dialog) {
        return null;
    }

    return (
        <Dialog
            children={dialog.children}
        />
    );
};

export default DialogComponent;
