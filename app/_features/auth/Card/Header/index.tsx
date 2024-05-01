import {
  CardDescription,
  CardHeader,
  CardTitle,
} from '~app/components/molecules/card';

export default function AuthCardHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <CardHeader className="space-y-1">
      <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  );
}
