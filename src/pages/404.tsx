import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


const NotFoundPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Ой ...</h1>
      <h2>Такой страници не существует</h2>
      <p>Вернуться на <Link href='/'>главную страницу</Link></p>
    </div>
  )
}

export default NotFoundPage;