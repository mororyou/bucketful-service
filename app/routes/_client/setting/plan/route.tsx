import DashboardLayout from '~app/_features/dashboard/layout';
import DashboardContainer from '~app/components/pages/client/dashboard';

export default function ClientSettingPlanRoute() {
  return (
    <DashboardLayout title={'Settings / Plan'}>
      <DashboardContainer />
    </DashboardLayout>
  );
}
