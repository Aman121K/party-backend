const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: 'df1njw2ap',
  api_key: '887782298746526',
  api_secret: 'BkWKGwUy851tCM1QX1Q_vhWyAjg',
});


const upload = (file) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(
      file,
      (result) => {
        console.log(result)
        resolve({ url: result.secure_url, id: result.public_id });
      },
      { resource_type: "auto" }
    );
  });
};

module.exports = upload;
