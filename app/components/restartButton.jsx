import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'


const RestartButton = () => {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-3 sm:py-4 sm:px-4 rounded-full"
        onClick={() => window.location.reload()}>
          <FontAwesomeIcon icon={faRepeat} />
      </button>
    </div>
  );
};

export default RestartButton;