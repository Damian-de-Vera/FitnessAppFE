import ExercisesScreen from "@/screens/ExercisesScreen";
import HomeScreen from "@/screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigation from "./TabNavigation";


const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Exercises" component={ExercisesScreen} />
      <Drawer.Screen name="Profile" component={TabNavigation} />
    </Drawer.Navigator>
  );
}
