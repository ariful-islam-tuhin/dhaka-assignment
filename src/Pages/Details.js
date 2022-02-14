import {React, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const Details = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  const history = useHistory();
  useEffect(() => {
    const url = `data.json${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  const handleClick = () => {
    history.push("/allofyou");
  };
  return (
    <div>
      <h2>friend detail {friendId}</h2>
      <h2> {friend.header}</h2>
     
      <button onClick={handleClick}>see all products</button>
    </div>
  );
};

export default Details;