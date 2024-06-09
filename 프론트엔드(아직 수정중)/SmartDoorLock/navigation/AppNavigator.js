import React from 'react'; // 리액트를 임포트
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // 바텀 탭 내비게이터 임포트
import MainScreen from '../components/MainScreen'; // 메인 스크린 컴포넌트 임포트
import PasswordSettingScreen from '../components/PasswordSettingScreen'; // 비밀번호 설정 스크린 컴포넌트 임포트
import ConceptCodeSettingScreen from '../components/ConceptCodeSettingScreen'; // 컨셉 코드 설정 스크린 컴포넌트 임포트
import IoTManagementScreen from '../components/IoTManagementScreen'; // IoT 관리 스크린 컴포넌트 임포트

const Tab = createBottomTabNavigator(); // 바텀 탭 내비게이터 생성

export default function AppNavigator() { // AppNavigator 컴포넌트 정의
  return (
    <Tab.Navigator> {/* 바텀 탭 내비게이터 설정 */}
      <Tab.Screen name="Home" component={MainScreen} /> {/* 메인 스크린 설정 */}
      <Tab.Screen name="Password" component={PasswordSettingScreen} /> {/* 비밀번호 설정 스크린 설정 */}
      <Tab.Screen name="Concept" component={ConceptCodeSettingScreen} /> {/* 컨셉 코드 설정 스크린 설정 */}
      <Tab.Screen name="IoT" component={IoTManagementScreen} /> {/* IoT 관리 스크린 설정 */}
    </Tab.Navigator>
  );
}
