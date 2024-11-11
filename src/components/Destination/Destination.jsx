import PropTypes from 'prop-types';
import './Destination.css';

function Destination(props) {
    console.log(props);
    
    
    return (
        <div className='destination-container'>
            <li className='destination-card'>
                <p className="destination-name">Destination: { props.destination.name }</p>
                <p className="destination-activity">Aktivitet: {props.destination.activity} </p>
                <span className="remove-button" onClick={props.remove}>
                    X
                </span>
            </li>
        </div>
    );
}

Destination.propTypes = {
    destination: PropTypes.shape({
        name: PropTypes.string.isRequired,
        activity: PropTypes.string.isRequired,
    }).isRequired,
    remove: PropTypes.func.isRequired,
};

export default Destination;