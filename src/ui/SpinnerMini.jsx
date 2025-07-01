import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SpinnerMini() {
  return (
    <div className="animate-spin">
      <FontAwesomeIcon icon={faCircleNotch} />
    </div>
  );
}
