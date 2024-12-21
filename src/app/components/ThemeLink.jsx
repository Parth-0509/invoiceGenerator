import Link from 'next/link';

function ThemeLink({ className, title, href }) {
    return (
        <div>
            <Link className={`text-white 
                 focus:ring-4
                  focus:outline-none
                  font-medium
                    rounded-lg text-sm px-5 py-3 text-center ${className}`}
                href={href ?? ''} >
                {title}

            </Link>
        </div>
    )
}
export default ThemeLink; 