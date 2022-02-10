//componentes
import { Layout } from '../components'

//componentes de next
import Link from 'next/link'
import Image from 'next/image'

//componentes
import { Categories } from '../components'

//estilos css
import errorStyles from '../styles/Error404.module.css'

const Error404 = ({ title, message }) => {
  return (
    <Layout
      title="Error 404 Not Found | Graph CMS Blog"
      description="Error 404 Not Found | Graph CMS Blog"
    >
      <div className={errorStyles.container}>
        <Image
          src="/assets/error404.svg"
          alt="Error404"
          width={200}
          height={200}
          className={errorStyles.img404}
        />
        <div className={errorStyles.wrapper}>
          <h1 className={errorStyles.h1}>{title}</h1>
          <p className={errorStyles.message404}>{message}</p>
          <Link href="/">
            <a className={errorStyles.btnSuccessSm}>Volver</a>
          </Link>
        </div>
      </div>
      <div className="col-span-1 mt-8 lg:col-span-4">
        <div className="relative top-8 lg:sticky">
          <Categories />
        </div>
      </div>
    </Layout>
  )
}

export default Error404
