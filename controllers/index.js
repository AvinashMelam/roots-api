const router = require('express').Router();
const achievements = require('./achievements');
const curriculars = require('./curriculars');
const notices = require('./notices');
const socials = require('./socials');

router.use('/api/achievements',achievements);
router.use('/api/curriculars',curriculars);
router.use('/api/notices',notices);
router.use('/api/socials',socials);


module.exports = router;