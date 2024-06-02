import React, { useState } from 'react'; // 리액트와 useState 훅 임포트
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'; // 뷰, 텍스트, 텍스트 입력, 버튼, 스타일시트 컴포넌트 임포트

export default function PasswordSettingScreen() { // PasswordSettingScreen 컴포넌트 정의
  const [password, setPassword] = useState(''); // 비밀번호 상태 정의

  const handlePasswordChange = (text) => { // 비밀번호 변경 핸들러
    setPassword(text); // 비밀번호 상태 업데이트
  };

  const savePassword = () => { // 비밀번호 저장 함수
    // 비밀번호 저장 로직
  };

  return (
    <View style={styles.container}> {/* 컨테이너 뷰 */}
      <Text>비밀번호 설정</Text> {/* 비밀번호 설정 텍스트 */}
      <TextInput
        placeholder="최대 12자리"
        value={password} // 텍스트 입력값 설정
        onChangeText={handlePasswordChange} // 텍스트 입력값 변경 핸들러
        secureTextEntry // 비밀번호 입력 형태
        style={styles.input} // 입력 필드 스타일
      />
      <Button title="저장" onPress={savePassword} /> {/* 저장 버튼 */}
    </View>
  );
}

const styles = StyleSheet.create({ // 스타일시트 정의
  container: { // 컨테이너 뷰 스타일
    flex: 1,
    justifyContent: 'center', // 세로 방향으로 중앙 정렬
    alignItems: 'center', // 가로 방향으로 중앙 정렬
  },
  input: { // 입력 필드 스타일
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%', // 너비 80%
  },
});
