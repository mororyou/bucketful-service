import { Link } from '@remix-run/react';
import { Terminal } from 'lucide-react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '~app/components/molecules/alert';

export default function ProfileAlert() {
  return (
    <Alert>
      <Terminal className="mr-2 h-6 w-6" />
      <AlertTitle>プロフィールの更新をお勧めします</AlertTitle>
      <AlertDescription className="text-gray-700">
        誕生日やプロフィール画像を設定することで、他のユーザーとのコミュニケーションや目標達成をサポートします。
        <br />
        <Link
          to="/setting/profile"
          className="mt-1 text-sm text-blue-400 underline hover:text-blue-800"
        >
          プロフィール設定はこちら
        </Link>
      </AlertDescription>
    </Alert>
  );
}
