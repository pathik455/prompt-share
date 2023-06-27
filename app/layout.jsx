import '@styles/globals.css'

import Nav from '@components/Nav';
import Provider from '@components/Provider';


export const metadata = {
    title: "Blogify",
    description: "Discover & share AI blogs!"
}

const RootLayout = ({children}) => {
  return (
    <>
    <html land="en">
        <body>
            <Provider>
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
                <Nav />
                {children}
            </main>
            </Provider>
        </body>
    </html>
    </>
  )
}

export default RootLayout;