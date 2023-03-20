import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context/Index'

// Pour notre nouveau hook, useFetch,
// on lui passe en paramètre l’URL de l’API
// qu’on veut appeler. Il possède un state interne
// qui lui permet de stocker la data, et de savoir
// si la data est en train de charger avec isLoading.
export function useFetch(url) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  //   Le hook fait un return  vide si le paramètre de l’URL est vide,
  //   et commence par mettre isLoading  à true.
  //   Il déclare la fonction asynchrone fetchData  qui permet de :
  //   - appeller fetch  ;
  //   - parser ce qui est retourné avec data.json()  ;
  //   - et changer l’état de isLoading  .
  //   url  fait partie du tableau de dépendances du useEffect,
  //   ce qui permettra de redéclencher le call en cas de changement
  //   d’URL passée en paramètre. Puis, on appelle notre fonction fetchData.
  useEffect(() => {
    if (!url) return

    setLoading(true)

    async function fetchData() {
      try {
        const response = await fetch(url)

        const data = await response.json()

        setData(data)
      } catch (err) {
        console.log(err)

        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { isLoading, data, error }
}

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return { theme, toggleTheme }
}
