import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const { HOST = "localhost", PORT = 8080 } = process.env;

app.use(express.static(__dirname + "/dist"));

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});

//

/*


Trang Career: 

- Header & Footer: (Luân)

- Danh sách các job đang tuyển & Filter Job:
  + FE: Mock data, và hiển thị các job đang tuyển: (Phúc)
  + BE: Lấy data từ DB trả về cho FE: (Khang)

- Job Detail:
  + FE: Mock data, và hiển thị chi tiết job: (anh TTài)

- Trang Apply Job:
  + FE:  Ngọc
  + BE: api upload thông tin cv:


  Database
  - Jobs: 
    id: uuid, 
    title: string, 
    location: string, 
    type: string, 
    tags: [] string,, 
    created_at: timestamp, 
    updated_at: timestamp, 
    available: boolean,
    descriptions: [
      {
        title: "Mô tả công việc",
        description: "Mô tả công việc"
      }
    ]
    requirements: [] string
*/

/*
    if(login) {
      if(pasword !== "User" && email !== "Admin") {
         return;
      }
      const { email, password } = req.body;
    } else {
     const { email, password } = req.body;
    }
*/
