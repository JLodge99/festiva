import { Button } from './components/ui/button';
import { Dashboard } from './components/ui/dashboard';
import { TooltipProvider } from './components/ui/tooltip';

export function App() {
	return (
		<div>
			<TooltipProvider>
				<Dashboard />
				<Button variant="default">Save</Button>
				<Button variant="destructive">Delete</Button>
			</TooltipProvider>
		</div>
	);
}
