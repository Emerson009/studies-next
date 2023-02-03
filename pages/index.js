import Link from 'next/link'

export default function HomePage(){
    return (
        <div>
            <h1>Sanctum Emovere - Home</h1>
            <Link href="/faq" passHref>
                Ir para o FAQ
            </Link>
        </div>
    )
}