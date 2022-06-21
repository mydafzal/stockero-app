import { View, ActivityIndicator, Modal } from "react-native";
import React from "react";

const Loader = ({ isLoading }) => {
  return (
    <Modal animationType="slide" transparent={isLoading} visible={isLoading}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <ActivityIndicator size="large" color="blue" animating />
      </View>
    </Modal>
  );
};

export default Loader;
