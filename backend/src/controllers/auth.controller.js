export const signup = async (req, res) => {
  try {
    res.send("signup");
  } catch (error) {}
};

export const login = (req, res) => {
  res.send("login");
};

export const logout = (req, res) => {
  res.send("logout");
};
