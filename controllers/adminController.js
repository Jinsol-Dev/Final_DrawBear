const AdminService = require('../services/adminService');

class AdminController {
  adminService = new AdminService();
  signupAdmin = async (req, res) => {
    try {
      const { email, password, nickname } = req.body;
      await this.adminService.signupAdmin(email, password, nickname);
      return res.status(201).json({ message: '관리자 회원가입 성공' });
    } catch (err) {
      res.status(400).json({ errorMessage: '관리자 회원가입 실패' });
    }
  };
}

module.exports = AdminController;
