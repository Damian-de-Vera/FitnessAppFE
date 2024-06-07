import CreateExerciseScreen from "@/screens/profile/CreateExerciseScreen";
import MyRoutine from "@/screens/profile/MyRoutineScreen";
import ProfileScreen from "@/screens/profile/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="My profile" component={ProfileScreen} />
      <Tab.Screen name="Create Exercises" component={CreateExerciseScreen} />
      <Tab.Screen name="Routines" component={MyRoutine} />
    </Tab.Navigator>
  );
}
