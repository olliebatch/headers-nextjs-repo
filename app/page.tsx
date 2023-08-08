import Image from 'next/image'
import styles from './page.module.css'

export const dynamic = 'force-dynamic'

export default async function Home() {

  const url = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
  const data = await fetch(`${url}/api`, { cache: 'no-store' });

  const json = await data.json();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {json.cookieArray.map((child: string) => {
          return `single header ${child}`
        })}
      </div>
    </main>
  )
}
