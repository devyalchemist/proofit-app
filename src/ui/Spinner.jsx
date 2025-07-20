import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Spinner() {
  return (
    <div className="flex h-[100dvh] items-center justify-center">
      <div className="animate-spin">
        <FontAwesomeIcon icon={faCircleNotch} size="4x" />
        {/* 64px (same as original) */}
      </div>
    </div>
  );
}
