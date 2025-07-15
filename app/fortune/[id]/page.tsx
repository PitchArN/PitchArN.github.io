import FortuneResultPage from '@/components/pages/FortuneResultPage'
import { use } from 'react'

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
