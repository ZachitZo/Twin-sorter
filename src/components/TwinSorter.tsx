import { useState } from 'react';

import twinSorterStyles from '../styles/module/TwinSorterStyles.module.scss';

import SortingList from './SortingList';
import SortingActions from './SortingActions';

const TwinSorter = () => {
    const [leftListElements, setLeftListElements] = useState<Array<string>>([]);
    const [rightListElements, setRightListElements] = useState<Array<string>>([]);

    const moveElementToRight = () => {
        if (leftListElements.length) {
            const movedElement = leftListElements[leftListElements.length - 1];
            setRightListElements([...rightListElements, movedElement]);
            setLeftListElements([...leftListElements.slice(0, -1)]);
        }
    };

    const moveElementToLeft = () => {
        if (rightListElements.length) {
            const movedElement = rightListElements[rightListElements.length - 1];
            setLeftListElements([...leftListElements, movedElement]);
            setRightListElements([...rightListElements.slice(0, -1)]);
        }
    };

    return (
        <div className={twinSorterStyles.sorterContainer}>
            <SortingList
                key="left"
                elements={leftListElements}
                setFn={setLeftListElements}
            />
            <SortingActions
                moveRight={moveElementToRight}
                moveLeft={moveElementToLeft}
                rightElements={rightListElements}
                leftElements={leftListElements}
            />
            <SortingList
                key="right"
                elements={rightListElements}
                setFn={setRightListElements}
            />
        </div>
    )
}

export default TwinSorter;
