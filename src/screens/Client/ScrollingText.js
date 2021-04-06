import { useState, useEffect } from 'react'
import TextTransition, { presets } from 'react-text-transition'
import axios from 'axios'

export default function ScrollingText() {
  const [datas, setDatas] = useState([''])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get('http://localhost:4242/slider')
      setDatas(resq.data.map(word => word.Word))
    }
    fetchData()
    const intervalId = setInterval(() => setIndex(index => index + 1), 3500)
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <p>
      <TextTransition
        text={datas[index % datas.length]}
        springConfig={presets.wobbly}
      />
    </p>
  )
}
