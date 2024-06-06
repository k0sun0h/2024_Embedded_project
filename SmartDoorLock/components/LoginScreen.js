import React, { useState } from 'react'; // 리액트와 useState 훅을 임포트
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'; // 필요한 리액트 네이티브 컴포넌트들을 임포트
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage를 임포트

export default function LoginScreen({ navigation }) { // LoginScreen 컴포넌트를 정의
  const [password, setPassword] = useState(''); // 비밀번호 상태를 정의

  const handleLogin = async () => { // 로그인 함수 정의
    try {
      const savedPassword = await AsyncStorage.getItem('password'); // 저장된 비밀번호 가져오기
      if (password === savedPassword) { // 입력된 비밀번호와 저장된 비밀번호가 일치하는지 확인
        navigation.navigate('Home'); // 홈 스크린으로 이동
      } else {
        alert('비밀번호가 일치하지 않습니다.'); // 비밀번호가 일치하지 않을 때 알림
      }
    } catch (error) {
      console.error('Error retrieving password', error); // 에러가 발생하면 콘솔에 출력
    }
  };

  return (
    <View style={styles.container}> {/* 컨테이너 뷰 */}
      <Text style={styles.title}>로그인</Text> {/* 로그인 타이틀 */}
      <TextInput
        placeholder="비밀번호" // 플레이스홀더 텍스트
        value={password} // 비밀번호 상태값
        onChangeText={setPassword} // 텍스트 변경 핸들러
        secureTextEntry // 비밀번호 입력 필드 설정
        style={styles.input} // 입력 필드 스타일
      />
      <Button title="로그인" onPress={handleLogin} /> {/* 로그인 버튼 */}
    </View>
  );
}

const styles = StyleSheet.create({ // 스타일시트 정의
  container: { // 컨테이너 스타일
    flex: 1, // 전체 화면을 채우도록 설정
    justifyContent: 'center', // 세로 방향 중앙 정렬
    alignItems: 'center', // 가로 방향 중앙 정렬
    padding: 20, // 패딩 20
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
    paddingHorizontal: 10, // 수평 패딩 10
  },
});
