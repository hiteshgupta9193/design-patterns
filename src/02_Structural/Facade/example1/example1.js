// Fetching user data for an e-commerce website from different APIs

// UserInfo API
function fetchUserInfo(userId) {
  return fetch(`/api/userInfo/${userId}`)
    .then(response => response.json())
    .catch(error => {
      console.error("Error fetching user info:", error);
      throw error;
    });
}

// UserAddresses API
function fetchUserAddresses(userId) {
  return fetch(`/api/userAddresses/${userId}`)
    .then(response => response.json())
    .catch(error => {
      console.error("Error fetching user addresses:", error);
      throw error;
    });
}

// ShortlistedProducts API
function fetchShortlistedProducts(userId) {
  return fetch(`/api/shortlistedProducts/${userId}`)
    .then(response => response.json())
    .catch(error => {
      console.error("Error fetching shortlisted products:", error);
      throw error;
    });
}

// PaymentMethods API
function fetchPaymentMethods(userId) {
  return fetch(`/api/paymentMethods/${userId}`)
    .then(response => response.json())
    .catch(error => {
      console.error("Error fetching payment methods:", error);
      throw error;
    });
}

// Orders API
function fetchOrders(userId) {
  return fetch(`/api/orders/${userId}`)
    .then(response => response.json())
    .catch(error => {
      console.error("Error fetching orders:", error);
      throw error;
    });
}

// ProductsOrdered API
function fetchProductsOrdered(orderId) {
  return fetch(`/api/productsOrdered/${orderId}`)
    .then(response => response.json())
    .catch(error => {
      console.error("Error fetching products ordered:", error);
      throw error;
    });
}

// Usage example
function fetchUserData(userId) {
  return Promise.all([
    fetchUserInfo(userId),
    fetchUserAddresses(userId),
    fetchShortlistedProducts(userId),
    fetchPaymentMethods(userId),
    fetchOrders(userId)
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
