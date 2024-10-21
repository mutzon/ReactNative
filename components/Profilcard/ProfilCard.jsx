import { TouchableOpacity, Text, View, Image } from "react-native";
import { s } from "./Profilcard.style";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export function ProfilCard({
  firstName,
  lastName,
  age,
  isOpenToWork,
  car,
  doSomething,
}) {
  function work() {
    if (isOpenToWork) {
      console.log("I want to work");
    } else {
      console.log("I Dont want to work");
    }
  }
  /* console.log(props); */
  return (
    <View style={s.container}>
      <View style={s.header}>
        <View>
          <Image
            style={s.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </View>
        <View style={s.texts}>
          <Text style={s.name}>
            {firstName} {lastName}
            {work()}
          </Text>
          <Text>
            Hi I'm a react native developer, I am {age + 20} old let's get in
            touch - that would be great. I have a {car.brand}. Jobsutuation?
          </Text>
        </View>
      </View>

      <View style={s.social}>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="twitter-square" size={24} color="#1da1f2" />
        </TouchableOpacity>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="linkedin" size={24} color="#0a66c2" />
        </TouchableOpacity>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="github-square" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}