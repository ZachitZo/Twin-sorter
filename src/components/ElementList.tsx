import { useMemo, useContext } from 'react';
import { ElementListData } from '../App';

import listStyles from '../styles/module/listStyles.module.scss'

const ElementList = () => {
    const elementsData = useContext(ElementListData);
    const elementsStartCount = useMemo(() => elementsData.elements.length, []);

    return (
        <div className={listStyles.listContainer}>
            {
                elementsData.elements.length
                    ? <ul className={listStyles.list}>
                        {elementsData.elements.map((el, idx) =>
                          <li key={idx}>{el}</li>
                        )}
                    </ul>
                    : <span className={listStyles.empty}>Список пуст...</span>
            }
            <div className={listStyles.description}>
                <b>Начальное кол-во элементов: {elementsStartCount}</b>
            </div>
        </div>
    )
}

export default ElementList;
