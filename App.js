import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ProfilCard } from "./components/Profilcard/ProfilCard";
import { Alert, Text } from "react-native";
import { useState } from "react";

export default function App() {
  const [countClick, setCountClick] = useState(0);

  function hello(name) {
    Alert.alert("Hello!  " + name);
    setCountClick(countClick + 1);
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <ProfilCard
          onPressTitle={hello}
          firstName={"martin"}
          lastName={"utzon"}
          age={39}
        />

        <Text>You clicked {countClick} times on the title</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
