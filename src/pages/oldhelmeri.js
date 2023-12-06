import Admin from "@/components/admin/admin";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";

function AdminDashboard() {
  const { data: session } = useSession();

  return <Admin user={session.user} />;
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default AdminDashboard;
