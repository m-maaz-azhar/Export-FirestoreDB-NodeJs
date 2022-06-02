const { initializeApp } = require("firestore-export-import");
const { backups } = require("firestore-export-import");

const serviceAccount = require("./service-key.json");


const options = {
  firestore: {
    host: "localhost:8080",
    ssl: false,
  },
};

const appName = "[DEFAULT]";
initializeApp(serviceAccount, appName, options);


backups(['products', 'productVariations']) // Array of collection's name is OPTIONAL
  .then((collections) => {
    // You can do whatever you want with collections
    console.log(JSON.stringify(collections))
  })