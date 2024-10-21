import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ProfilCard } from "./components/Profilcard/ProfilCard";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <ProfilCard
          firstName={"Martin"}
          lastName={"utzon"}
          age={30}
          isOpenToWork={true}
          car={{ brand: "Mustang", maxSpeed: 200 }}
          doSomething={function () {
            console.log("Hello");
          }}
        ></ProfilCard>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
