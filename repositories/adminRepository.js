const { Admin } = require('../models');

class AdminRepository {
  signupAdmin = async (email, nickname, hashedPassword) => {
    const createAdmin = await Admin.create({
      email,
      password: hashedPassword,
      nickname,
    });
    return createAdmin;
  };
}

module.exports = AdminRepository;
