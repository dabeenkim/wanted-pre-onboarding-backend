기본구현완료.

추가기능도 구현하려고합니다.

---

지원자의 성명 : 김다빈

---
애플리케이션의 실행 방법 (엔드포인트 호출 방법 포함)

## 회원가입( POST )
localhost:3000/api/auth/signup

## 로그인( POST )
localhost:3000/api/auth/login

## 게시글 전체조회( GET )
localhost:3000/api/post?offset=0&limit=5

## 게시글 작성( POST )
localhost:3000/api/post

## 게시글 상세조회( GET )
localhost:3000/api/post/2

## 게시글 수정( PATCH )
localhost:3000/api/post/2

## 게시글 삭제( DELETE )
localhost:3000/api/post/2/remove

---
데이터베이스 테이블 구조

### Users
email : STRING
password : STRING
createdAt : DATE
updatedAt : DATE

### Posts
postId : INTERGER
title : STRING
desc : STRING
createdAt : DATE
updatedAt : DATE

---
구현한 API의 동작을 촬영한 데모 영상 링크

---
구현 방법 및 이유에 대한 간략한 설명

node.js와 express를 통한 HTTP통신을 사용해
회원가입, 로그인,
게시글 조회,작성,수정,삭제
CRUD를 구현하였습니다.

API 명세(request/response 포함)

![image](https://github.com/dabeenkim/wanted-pre-onboarding-backend/assets/124576278/c51f95d7-d9f3-4f1a-9774-350719d414dd)
