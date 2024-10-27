import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";

export function AgeCounter() {
  const [smuk, setAge] = useState(10);

  function increaseAge() {
    setAge(smuk + 1);
  }
  console.log("I render" + smuk);
  return (
    <>
      <TouchableOpacity
        onPress={increaseAge}
        style={{ backgroundColor: "#00A2ff" }}
      >
        <Text style={{ fontSize: 40, color: "white" }}>Increase age</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 40 }}>I am {smuk} years old</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </>
  );
}
