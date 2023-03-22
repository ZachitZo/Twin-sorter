import sortingActionsStyles from '../styles/module/SortingActionsStyles.module.scss';
import buttonStyles from '../styles/module/ButtonStyles.module.scss';

interface SortingActionsProps {
    moveRight: () => void,
    moveLeft: () => void,
    rightElements: Array<string>,
    leftElements: Array<string>,
}

const SortingActions = (props: SortingActionsProps) => {
    return (
        <div className={sortingActionsStyles.actionsContainer}>
            <button
                className={`${buttonStyles.button} ${buttonStyles.actionBtn}`}
                onClick={props.moveRight}
                disabled={!props.leftElements.length}
            >
                {'>>>'}
            </button>
            <button
                className={`${buttonStyles.button} ${buttonStyles.actionBtn}`}
                onClick={props.moveLeft}
                disabled={!props.rightElements.length}
            >
                {'<<<'}
            </button>
        </div>
    )
};

export default SortingActions;
