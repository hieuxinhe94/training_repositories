const { writeFile } = require('fs');
const { argv } = require('yargs');
// read environment variables from .env file
require('dotenv').config();
// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = isProduction
   ? `./src/environments/environment.prod.ts`
   : `./src/environments/environment.ts`;
// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   PREFIX_API_URL: '${process.env.PREFIX_API_URL}',
   PREFIX_API_REFERAL_URL: '${process.env.PREFIX_API_REFERAL_URL}',
   CLIENT_ID: '${process.env.CLIENT_ID}',
   CLIENT_SECRET: '${process.env.CLIENT_SECRET}',
   GRANT_TYPE: '${process.env.GRANT_TYPE}',
};
`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
   if (err) {
      console.log(err);
   }
   console.log(`Wrote variables to ${targetPath}`);
});
