import FortuneResultPage from '@/components/pages/FortuneResultPage'
import { use } from 'react'

export async function generateStaticParams() {
    return [
        { id: '0' },
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
    ]
}

export default function ResultPage({
    params,
}: {
    params: Promise<{ id: number }>
}) {
    const { id } = use(params)


    return (
        <FortuneResultPage id={id} />
    )
}
