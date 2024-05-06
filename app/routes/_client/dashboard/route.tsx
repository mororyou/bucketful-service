import DashboardLayout from '~app/_features/dashboard/layout';
import DashboardContainer from '~app/components/pages/client/dashboard';

export default function Dashboard() {
  return (
    <DashboardLayout title={'DashBoard'}>
      <DashboardContainer />
    </DashboardLayout>
  );
}
