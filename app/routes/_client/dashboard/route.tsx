import DashboardLayout from '~app/_features/dashboard/layout';
import DashboardContainer from '~app/components/pages/client/dashboard';
import { useAuthUser } from '../route';

export default function Dashboard() {
  const user = useAuthUser();
  console.log(user);
  return (
    <DashboardLayout title={'DashBoard'}>
      <DashboardContainer />
    </DashboardLayout>
  );
}
