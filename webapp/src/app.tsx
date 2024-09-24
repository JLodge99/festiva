import { setBaseUrl } from '@festiva/queries/src/axios-client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { Content } from './components/content';
import { ThemeProvider } from './components/theme-provider';
import { Header } from './components/ui/app-header';
import { TooltipProvider } from './components/ui/tooltip';

export function App() {
	// Create a client
	const [queryClient] = useState(() => new QueryClient());
	setBaseUrl('https://date.nager.at');
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<TooltipProvider>
					<Header />
					<Content />
				</TooltipProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
}
