import { Form } from '@remix-run/react';
import DiscordIcon from '~app/components/atoms/icons/discord';
import GitHubIcon from '~app/components/atoms/icons/github';
import GoogleIcon from '~app/components/atoms/icons/google';
import { CardFooter } from '~app/components/molecules/card';
import ButtonWithIcon from '~app/components/molecules/forms/button-with-icon';

export default function AuthCardFooter({
  mode,
}: {
  mode: 'Login' | 'Register';
}) {
  return (
    <Form method="POST" id="sns-login-form">
      <CardFooter className="flex flex-col space-y-4">
        <ButtonWithIcon
          label={`${mode} with Google`}
          btnClassName="w-full"
          variant="outline"
          name="_action"
          form="sns-login-form"
          type="submit"
          value="user-google"
          leftIcon={
            <GoogleIcon className="mr-2 h-auto w-5" width={24} height={24} />
          }
        />

        <ButtonWithIcon
          label={`${mode} with Discord`}
          btnClassName="w-full"
          variant="default"
          name="_action"
          form="sns-login-form"
          type="submit"
          value="user-discord"
          leftIcon={
            <DiscordIcon className="mr-2 h-auto w-5" width={24} height={24} />
          }
        />

        <ButtonWithIcon
          label={`${mode} with GitHub`}
          btnClassName="w-full"
          variant="outline"
          name="_action"
          form="sns-login-form"
          type="submit"
          value="user-github"
          leftIcon={
            <GitHubIcon className="mr-2 h-auto w-5" width={24} height={24} />
          }
        />
      </CardFooter>
    </Form>
  );
}
