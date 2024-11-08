import PropTypes from 'prop-types';
import './Destination.css';

function Destination(props) {
    
    return (
        <div className='destination-container'>
            <li className='destination-card'>
                <p>Destination: { props.destination.name }</p>
                <p>Aktiviteter: { props.destination.activity } </p>
            </li>
        </div>
    );
}

Destination.propTypes = {
    destination: PropTypes.shape({
        name: PropTypes.string.isRequired,
        activity: PropTypes.string.isRequired,
    }).isRequired,
};

export default Destination;