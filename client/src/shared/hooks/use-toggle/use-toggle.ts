import { useState } from 'react';
import {UseToggle} from './types'


export const useToggle:UseToggle = (initialState = false) => {
    const [visible, setVisibility] = useState(initialState);

    const toggle = () => setVisibility((prev) => !prev);

    const setToggleStatus = (newState: boolean) => setVisibility(newState);

    return [visible, toggle, setToggleStatus];
};
