const router = require('express').Router();
const {
  addUser,
  getUsers,
  editUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

router.post('/', addUser);
router.get('/', getUsers);
router.get('/edit/:id', editUser);
router.post('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;
