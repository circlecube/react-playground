import Link from 'next/link'

export default () => (
    <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/presidents"><a>Presidents</a></Link></li>
        <li><Link href="/quiz"><a>Quiz</a></Link></li>
    </ul>
)