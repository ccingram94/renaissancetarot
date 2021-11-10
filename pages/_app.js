import 'tailwindcss/tailwind.css'
import '../global.css'
import { createContext, useContext, useState } from 'react'
import { QuestionContextProvider } from '../QuestionContext'

function MyApp({ Component, pageProps }) {
  const [question, setQuestion] = useState('');
  return (
    <QuestionContextProvider>
      <Component {...pageProps} />
    </QuestionContextProvider>
  ) 
}

export default MyApp
