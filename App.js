import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ProfilCard } from "./components/Profilcard/ProfilCard";
import { Alert, Linking, Text } from "react-native";
import { useState } from "react";

export default function App() {
  function goToSocialMedia(socialMedia) {
    let url;

    switch (socialMedia) {
      case "twitter":
        url = "https://github.com/mutzon/ReactNative/";
        break;

      case "github":
        url = "https://github.com/mutzon/ReactNative/";
        break;

      case "linkedn":
        url = "https://github.com/mutzon/ReactNative/";
        break;
    }
    Linking.openURL(url);
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <ProfilCard
          onPressSocialMediaIcon={goToSocialMedia}
          firstName={"martin"}
          lastName={"utzon"}
          age={39}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
