const User = require('../models/User');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    if (user.password !== password) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    res.status(200).json({ token: 'dummy-token' }); // For simplicity, using a dummy token
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
