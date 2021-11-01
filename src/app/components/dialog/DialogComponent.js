import React from 'react';
import { useSelector } from 'react-redux';

import { ADD_PLAYER_DIALOG_ID } from '@app/constants/dialog';
import DialogCore from '@app/components/core/dialog/DialogComponent';
import AddPlayerDialog from '@app/components/addPlayerDialog/AddPlayerDialogComponent';

const MAP_DIALOGS = [
    {
        id: ADD_PLAYER_DIALOG_ID,
        children: <AddPlayerDialog/>,
    },
];

const storePropsSelector = ({ dialog }) => ({
    dialogId: dialog.id,
});

const Dialog = () => {
    const { dialogId } = useSelector(storePropsSelector);
    const dialog = MAP_DIALOGS.find((d) => d.id === dialogId);
    if (!dialog) {
        return null;
    }

    return (
        <DialogCore
            children={dialog.children}
        />
    );
};

export default Dialog;
