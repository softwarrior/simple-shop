import { ThemeContextProvider } from "./features/ThemeContextProvider/ThemeContextProvider";
import { OrderListPage } from "./features/OrderListPage/OrderListPage";

export const App = () => (
  <ThemeContextProvider>
    <OrderListPage />
  </ThemeContextProvider>
);
