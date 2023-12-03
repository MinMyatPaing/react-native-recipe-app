const { ActivityIndicator } = require("react-native");
const { View } = require("react-native");

function Loader(props) {
  return (
    <View className="flex-1 flex justify-center items-center">
      <ActivityIndicator {...props} />
    </View>
  );
}

export default Loader;
