# 줌 클론 코드 챌린지

## 1일차

- package.json 생성 (npm init -y)
- nodemon 개발자 모드에 설치 (npm i nodemon -D)
- 파일 및 폴더 생성 (src, server.js, babel.config.json, nodemon.json)
- git init .
- 바벨 설치 (npm i @babel/core @babel/cli @babel/node @babel/preset-env -D)
- .gitignore 생성 (node_modules 커밋 제외)
- nodemon.json 설정 ("exec": "babel-node src/server.js")
- babel.config.json 설정 ("presets": ["@babel/preset-env"])
- package.json 설정 ("scripts": {"dev": "nodemon"},)
- 익스프레스 설치 (npm i express ) - http를 다룸
- 퍼그 설치 (npm i pug)
- nodemon.json 파일 설정 ("ignore": ["src/public/*"])
  불필요한 재기동 막기위함
- 웹소켓라이브러리 (npm i ws) 설치 - 웹소켓을 다룸
- 웹 소켓에 포트 설정 존재하여 익스프레스 포트 설정 부분 주석 처리
- http와 웹 소켓 충돌 발생으로 웹소켓만 사용
