import * as accountRepo from "./account.repo";
// account.service
class AccountService {
  getAccount(accountId) {
    return accountRepo.getAccount(accountId);
  }

  getAccountEmailAddress(accountId) {
    return accountRepo.getAccountEmailAddress(accountId);
  }

  getAccountName(accountId) {
    return accountRepo.getAccountName(accountId);
  }

  getAppliedTransactionId(accountId) {
    return accountRepo.getAppliedTransactionId(accountId);
  }

  setAccountName(accountId, name) {
    accountRepo.setAccountName(accountId, name);
  }

  setAppliedTransactionId(accountId, transactionId) {
    accountRepo.setAppliedTransactionId(accountId, transactionId);
  }

  // ...
}
