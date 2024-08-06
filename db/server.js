const { exec } = require('child_process');
require('dotenv').config();

const setupDatabase = async () => {
  try {
    // Execute schema SQL file
    exec(`psql -U ${process.env.DB_USER} -d postgres -f db/schema.sql`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Schema exec error: ${error}`);
        return;
      }
      console.log(`Schema stdout: ${stdout}`);
      console.error(`Schema stderr: ${stderr}`);

      // Execute seeds SQL file after schema is created
      exec(`psql -U ${process.env.DB_USER} -d ${process.env.DB_NAME} -f db/seeds.sql`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Seeds exec error: ${error}`);
          return;
        }
        console.log(`Seeds stdout: ${stdout}`);
        console.error(`Seeds stderr: ${stderr}`);
      });
    });
  } catch (err) {
    console.error('Error setting up database', err);
  }
};

setupDatabase();
