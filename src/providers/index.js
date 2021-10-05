import { CartProvider } from "./cart";
import { CatalogueProvider } from "./catalogue";

const Providers = ({children}) => {
    return (
        <CatalogueProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </CatalogueProvider>
    )
}

export default Providers;