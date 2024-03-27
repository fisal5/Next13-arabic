import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';



const HomeButton = () => {
  return (
    <div>
      <Link href="/">
        <div>
        <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-3 sm:py-4 sm:px-4 rounded-full">
          <FontAwesomeIcon icon={faHome} />
        </button>
        </div>
      </Link>
    </div>
  );
};

export default HomeButton;



/* const HomeButton = () => {
    return (
      <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-4 px-4 rounded-full">
        <FontAwesomeIcon icon={faHome} />
      </button>
    )
  };
  
export default HomeButton;*/
  