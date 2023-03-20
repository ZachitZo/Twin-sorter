import sortingActionsStyles from '../styles/module/SortingActionsStyles.module.scss';
import buttonStyles from '../styles/module/ButtonStyles.module.scss';

interface SortingActionsProps {
    moveRight: () => void,
    moveLeft: () => void,
}

const SortingActions = (props: SortingActionsProps) => {
    return (
        <div className={sortingActionsStyles.actionsContainer}>
            <button
                className={buttonStyles.button}
                onClick={props.moveRight}
            >
                {'>>>'}
            </button>
            <button
                className={buttonStyles.button}
                onClick={props.moveLeft}
            >
                {'<<<'}
            </button>
        </div>
    )
};

export default SortingActions;
