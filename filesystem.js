import fs from "node:fs";

//Dosya Oluşturma
fs.writeFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf-8",
  (err) => {
    if (err) console.log(err);
    console.log("Dosya Oluşturuldu");
  }
);

//Veri Okuma
fs.readFile("employees.json", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log("Veri Okundu");
});

// Veri güncelleme
fs.appendFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 5000}',
  "utf-8",
  (err) => {
    if (err) console.log(err);
    console.log("Veri Güncellendi");
  }
);

//Dosya Silme
fs.unlink("employees.json", (err) => {
  if (err) console.log(err);
  console.log("Dosya Silindi");
});
