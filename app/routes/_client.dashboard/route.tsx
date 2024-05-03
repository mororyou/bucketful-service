import DashboardContainer from '~app/components/pages/client/dashboard';
import { useAuthUser } from '../_client/route';

export default function Dashboard() {
  const user = useAuthUser();
  console.log(user);
  return <DashboardContainer />;
}
