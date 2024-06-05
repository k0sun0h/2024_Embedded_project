import React, { useState } from 'react'; // 리액트와 useState 훅 임포트
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'; // 뷰, 텍스트, 텍스트 입력, 버튼, 스타일시트 컴포넌트 임포트

export default function ConceptCodeSettingScreen() { // ConceptCodeSettingScreen 컴포넌트 정의
  const [conceptName, setConceptName] = useState(''); // 컨셉명 상태 정의
  const [conceptCode, setConceptCode] = useState(''); // 컨셉 코드 상태 정의

  const saveConcept = () => { // 컨셉 코드 저장 함수 정의
    // 컨셉 코드 저장 로직
    console.log('Concept saved:', { conceptName, conceptCode }); // 저장된 컨셉 출력
  };

  return (
    <View style={styles.container}> {/* 컨테이너 뷰 */}
      <Text>컨셉 코드 설정</Text> {/* 컨셉 코드 설정 텍스트 */}
      <TextInput
        placeholder="컨셉명" // 입력 필드 플레이스홀더
        value={conceptName} // 입력 필드 값
        onChangeText={setConceptName} // 텍스트 변경 핸들러
        style={styles.input} // 입력 필드 스타일
      />
      <TextInput
        placeholder="컨셉 코드 (1-3자리)" // 입력 필드 플레이스홀더
        value={conceptCode} // 입력 필드 값
        onChangeText={setConceptCode} // 텍스트 변경 핸들러
        style={styles.input} // 입력 필드 스타일
      />
      <Button title="저장" onPress={saveConcept} /> {/* 저장 버튼 */}
    </View>
  );
}

const styles = StyleSheet.create({ // 스타일시트 정의
  container: { // 컨테이너 뷰 스타일
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
