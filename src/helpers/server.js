const fs = require("fs");
const path = require("path");

const dir = "src/environments";
const file = "environment.ts";
const fileProd = "environment.prod.ts";

const content = `${process.env.CONTENTFUL_SECRETS}`;

fs.access(dir, fs.constants.F_OK, (err) => {
  if (err) {
    console.error(`${dir} does not exist`);
    fs.mkdir(dir, { recursive: true }, (err) => {
      if (err) throw err;
    });
  }
  try {
    fs.writeFileSync(dir + "/" + file, content);
    fs.writeFileSync(dir + "/" + fileProd, content);
    console.log("Environment files created successfully");
    if (fs.existsSync(dir + "/" + file)) {
      console.log("Environment file exists");
      const str = fs.readFileSync(dir + "/" + file, "utf8").toString();
      console.log(str);
    }
  } catch (err) {
    console.log(err);
  }
});