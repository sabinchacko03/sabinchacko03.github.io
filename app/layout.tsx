import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
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
	metadataBase: new URL('https://sabinchacko03.github.io/'),
	title: 'Sabin Chacko - Lead Software Engineer & Solutions Architect',
	description:
		'Lead Software Engineer and Solutions Architect with 13+ years designing and scaling high-availability enterprise platforms across the UAE. Expert in SAP/Salesforce integration hubs, NestJS API gateways, and cloud-native delivery on Azure/AWS. Based in Abu Dhabi, UAE.',
	keywords: [
		'Lead Software Engineer',
		'Solutions Architect',
		'Enterprise Systems Integration',
		'Software Engineer',
		'Backend Development',
		'Laravel',
		'PHP',
		'NestJS',
		'TypeScript',
		'FastAPI',
		'React',
		'SAP Integration',
		'Salesforce API',
		'Database Design',
		'API Development',
		'Cloud Solutions',
		'System Architecture',
		'Sabin Chacko',
		'Solutions Architect in UAE',
		'Lead Software Engineer in UAE',
	],
	authors: [{ name: 'Sabin Chacko' }],
	creator: 'Sabin Chacko',
	openGraph: {
		title: 'Sabin Chacko - Lead Software Engineer & Solutions Architect',
		description:
			'13+ years designing and scaling high-availability enterprise platforms across the UAE. Explore my SAP/Salesforce integration work, NestJS API gateways, and cloud architecture projects.',
		url: 'https://sabinchacko03.github.io/',
		siteName: 'Sabin Chacko - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Sabin Chacko - Lead Software Engineer & Solutions Architect',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sabin Chacko - Lead Software Engineer & Solutions Architect',
		description:
			'13+ years designing and scaling high-availability enterprise platforms across the UAE. Explore my SAP/Salesforce integration work, NestJS API gateways, and cloud architecture projects.',
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
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
