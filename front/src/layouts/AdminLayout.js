import "./AdminLayout.css"
import NavbarAdmin from "../components/NavbarAdmin";
import FooterAdmin from "../components/FooterAdmin";

const AdminLayout = ({ children }) => {
    const title = "Go Home";
    const navlink = ["Admin"];
    
    return (
      <div className="AdminLayout">
        <NavbarAdmin title={ title } link={ navlink } />
          <main> { children } </main>
        <FooterAdmin title={ title } />
      </div>
    );
  };
  
  export default AdminLayout;
