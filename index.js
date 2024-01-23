const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).json({
    "messages": [
      {
          "text": `OMO gửi bạn Lấm bẩn hoá hy vọng cho năm Giáp Thìn 2024 <3`
      },
      {
        "text": `Bạn có thể tải ảnh trực tiếp tại khung chat này hoặc truy cập vào link để có ảnh chất lượng cao nhé <3!  ${process.env.MASTER_SERVER_ADDR}/generate/` + mess_id + "/" + jobId,  
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});