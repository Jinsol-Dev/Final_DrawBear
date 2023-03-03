const AdminRepository = require('../repositories/adminRepository');
const bcrypt = require('bcryptjs');
const PASSWORD_SALT = parseInt(process.env.PASSWORD_SALT);
const {
  ValidationError,
  DuplicateError,
} = require('../exceptions/index.exception');

class AdminService {
  AdminRepository = new AdminRepository();
  signupAdmin = async (email, password, nickname) => {
    const hashedPassword = await bcrypt.hash(password, parseInt(PASSWORD_SALT));

    const isExistAdmin = await this.AdminRepository.isExistAdmin(nickname);
    if (isExistAdmin)
      throw new DuplicateError('이미 사용중인 관리자 아이디 입니다.');
    if (!email || !password || !nickname) {
      throw new ValidationError('필수 항목을 입력해주세요');
    }
    await AdminRepository.signupAdmin(email, hashedPassword, nickname);
    return true;
  };
}

module.exports = AdminService;
