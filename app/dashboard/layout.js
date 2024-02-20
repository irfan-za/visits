import Sidebar from "../../components/sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <html>
      <body>
        <Sidebar />
        <div className="lg:pl-72">{children}</div>
      </body>
    </html>
  );
}
