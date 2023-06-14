// appConfig.js
var appConfig = {
  get: path => localStorage.getItem(path),
  set: (path, value) => localStorage.setItem(path, value)
};

// file1.js
const emailAddress = appConfig.get(`app.allAccounts.${accountId}.emailAddress`);

// file2.js
const name = appConfig.get(`app.allAccounts.${accountId}.name`);

// file3.js
appConfig.set(`app.allAccounts.${accountId}.name`, name);

// file4.js
appConfig.set(
  `app.allAccounts.${accountId}.applied_transaction_id`,
  transactionId
);

// file5.js
const account = appConfig.get(`app.allAccounts.${accountId}`);

// file6.js
const appliedTransactionId = appConfig.get(
  `app.allAccounts.${accountId}.applied_transaction_id`
);
