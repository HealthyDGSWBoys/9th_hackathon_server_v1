// import express from 'express'
// import { userinfo } from '../controllers/userControllers'
// import {
//   QuestionCreation,
//   pullQuestion,
//   oneQuestion,
//   deleteQuestion,
//   updateQuestion,
//   likeQuestion,
//   answrQuestion,
// } from '../controllers/QuestionControllers'
// import {
//   workBookCreation,
//   workbookDelete,
//   workBookList,
//   workBookOneList,
//   workChange,
// } from '../controllers/workBook'
// import { protectedMiddleware } from '../middlewares'
// import {
//   changeMemo,
//   deleteMemo,
//   listMemo,
//   MemoCreation,
// } from '../controllers/MemoController'
// import {
//   allQnA,
//   changeQnA,
//   createQnA,
//   deleteQnA,
//   oneQnA,
//   registerComment,
//   recentQuestion
// } from '../controllers/QnaControllers'

// const infoRouter = express.Router()

// // userinfo part
// infoRouter.post('/user/userinfo', userinfo)

// // problem part
// infoRouter.post('/problem/register', protectedMiddleware, QuestionCreation)
// infoRouter.get('/problem/problems', protectedMiddleware, pullQuestion)
// infoRouter.get('/problem/problem/', protectedMiddleware, oneQuestion)
// infoRouter.delete('/problem/delete/', protectedMiddleware, deleteQuestion)
// infoRouter.put('/problem/change/', protectedMiddleware, updateQuestion)
// infoRouter.post('/problem/answer', protectedMiddleware, answrQuestion)

// // problem like
// infoRouter.post('/problem/like/', protectedMiddleware, likeQuestion)

// // memo part
// infoRouter.post('/memo/create', protectedMiddleware, MemoCreation)
// infoRouter.get('/memo/list', protectedMiddleware, listMemo)
// infoRouter.put('/memo/change', protectedMiddleware, changeMemo)
// infoRouter.delete('/memo/delete', protectedMiddleware, deleteMemo)

// // workbook
// infoRouter.post('/workbook/create', protectedMiddleware, workBookCreation)
// infoRouter.get('/workbook/list', protectedMiddleware, workBookList)
// infoRouter.get('/workbook/onelist/', protectedMiddleware, workBookOneList)
// infoRouter.put('/workbook/change/', protectedMiddleware, workChange)
// infoRouter.delete('/workbook/delete/', protectedMiddleware, workbookDelete)

// // QnA
// infoRouter.post('/QnA/create', protectedMiddleware, createQnA)
// infoRouter.get('/QnA/allList', allQnA)
// infoRouter.put('QnA/change/', changeQnA)
// infoRouter.delete('/QnA/deleteList/', protectedMiddleware, deleteQnA)
// infoRouter.get('/QnA/detail', oneQnA) //QnA 하나에 대한 상세정보
// infoRouter.post('/QnA/registerComment', protectedMiddleware, registerComment) //메모 등록
// infoRouter.get('/QnA/recent', protectedMiddleware, recentQuestion) //메모 등록

// export default infoRouter
