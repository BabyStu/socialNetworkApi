const router = require('express').Router();
const userRoute = require('./userRoutes');
const thoughtRoute = require('./thoughtRoutes');

router.use('/thoughts', userRoute);
router.use('/users', thoughtRoute);

module.exports = router;
