import supabaseServer from "../api/supabase-server";


export default async function Dashboard() {
  const {
    data: { session },
  } = await supabaseServer().auth.getSession();
  if (!session) {
    return <div className="mt-24">Loading...</div>;
  } else {
    return <div className="mt-24">{session.user.email}</div>;
  }
}
