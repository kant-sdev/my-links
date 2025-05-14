import { ReactNode } from 'react';

interface SocialLinkProps {
    href: string;
    children: ReactNode;
    title: string;
}

export default function SocialLink({ href, children, title }: SocialLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-6 py-3 mb-4 text-white transition-all duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-105 flex items-center justify-center gap-2"
        >
            {children}
            <span>{title}</span>
        </a>
    );
} 