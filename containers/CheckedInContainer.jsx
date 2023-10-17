import React, { useEffect, useState } from "react";
import CheckInList from "../components/CheckInList";
import { useFocusEffect } from "@react-navigation/native";

const CheckedInContainer = ({navigation}) => {
  const [checkedIns, setCheckedIns] = useState([]);
  const BASE_URL = "http://localhost:8080"; 

  useFocusEffect(
    React.useCallback(() => {
      fetchCheckedIns();
      console.log("focus effect")
    }, [])
  );

  const fetchCheckedIns = () => {
    fetch(BASE_URL + "/users/21/checked_ins")
      .then((response) => response.json())
      .then((checkIns) => setCheckedIns(checkIns))

  };

  return (
    <CheckInList checkedIns={checkedIns} navigation={navigation}/>
  );
};

export default CheckedInContainer;
