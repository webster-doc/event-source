import { useState } from 'react';
import {UseArray} from './types'

const isObjectEmpty = (object: object) => {
    return Object.keys(object).length === 0
}

export const useArray:UseArray = (initialState = []) => {
    const [array, setArray] = useState(initialState);

    const push = (element) => {
        setArray((prevValue) => {
            return [...prevValue, element]
        });
    };

    const remove = ({
                     index,
                     value
                    }:{index?: number, value: object}) => {

        setArray(prevValue => prevValue.filter((arrayItem, i) => {

            if (!isObjectEmpty(value)) {
                const [key, valueForRemove] = Object.entries(value)[0]

                return Boolean(arrayItem[key]) && arrayItem[key] !== valueForRemove
            } else if(index) {
                return i !== index
            }

        }));


    };

    const isEmpty = () => array.length === 0;

    return [array, push, remove, isEmpty];
};