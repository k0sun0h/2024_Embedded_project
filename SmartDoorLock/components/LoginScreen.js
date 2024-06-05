import React, { useState } from 'react'; // 리액트와 useState 훅 임포트
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'; // 뷰, 텍스트, 텍스트 입력, 버튼, 스타일시트 컴포넌트 임포트

export default function LoginScreen({ navigation }) { // LoginScreen 컴포넌트 정의
  const [username, setUsername] = useState(''); // 사용자 이름 상태 정의
  const [password, setPassword] = useState(''); // 비밀번호 상태 정의

  const handleLogin = () => { // 로그인 함수 정의
    // 로그인 로직 구현
    navigation.navigate('Home'); // 로그인 후 홈 스크린으로 이동
  };

  return (
    <View style={styles.container}> {/* 컨테이너 뷰 */}
      <Text style={styles.title}>로그인</Text> {/* 로그인 텍스트 */}
      <TextInput
        placeholder="사용자 이름"
        value={username} // 텍스트 입력값 설정
        onChangeText={setUsername} // 텍스트 입력값 변경 핸들러
        style={styles.input} // 입력 필드 스타일
      />
      <TextInput
        placeholder="비밀번호"
        value={password} // 텍스트 입력값 설정
        onChangeText={setPassword} // 텍스트 입력값 변경 핸들러
        secureTextEntry // 비밀번호 입력 형태
        style={styles.input} // 입력 필드 스타일
      />
      <Button title="로그인" onPress={handleLogin} /> {/* 로그인 버튼 */}
    </View>
  );
}

const styles = StyleSheet.create({ // 스타일시트 정의
  container: { // 컨테이너 뷰 스타일
    flex: 1,
    justifyContent: 'center', // 세로 방향으로 중앙 정렬
    alignItems: 'center', // 가로 방향으로 중앙 정렬
    padding: 20, // 여백 20
  },
  title: { // 타이틀 스타일
    fontSize: 24, // 폰트 크기 24
    marginBottom: 20, // 아래 여백 20
  },
  input: { // 입력 필드 스타일
    height: 40, // 높이 40
    borderColor: 'gray', // 테두리 색상 회색
    borderWidth: 1, // 테두리 두께 1
    marginBottom: 20, // 아래 여백 20
    width: '100%', // 너비 100%
    paddingHorizontal: 10, // 가로 여백 10
  },
});
