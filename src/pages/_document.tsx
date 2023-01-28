import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <meta name="title" content="Mauricio Ferraz - software engineer" />
          <meta
            name="description"
            content="Desenvolvedor Front-end com experiência em React.js, Next.js, Redux, JavaScript, TypeScript, Styled Components, Material UI"
          />
          <meta
            name="keywords"
            content="Mauricio, Ferraz, Mauricio Ferraz, software, frontend, engineer, software engineer, dev, redux, react, next, javascript, typescript"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="Portuguese" />
          <meta name="author" content="Mauricio Ferraz" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
