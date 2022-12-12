import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from './components/Layout'
import Contact from './Contact'
import HomePage from './HomePage'
import MyPhotos from './MyPhotos'
import { QueryClient, QueryClientProvider} from "react-query"
import AboutMe from './AboutMe'
import Internships from './Internships'
const queryclient = new QueryClient();
export default function Home() {
  return (
    <QueryClientProvider client={queryclient}>
    <div className={styles.container}>
      <Head>
        <title>Shantanu's Portfolio</title>
        <meta name="description" content="Portfolio of Shantanu Ashok Jain (shantanujainx, shantanujain18, shantanu jain pict)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
      <HomePage/>
      <MyPhotos deviceType='tablet'/>
      <Internships deviceType='tablet'/>
      <AboutMe/>
      <Contact/>
      </Layout>
    
    </div>
    </QueryClientProvider>
  )
}
