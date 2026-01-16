import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Sabin Chacko - Senior Full-Stack Developer & Solution Architect',
	description:
		'Portfolio of a Solution Architect & Full-Stack Lead. Architecting scalable web applications and complex APIs with Laravel, React, and cloud platforms (AWS, Azure). I am based in Abu Dhabi, UAE.',
	keywords: [
		'Full-Stack Developer',
		'Software Engineer',
		'Frontend Development',
		'Backend Development',
		'Laravel',
		'PHP',
		'FastAPI',
		'React',
		'Next.js',
		'TypeScript',
		'Database Design',
		'API Development',
		'Cloud Solutions',
		'System Architecture',
		'Web Development',
		'Sabin Chacko',
		'Solution Artchitect in UAE',
		'Senior Laravel Developer in UAE',
	],
	authors: [{ name: 'Sabin Chacko' }],
	creator: 'Sabin Chacko',
	openGraph: {
		title: 'Sabin Chacko - Senior Full-Stack Developer Portfolio',
		description:
			'Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.',
		url: 'https://sabinchacko03.github.io/',
		siteName: 'Sabin Chacko - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Sabin Chacko - Full-Stack Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sabin Chacko - Full-Stack Developer',
		description:
			'Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
			<GoogleAnalytics gaId="G-XR3SK6KJ85" />
		</html>
	);
}
