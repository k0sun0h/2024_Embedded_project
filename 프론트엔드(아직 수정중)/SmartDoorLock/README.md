# 스마트 도어락 앱

## 개요
스마트 도어락 앱은 스마트폰을 통해 도어락과 연결된 다양한 IoT 기기들을 제어할 수 있는 애플리케이션

## 주요 기능
- 사용자 로그인/회원가입
- 비밀번호 설정
- 컨셉 코드 설정
- IoT 기기 제어
- 외출 모드
- 보안 알림
- 사용자별 설정 저장
- 퀵 on/off
- 방문객 확인 및 문 개방

## 기술 스택
- 프론트엔드: React Native
- 백엔드: Node.js, Express.js
- 데이터베이스: MongoDB
- IoT 통신: MQTT

## 구조
SmartDoorLock
├── assets
│   └── icon.png
├── components
│   ├── ConceptCodeSettingScreen.js
│   ├── IoTManagementScreen.js
│   ├── LoginScreen.js
│   ├── MainScreen.js
│   └── PasswordSettingScreen.js
├── navigation
│   └── AppNavigator.js
├── node_modules
├── App.js
├── app.json
├── babel.config.js
├── package-lock.json
├── package.json
└── README.md