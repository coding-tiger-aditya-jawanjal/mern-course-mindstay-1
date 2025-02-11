exports.myFunction = (req, res) => {
  res
    .status(200)
    .json({ msg: "Request successfull !", ok: true, data: "users" });
};
