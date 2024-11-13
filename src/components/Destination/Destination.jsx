import PropTypes from 'prop-types';
import './Destination.css';

function Destination(props) {
    
    return (
        <div className='destination-container'>
            <li className={`destination-card ${props.destination.isCompleted ? 'completed' : ''}`} onClick={props.toggleComplete}>
                <p className="destination-name">Plats: { props.destination.name }</p>
                <p className="destination-activity">Att göra: {props.destination.activity} </p>
                <span className="remove-button" onClick={(e) => {e.stopPropagation(); props.remove();}}>X</span>
                {!props.destination.isCompleted && <p className="done">Klicka för att klarmarkera!</p>}
            </li>
        </div>
    );
}

Destination.propTypes = {
    destination: PropTypes.shape({
        name: PropTypes.string.isRequired,
        activity: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired,
    }).isRequired,
    toggleComplete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

export default Destination;