import React from 'react'; // 리액트를 임포트
import { NavigationContainer } from '@react-navigation/native'; // 내비게이션 컨테이너 임포트
import { createStackNavigator } from '@react-navigation/stack'; // 스택 내비게이터 임포트
import LoginScreen from './components/LoginScreen'; // 로그인 스크린 컴포넌트 임포트
import AppNavigator from './navigation/AppNavigator'; // 앱 내비게이터 컴포넌트 임포트
import { Image, StyleSheet, View } from 'react-native'; // 이미지, 스타일시트, 뷰 컴포넌트 임포트

const Stack = createStackNavigator(); // 스택 내비게이터 생성

export default function App() { // App 컴포넌트 정의
  return (
    <NavigationContainer> {/* 내비게이션 컨테이너로 앱 감싸기 */}
      <Stack.Navigator initialRouteName="Login"> {/* 초기 경로를 로그인으로 설정 */}
        <Stack.Screen name="Login" component={LoginScreen} /> {/* 로그인 스크린 설정 */}
        <Stack.Screen name="Home" component={AppNavigator} /> {/* 홈 스크린 설정 */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({ // 스타일시트 정의
  container: { // 뷰 컨테이너 스타일
    flex: 1,
    alignItems: 'center', // 가로 방향으로 중앙 정렬
    justifyContent: 'center', // 세로 방향으로 중앙 정렬
  },
  logo: { // 로고 이미지 스타일
    width: 150, // 너비 150
    height: 150, // 높이 150
    marginBottom: 20, // 아래 여백 20
  },
});
