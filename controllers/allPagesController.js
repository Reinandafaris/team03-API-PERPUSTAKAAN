const HomePage = async (req, res) => {
  res.render("index.ejs");
};

const LoginPage = async (req, res) => {
  res.render("components/auth/loginPage.ejs");
};

const RegisterPage = async (req, res) => {
  res.render("components/auth/registerPage.ejs");
};

const AdminPage = async (req, res) => {
  res.render("components/admin/adminPage.ejs");
};

module.exports = {
  HomePage,
  LoginPage,
  RegisterPage,
  AdminPage,
};
