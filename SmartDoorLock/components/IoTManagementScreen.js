import React, { useState } from 'react'; // 리액트와 useState 훅을 임포트
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'; // 필요한 리액트 네이티브 컴포넌트들을 임포트

export default function IoTManagementScreen() { // IoTManagementScreen 컴포넌트를 정의
  const [temperatureAC, setTemperatureAC] = useState(''); // 에어컨 온도 상태를 정의
  const [temperatureHeat, setTemperatureHeat] = useState(''); // 난방 온도 상태를 정의
  const [curtainState, setCurtainState] = useState(''); // 커튼 상태를 정의
  const [lightRGB, setLightRGB] = useState(''); // 조명 RGB 값 상태를 정의
  const [tvState, setTvState] = useState(''); // TV 상태를 정의

  const saveSettings = () => { // 설정값 저장 함수 정의
    const settings = { // 설정 객체 생성
      temperatureAC, // 에어컨 온도 설정값
      temperatureHeat, // 난방 온도 설정값
      curtainState, // 커튼 상태 설정값
      lightRGB, // 조명 RGB 값 설정값
      tvState, // TV 상태 설정값
    };
    console.log('Settings saved:', settings); // 설정값 콘솔에 출력
    // 여기서 입력된 설정값을 저장하는 로직 추가
  };

  return (
    <View style={styles.container}> {/* 컨테이너 뷰 */}
      <Text>IoT 설정 관리</Text> {/* IoT 설정 관리 텍스트 */}
      
      <Text>에어컨 설정</Text> {/* 에어컨 설정 텍스트 */}
      <TextInput
        placeholder="온도 입력" // 입력 필드 플레이스홀더
        value={temperatureAC} // 입력 필드 값
        onChangeText={setTemperatureAC} // 텍스트 변경 핸들러
        style={styles.input} // 입력 필드 스타일
        keyboardType="numeric" // 숫자 키보드 사용
      />

      <Text>난방 설정</Text> {/* 난방 설정 텍스트 */}
      <TextInput
        placeholder="온도 입력" // 입력 필드 플레이스홀더
        value={temperatureHeat} // 입력 필드 값
        onChangeText={setTemperatureHeat} // 텍스트 변경 핸들러
        style={styles.input} // 입력 필드 스타일
        keyboardType="numeric" // 숫자 키보드 사용
      />

      <Text>커튼 제어</Text> {/* 커튼 제어 텍스트 */}
      <Button title="열기" onPress={() => setCurtainState('open')} /> {/* 커튼 열기 버튼 */}
      <Button title="닫기" onPress={() => setCurtainState('close')} /> {/* 커튼 닫기 버튼 */}

      <Text>조명 설정</Text> {/* 조명 설정 텍스트 */}
      <TextInput
        placeholder="RGB 값 입력 (0-255)" // 입력 필드 플레이스홀더
        value={lightRGB} // 입력 필드 값
        onChangeText={setLightRGB} // 텍스트 변경 핸들러
        style={styles.input} // 입력 필드 스타일
      />

      <Text>TV 제어</Text> {/* TV 제어 텍스트 */}
      <Button title="켜기" onPress={() => setTvState('on')} /> {/* TV 켜기 버튼 */}
      <Button title="끄기" onPress={() => setTvState('off')} /> {/* TV 끄기 버튼 */}

      <Button title="저장" onPress={saveSettings} /> {/* 설정 저장 버튼 */}
    </View>
  );
}

const styles = StyleSheet.create({ // 스타일시트 정의
  container: { // 컨테이너 스타일 정의
    flex: 1, // 플렉스 1: 뷰가 화면을 꽉 채움
    justifyContent: 'center', // 세로 방향으로 중앙 정렬
    alignItems: 'center', // 가로 방향으로 중앙 정렬
    padding: 20, // 여백 20
  },
  input: { // 입력 필드 스타일 정의
    height: 40, // 높이 40
    borderColor: 'gray', // 테두리 색상 회색
    borderWidth: 1, // 테두리 두께 1
    marginBottom: 20, // 아래 여백 20
    width: '80%', // 너비 80%
    paddingHorizontal: 10, // 가로 여백 10
  },
});
