import UserDetails from '@/components/UserDetails'
import { useRouter } from 'next/router';


export default function UserPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) return <h3>Loading...</h3>;

  return <UserDetails id={id} />;
}