import React from 'react'; // 리액트를 임포트
import { View, Button, StyleSheet } from 'react-native'; // 뷰, 버튼, 스타일시트 컴포넌트 임포트

export default function MainScreen({ navigation }) { // MainScreen 컴포넌트 정의
  return (
    <View style={styles.container}> {/* 컨테이너 뷰 */}
      <Button title="사용자 설정" onPress={() => { /* 사용자 설정 기능 */ }} /> {/* 사용자 설정 버튼 */}
      <Button title="알림 확인" onPress={() => { /* 알림 기능 */ }} /> {/* 알림 확인 버튼 */}
      <Button title="Quick On/Off" onPress={() => { /* Quick On/Off 기능 */ }} /> {/* Quick On/Off 버튼 */}
    </View>
  );
}

const styles = StyleSheet.create({ // 스타일시트 정의
  container: { // 컨테이너 뷰 스타일
    flex: 1,
    justifyContent: 'center', // 세로 방향으로 중앙 정렬
    alignItems: 'center', // 가로 방향으로 중앙 정렬
  },
});
