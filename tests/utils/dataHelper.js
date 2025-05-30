const fs = require('fs');
const path = require('path');

//Generating User Data

function getUserData(role){
    const dataPath = path.join(__dirname,'../data/userDetails.json');
    const users = JSON.parse(fs.readFileSync(dataPath,'utf-8'));
    return users[role];
}

function getEnvConfig(env = 'dev'){

    const configPath = path.join(__dirname,`../data/config.${env}.json`);
    return JSON.parse(fs.readFileSync(configPath,'utf-8'));

}

module.exports = {getUserData,getEnvConfig};