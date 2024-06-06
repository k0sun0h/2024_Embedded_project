import React, { useState } from 'react'; // 리액트와 useState 훅을 임포트
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'; // 필요한 리액트 네이티브 컴포넌트들을 임포트
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage를 임포트

export default function PasswordSettingScreen() { // PasswordSettingScreen 컴포넌트를 정의
  const [password, setPassword] = useState(''); // 비밀번호 상태를 정의

  const handlePasswordChange = (text) => { // 비밀번호 변경 핸들러 함수 정의
    setPassword(text); // 비밀번호 상태를 업데이트
  };

  const savePassword = async () => { // 비밀번호 저장 함수 정의
    try {
      await AsyncStorage.setItem('password', password); // 비밀번호를 AsyncStorage에 저장
      alert('비밀번호가 저장되었습니다.'); // 성공 메시지 표시
    } catch (error) {
      console.error('Error saving password', error); // 에러가 발생하면 콘솔에 출력
    }
  };

  return (
    <View style={styles.container}> {/* 컨테이너 뷰 */}
      <Text>비밀번호 설정</Text> {/* 비밀번호 설정 텍스트 */}
      <TextInput
        placeholder="비밀번호 4-12자리를 입력하세요" // 플레이스홀더 텍스트
        value={password} // 비밀번호 상태값
        onChangeText={handlePasswordChange} // 텍스트 변경 핸들러
        secureTextEntry // 비밀번호 입력 필드 설정
        style={styles.input} // 입력 필드 스타일
      />
      <Button title="저장" onPress={savePassword} /> {/* 저장 버튼 */}
    </View>
  );
}

const styles = StyleSheet.create({ // 스타일시트 정의
  container: { // 컨테이너 스타일
    flex: 1, // 전체 화면을 채우도록 설정
    justifyContent: 'center', // 세로 방향 중앙 정렬
    alignItems: 'center', // 가로 방향 중앙 정렬
  },
  input: { // 입력 필드 스타일
    height: 40, // 높이 40
    borderColor: 'gray', // 테두리 색상 회색
    borderWidth: 1, // 테두리 두께 1
    marginBottom: 20, // 아래 여백 20
    width: '80%', // 너비 80%
  },
});
