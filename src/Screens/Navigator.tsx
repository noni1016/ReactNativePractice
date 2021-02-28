import React from 'react';
import {Alert, Image, requireNativeComponent, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
    createStackNavigator,
    StackHeaderLeftButtonProps,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    DrawerContentComponentProps,
    DrawerContentOptions,
    DrawerNavigationProp,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Hello from '~/Hello';
import MyFeed from '~/Screens/MyFeed';
import SearchBar from '~/Components/SearchBar';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const DefaultScreen = () => {
    return <Text>DefaultScreen</Text>
};

const MyFeedTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
              name="MyFeed"
              component={MyFeed}
              options={{title: 'SNS App'}}
            />
        </Stack.Navigator>
    )
}

const FeedsTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
              name="Feeds"
              component={DefaultScreen}
            //   options={{
            //       header: () => <SearchBar />
            //   }}
            />
            <Stack.Screen
              name="FeedListOnly"
              component={DefaultScreen}
            />
        </Stack.Navigator>
    )
}

const UploadTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
              name="Upload"
              component={DefaultScreen}
            />
        </Stack.Navigator>
    )
}



const ProfileTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
              name="Profile"
              component={DefaultScreen}
            />
        </Stack.Navigator>
    )
}


const MainTab = () => {
    return (
        <Tab.Navigator tabBarOptions={{showLabel: false}}>
            <Tab.Screen
              name="MyFeed"
              component={MyFeedTab}
              options={{
                //   tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />
                tabBarIcon: ({focused}) => (
                    <Image
                      source = {
                          focused
                            ? require('~Assets/Images/Tabs/ic_home.png')
                            : require('~/Assets/Images/Tabs/ic_home_outline.png')
                      }
                    />
                )
              }}
            />
            <Tab.Screen
              name="Feeds"
              component={FeedsTab}
              options={{
                tabBarIcon: ({focused}) => (
                    <Image
                        source = {
                            focused
                              ? require('~Assets/Images/Tabs/ic_search.png')
                              : require('~/Assets/Images/Tabs/ic_search_outline.png')
                        }
                    />
                  )
              }}
            />
            <Tab.Screen
              name="Upload"
              component={UploadTab}
              options={{
                tabBarIcon: ({focused}) => (
                    <Image
                        source = {
                            focused
                              ? require('~Assets/Images/Tabs/ic_add.png')
                              : require('~/Assets/Images/Tabs/ic_add_outline.png')
                        }
                    />
                  )
              }}
            />
            <Tab.Screen
              name="Notification"
              component={DefaultScreen}
              options={{
                tabBarIcon: ({focused}) => (
                    <Image
                        source = {
                            focused
                              ? require('~Assets/Images/Tabs/ic_favorite.png')
                              : require('~/Assets/Images/Tabs/ic_favorite_outline.png')
                        }
                    />
                  )
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileTab}
              options={{
                tabBarIcon: ({focused}) => (
                    <Image
                        source = {
                            focused
                              ? require('~Assets/Images/Tabs/ic_profile.png')
                              : require('~/Assets/Images/Tabs/ic_profile_outline.png')
                        }
                    />
                  )
              }}
            />
        </Tab.Navigator>
    );
};

const CustomDrawerContent = (
    props: DrawerContentComponentProps<DrawerContentOptions>,
    logout: () => void,
) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="logout" onPress={() => logout()} />
            <DrawerItem label="Info" onPress={() => Alert.alert('info Window')} />
        </DrawerContentScrollView>
    );
};

const MainNavi = () => {
    const logout = () => {};
    return (
        <Drawer.Navigator 
         drawerContent={props => CustomDrawerContent(props, logout)}
         drawerPosition="right">
            <Drawer.Screen name="사진" component={MainTab} />
            <Drawer.Screen name="라이브" component={DefaultScreen} />
            <Drawer.Screen name="팔로워" component={DefaultScreen} />
        </Drawer.Navigator>
    );
};

const LoginStackNavi = () => {
    return <Text>LoginStackNavi</Text>
}

const Navigator = () => {
    var userInfo = true;
    return (
        <NavigationContainer>
            {userInfo? <MainNavi /> : <LoginStackNavi />}
            {/* <MyFeedTab /> */}
        </NavigationContainer>
    )

}

export default Navigator;