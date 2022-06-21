import Toast from "react-native-toast-message";
export const addToast = (message, isError) => {
  Toast.show({
    type: isError ? "error" : "success",
    position: "top",
    text1: isError ? "Error" : "Success 🎉",
    text2: message,
    visibilityTime: 3000,
  });
};
