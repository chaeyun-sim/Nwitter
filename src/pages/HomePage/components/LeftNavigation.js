import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyWindow } from "@fortawesome/free-solid-svg-icons";
import { BiSearch } from "react-icons/bi";
import { FiBell, FiBookmark } from "react-icons/fi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { BsFileText, BsPerson } from "react-icons/bs";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { RiQuillPenLine } from "react-icons/ri";
import { Add, LeftNav } from "../Styles";

const LeftNavigation = () => {
  return (
    <LeftNav>
      <FontAwesomeIcon
        icon={faHouseChimneyWindow}
        size="2x"
        style={{ cursor: "pointer" }}
      />
      <BiSearch
        size="27"
        style={{ cursor: "pointer" }}
      />
      <FiBell
        size="27"
        style={{ cursor: "pointer" }}
      />
      <RxEnvelopeClosed
        size="25"
        style={{ cursor: "pointer" }}
      />
      <BsFileText
        size="27"
        style={{ cursor: "pointer" }}
      />
      <FiBookmark
        size="27"
        style={{ cursor: "pointer" }}
      />
      <BsPerson
        size="27"
        style={{ cursor: "pointer" }}
      />
      <HiOutlineDotsCircleHorizontal
        size="27"
        style={{ cursor: "pointer" }}
      />
      <Add>
        <RiQuillPenLine
          color="white"
          size="24"
        />
      </Add>
    </LeftNav>
  );
};

export default LeftNavigation;
