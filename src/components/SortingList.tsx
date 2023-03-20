import { useContext } from 'react';
import { ElementListData } from '../App';

import sortingListStyles from '../styles/module/SortingListStyles.module.scss'
import listStyles from '../styles/module/listStyles.module.scss'
import buttonStyles from '../styles/module/ButtonStyles.module.scss'

interface SortingListProps {
    elements: Array<string>,
    addFn: (elements: Array<string>) => void,
}

const SortingList = (props: SortingListProps) => {
    const elementsData = useContext(ElementListData);

    const addElement = (): void => {
        if (elementsData.elements.length) {
            const addedElement = elementsData.elements[elementsData.elements.length - 1];

            props.addFn([...props.elements, addedElement]);
            elementsData.setElements(elementsData.elements.slice(0, -1));
        }
    };

    return (
        <div className={sortingListStyles.sortingListContainer}>
            <button
                className={buttonStyles.button}
                onClick={addElement}
            >
                Добавить
            </button>
            <div className={listStyles.listContainer}>
                <ul className={listStyles.list}>
                    {props.elements.map((el, idx) => <li key={idx}>{el}</li>)}
                </ul>
                <div className={listStyles.description}>
                    Количество элементов: {props.elements.length}
                </div>
            </div>
        </div>
    )
}

export default SortingList;
