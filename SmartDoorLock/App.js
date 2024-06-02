import React from 'react'; // 리액트를 임포트
import { NavigationContainer } from '@react-navigation/native'; // 내비게이션 컨테이너 임포트
import AppNavigator from './navigation/AppNavigator'; // 앱 내비게이터 컴포넌트 임포트
import { Image, StyleSheet, View } from 'react-native'; // 이미지, 스타일시트, 뷰 컴포넌트 임포트

export default function App() { // App 컴포넌트 정의
  return (
    <NavigationContainer> {/* 내비게이션 컨테이너로 앱 감싸기 */}
      <View style={styles.container}> {/* 로고와 내비게이터를 포함하는 뷰 */}
        <Image source={require('./assets/icon.png')} style={styles.logo} /> {/* 로고 이미지 표시 */}
        <AppNavigator /> {/* 앱 내비게이터 컴포넌트 */}
      </View>
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
