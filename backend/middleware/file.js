const upload = async (req, res, next) => {
  if (req.files.image.type) {
    let type = req.files.image.type;
    if (
      type !== "image/png" &&
      type !== "image/jpg" &&
      type !== "image/jpge" &&
      type !== "iamge/gif"
    ) {
      return res.status(400).send("Invalid format: only .png .jpg .jpge .gif");
      next();
    } else {
      next();
    }
  }
};

module.exports = upload;
