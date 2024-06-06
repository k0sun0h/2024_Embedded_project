import React from 'react'; // 리액트를 임포트
import { View, Button, StyleSheet } from 'react-native'; // 필요한 리액트 네이티브 컴포넌트들을 임포트

export default function MainScreen({ navigation }) { // MainScreen 컴포넌트를 정의
  return (
    <View style={styles.container}> {/* 컨테이너 뷰 */}
      <Button title="비밀번호 설정" onPress={() => navigation.navigate('Password')} /> {/* 비밀번호 설정 버튼 */}
      <Button title="컨셉 설정" onPress={() => navigation.navigate('Concept')} /> {/* 컨셉 설정 버튼 */}
      <Button title="IoT 연결 관리" onPress={() => navigation.navigate('IoT')} /> {/* IoT 연결 관리 버튼 */}
    </View>
  );
}

const styles = StyleSheet.create({ // 스타일시트 정의
  container: { // 컨테이너 스타일
    flex: 1, // 전체 화면을 채우도록 설정
    justifyContent: 'center', // 세로 방향 중앙 정렬
    alignItems: 'center', // 가로 방향 중앙 정렬
  },
});
