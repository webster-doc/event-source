import { useState } from 'react';
import {UseSwitch} from './types'



export const useSwitch:UseSwitch = (initialState = false) => {
    const [switchState, setSwitchState] = useState<boolean>(initialState);

    const on = () => setSwitchState(true);
    const off = () => setSwitchState(false);

    return [switchState, on, off];
};
