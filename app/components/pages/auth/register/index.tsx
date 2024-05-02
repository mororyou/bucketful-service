import { Link } from '@remix-run/react';
import { Fragment } from 'react/jsx-runtime';
import AuthCardRegisterContainer from '~app/_features/auth/Card/Container/Register';
import AuthCardFooter from '~app/_features/auth/Card/Footer';
import AuthCardHeader from '~app/_features/auth/Card/Header';
import { Separator } from '~app/components/atoms/separator';
import { Card } from '~app/components/molecules/card';

export default function AuthRegistgerContainer() {
  return (
    <Fragment>
      <div className="mx-auto w-full max-w-sm" />
      <Card className="space-y-4">
        <AuthCardHeader
          title="Create an account"
          description="Enter your email below to create an account"
        />

        <AuthCardRegisterContainer />

        <Separator />

        <AuthCardFooter mode="Register" />
      </Card>
      <div className="text-center text-sm">
        アカウントをおもちの方はこちら
        <Link className="ml-1 hover:underline" to="/login">
          こちら
        </Link>
      </div>
    </Fragment>
  );
}
