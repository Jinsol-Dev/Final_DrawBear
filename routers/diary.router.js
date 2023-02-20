const express = require('express');
const router = express.Router();

const DiaryController = require('../controllers/diary.controller');
const diaryController = new DiaryController();

router.post('/', diaryController.createDiary);
router.get('/', diaryController.findDiary);
router.patch('/:diaryId', diaryController.patchDiary);
router.delete('/:diaryId', diaryController.deleteDiary);
router.patch('/invite/:diaryId/:invitedId', diaryController.inviteDiary); //다이어리 초대
router.patch(
  '/inviteAccept/:diaryId/:notificationId',
  diaryController.inviteAcceptDiary,
); //다이어리 초대 수락
router.get('/share', diaryController.findShareDiary); //공유 다이어리 조회

module.exports = router;
