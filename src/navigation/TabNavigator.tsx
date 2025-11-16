// src/navigation/TabNavigator.tsx

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DogScreen from '../screens/DogScreen';
import CatScreen from '../screens/CatScreen';
import FoxScreen from '../screens/FoxScreen';
import BunnyScreen from '../screens/BunnyScreen';
import DuckScreen from '../screens/DuckScreen';
import BearScreen from '../screens/BearScreen';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Perros"
        component={DogScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size + 6, color }}>🐶</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Gatos"
        component={CatScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size + 6, color }}>🐱</Text>
          ),
          tabBarActiveTintColor: '#9B59B6',
        }}
      />
      <Tab.Screen
        name="Zorros"
        component={FoxScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size + 6, color }}>🦊</Text>
          ),
          tabBarActiveTintColor: '#FF8C42',
        }}
      />
      <Tab.Screen
        name="Conejos"
        component={BunnyScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size + 6, color }}>🐰</Text>
          ),
          tabBarActiveTintColor: '#E91E63',
        }}
      />
      <Tab.Screen
        name="Patos"
        component={DuckScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size + 6, color }}>🦆</Text>
          ),
          tabBarActiveTintColor: '#FFC107',
        }}
      />
      <Tab.Screen
        name="Osos"
        component={BearScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size + 6, color }}>🐻</Text>
          ),
          tabBarActiveTintColor: '#8D6E63',
        }}
      />
    </Tab.Navigator>
  );
}