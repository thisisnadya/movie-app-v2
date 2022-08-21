import { useState } from "react";
import { Form } from "../styled/StyledComponents";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + searchInput);
    setSearchInput("");
  };

  return (
    <Form onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          placeholder="Search"
        />
      </div>
    </Form>
  );
}

export default Search;
