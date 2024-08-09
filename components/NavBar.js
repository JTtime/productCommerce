import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductCategoryScreen from '../Screens/ProductCategory';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from '../Screens/Product';
import SearchScreen from '../Screens/SearchScreen';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Feed = () => {
  return (
    <View>
     <Text>Working in Progress.....</Text>
    </View>
  );
};
export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Products"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
          headerShown: false, 
      }}
    >
      <Tab.Screen
        name="Orders"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="receipt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductCategoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Price"
        component={Feed}
        options={{
          tabBarLabel: 'price',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="currency-usd" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Feed}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
       <Stack.Screen
            name="ProductDetail"
            component={ProductScreen}
            options={{ title: "Product Details" }}
          />
        <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{ title: "Product Details" }}
          />
          
    </Tab.Navigator>
  );
}