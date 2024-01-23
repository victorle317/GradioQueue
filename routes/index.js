var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    "messages": [
      {
          "text": `OMO gửi bạn Lấm bẩn hoá hy vọng cho năm Giáp Thìn 2024 <3`
      },
      {
        "text": `Bạn có thể tải ảnh trực tiếp tại khung chat này hoặc truy cập vào link để có ảnh chất lượng cao nhé <3!  https://omotet2024.com/generate/24617949661185177/65af219b20af3f3584e778d7`,  
    },
    {
      "attachment": {
        "type": "image",
        "payload": {
          "url": `https://omotet2024.com/generate/24617949661185177/65af219b20af3f3584e778d7`
        }
      }
    }
    ],
      "set_attributes":
      {
      "exist": "true",
      "err":"false",
      "url": `https://omotet2024.com/generate/24617949661185177/65af219b20af3f3584e778d7`
      }
    });
});

module.exports = router;
