import { useState, createContext } from 'react'

import './styles/index.scss'
import appStyles from './styles/module/AppStyles.module.scss'

import ElementList from './components/ElementList'
import TwinSorter from "./components/TwinSorter";

interface ContextData {
    elements: Array<string>,
    setElements: (elements: Array<string>) => void,
}

export const ElementListData = createContext<ContextData>({
    elements: [],
    setElements: () => {},
});

function App() {
    const [elements, setElements] = useState<Array<string>>([
        'Кошка',
        'Собака',
        'Тигр',
        'Курица',
        'Волк',
        'Медведь',
        'Лиса'
    ]);

    return (
        <ElementListData.Provider value={{elements, setElements}}>
            <div className={appStyles.appContainer}>
                <ElementList />
                <TwinSorter />
            </div>
        </ElementListData.Provider>
    )
}

export default App
