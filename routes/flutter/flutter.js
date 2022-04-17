const router = require('express-promise-router')();

const {
    getAccountIdByEmail,
    getFutureReservation,
    getBeforeReservation,
    getResaParticipants
} = require('../../controllers/flutter/flutter');

router
    .route('/login')
    .post(getAccountIdByEmail);

router
    .route('/:user_id/reservations')
    .get(getFutureReservation)

router
    .route('/:user_id/reservations/history')
    .get(getBeforeReservation)


router
    .route('/:id_resa/participants')
    .get(getResaParticipants)
    
router.route('/ticket');
router.route('/paiement');


module.exports = router;