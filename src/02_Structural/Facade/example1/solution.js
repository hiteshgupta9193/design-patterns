// Fetching user data for an e-commerce website using Facade design pattern

class UserDataFacade {
  constructor(userId) {
    this.userId = userId;
  }

  fetchUserInfo() {
    return fetch(`/api/userInfo/${this.userId}`)
      .then(response => response.json())
      .catch(error => {
        console.error("Error fetching user info:", error);
        throw error;
      });
  }

  fetchUserAddresses() {
    return fetch(`/api/userAddresses/${this.userId}`)
      .then(response => response.json())
      .catch(error => {
        console.error("Error fetching user addresses:", error);
        throw error;
      });
  }

  fetchShortlistedProducts() {
    return fetch(`/api/shortlistedProducts/${this.userId}`)
      .then(response => response.json())
      .catch(error => {
        console.error("Error fetching shortlisted products:", error);
        throw error;
      });
  }

  fetchPaymentMethods() {
    return fetch(`/api/paymentMethods/${this.userId}`)
      .then(response => response.json())
      .catch(error => {
        console.error("Error fetching payment methods:", error);
        throw error;
      });
  }

  fetchOrders() {
    return fetch(`/api/orders/${this.userId}`)
      .then(response => response.json())
      .catch(error => {
        console.error("Error fetching orders:", error);
        throw error;
      });
  }

  fetchProductsOrdered(orderId) {
    return fetch(`/api/productsOrdered/${orderId}`)
      .then(response => response.json())
      .catch(error => {
        console.error("Error fetching products ordered:", error);
        throw error;
      });
  }

  fetchUserData() {
    return Promise.all([
      this.fetchUserInfo(),
      this.fetchUserAddresses(),
      this.fetchShortlistedProducts(),
      this.fetchPaymentMethods(),
      this.fetchOrders()
    ]).then(
      ([
        userInfo,
        userAddresses,
        shortlistedProducts,
        paymentMethods,
        orders
      ]) => {
        const userData = {
          userInfo,
          userAddresses,
          shortlistedProducts,
          paymentMethods,
          orders
        };
        return userData;
      }
    );
  }
}

// Usage example
const userId = "123456";
const userDataFacade = new UserDataFacade(userId);
userDataFacade
  .fetchUserData()
  .then(userData => {
    console.log("User data:", userData);
    // Do something with the fetched user data
  })
  .catch(error => {
    console.error("Error fetching user data:", error);
    // Handle the error
  });
