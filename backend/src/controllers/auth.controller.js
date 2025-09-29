export const signup = async (req, res) => {
  try {
    res.send("signup");
  } catch (error) {}
};

export const login = async (req, res) => {
  res.send("login");
};

export const logout = async (req, res) => {
  res.send("logout");
};
