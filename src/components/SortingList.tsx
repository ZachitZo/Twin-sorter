import { useContext } from 'react';
import { ElementListData } from '../App';

import sortingListStyles from '../styles/module/SortingListStyles.module.scss'
import listStyles from '../styles/module/listStyles.module.scss'
import buttonStyles from '../styles/module/ButtonStyles.module.scss'

interface SortingListProps {
    elements: Array<string>,
    setFn: (elements: Array<string>) => void,
}

const SortingList = (props: SortingListProps) => {
    const elementsData = useContext(ElementListData);

    const addElement = (): void => {
        if (elementsData.elements.length) {
            const addedElement = elementsData.elements[elementsData.elements.length - 1];

            props.setFn([...props.elements, addedElement]);
            elementsData.setElements(elementsData.elements.slice(0, -1));
        }
    };

    const deleteElement = (element: string): void => {
      props.setFn([...props.elements.filter(el => el !== element)]);
      elementsData.setElements([...elementsData.elements, element]);
    };

    return (
        <div className={sortingListStyles.sortingListContainer}>
            <button
                className={`${buttonStyles.button} ${buttonStyles.actionBtn}`}
                onClick={addElement}
                disabled={!elementsData.elements.length}
            >
                Добавить
            </button>
            <div className={listStyles.listContainer}>
                {
                    props.elements.length
                        ? <ul className={listStyles.list}>
                            {props.elements.map((el, idx) =>
                                <li key={idx} className={listStyles.sortedItem}>
                                    <span>{el}</span>
                                    <span>
                                        <button
                                          className={`${buttonStyles.button} ${buttonStyles.deleteBtn}`}
                                          onClick={() => deleteElement(el)}
                                        >
                                            &#10006;
                                        </button>
                                    </span>
                                </li>
                            )}
                        </ul>
                        : <span className={listStyles.empty}>Список пуст...</span>
                }

                <div className={listStyles.description}>
                    <b>Кол-во элементов: {props.elements.length}</b>
                </div>
            </div>
        </div>
    )
}

export default SortingList;
