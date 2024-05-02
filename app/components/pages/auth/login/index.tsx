import { Link } from '@remix-run/react';
import { Fragment } from 'react/jsx-runtime';
import AuthCardLoginContainer from '~app/_features/auth/Card/Container/Login';
import AuthCardFooter from '~app/_features/auth/Card/Footer';
import AuthCardHeader from '~app/_features/auth/Card/Header';
import { Separator } from '~app/components/atoms/separator';
import { Card } from '~app/components/molecules/card';

export default function AuthLoginContainer() {
  return (
    <Fragment>
      <div className="mx-auto w-full max-w-sm" />
      <Card className="space-y-4">
        <AuthCardHeader
          title="Login to your account"
          description="Enter your email below to login to your account"
        />

        <AuthCardLoginContainer />

        <Separator />

        <AuthCardFooter mode="Login" />
      </Card>
      <div className="text-center text-sm">
        アカウントをおもちでない方は
        <Link className="ml-1 hover:underline" to="/register">
          こちら
        </Link>
      </div>
    </Fragment>
  );
}
