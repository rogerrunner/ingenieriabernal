import { useEffect } from 'react'
import { useLocation } from 'wouter'

export default function ProjectDetail() {
    const [, setLocation] = useLocation()
    useEffect(() => {
          setLocation('/proyectos')
    }, [setLocation])
    return <div style={{ minHeight: '100vh' }} />
}
