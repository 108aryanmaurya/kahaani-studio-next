import Sidebar from "../_admin/AdminPanel/Components/Common/SideNav";

export default function Dashboardlayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="mx-auto w-full max-w-screen-xl overflow-y-scroll scroll-smooth pt-5 max-md:pt-5">
        <main>{children}</main>
      </div>
    </div>
  );
}
