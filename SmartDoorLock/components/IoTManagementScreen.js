import React from 'react'; // 리액트를 임포트
import { View, Text, Button, StyleSheet } from 'react-native'; // 뷰, 텍스트, 버튼, 스타일시트 컴포넌트 임포트

export default function IoTManagementScreen() { // IoTManagementScreen 컴포넌트 정의
  const connectDevice = () => { // 기기 연결 함수
    // IoT 기기 연결 로직
  };

  return (
    <View style={styles.container}> {/* 컨테이너 뷰 */}
      <Text>IoT 연결 관리</Text> {/* IoT 연결 관리 텍스트 */}
      <Button title="기기 연결" onPress={connectDevice} /> {/* 기기 연결 버튼 */}
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
