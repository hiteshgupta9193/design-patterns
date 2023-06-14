// account.repo
export function getAccount(accountId) {
  return appConfig.get(`app.allAccounts.${accountId}`);
}

export function getAccountEmailAddress(accountId) {
  return getAccount(accountId)?.emailAddress;
}

export function getAccountName(accountId) {
  return getAccount(accountId)?.name;
}

export function getAppliedTransactionId(accountId) {
  return getAccount(accountId)?.applied_transaction_id;
}

export function setAccountName(accountId, name) {
  appConfig.set(`app.allAccounts.${accountId}.name`, name);
}

export function setAppliedTransactionId(accountId, transactionId) {
  appConfig.set(
    `app.allAccounts.${accountId}.applied_transaction_id`,
    transactionId
  );
}
