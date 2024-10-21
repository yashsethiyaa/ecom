import { Route, Routes } from "react-router-dom";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AuthLayout from "./components/auth/layout";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/auth/admin-view/dashboard";
import AdminProducts from "./pages/auth/admin-view/products";
import AdminOrders from "./pages/auth/admin-view/orders";
import AdminFeatures from "./pages/auth/admin-view/features";
import NotFound from "./pages/auth/admin-view/not-found";
import ShoppingLayout from "./components/shopping-view/layout";
import ShoppingListing from "./pages/auth/shopping-view/listing";
import ShoppingHome from "./pages/auth/shopping-view/home";
import ShoppingCheckout from "./pages/auth/shopping-view/checkout";
import ShoppingAccount from "./pages/auth/shopping-view/account";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/auth/unauth-page";

function App() {
  const isAuthenticated = true; // Simulated authentication
  const user = { name: "yash", role: "admin" };

  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<AuthLogin />} />
        <Route path="register" element={<AuthRegister />} />
      </Route>

      <Route path="/admin" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><AdminLayout /></CheckAuth>}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="features" element={<AdminFeatures />} />
      </Route>

      <Route path="/shop" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><ShoppingLayout /></CheckAuth>}>
        <Route path="home" element={<ShoppingHome />} />
        <Route path="listing" element={<ShoppingListing />} />
        <Route path="checkout" element={<ShoppingCheckout />} />
        <Route path="account" element={<ShoppingAccount />} />
      </Route>

      <Route path="/unauth-page" element={<UnauthPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
