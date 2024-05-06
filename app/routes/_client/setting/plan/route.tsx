import DashboardLayout from '~app/_features/dashboard/layout';
import DashboardContainer from '~app/components/pages/client/dashboard';
import { useAuthUser } from '../../route';

export default function ClientSettingPlanRoute() {
  const user = useAuthUser();
  console.log(user);
  return (
    <DashboardLayout title={'Settings / Plan'}>
      <DashboardContainer />
    </DashboardLayout>
  );
}
