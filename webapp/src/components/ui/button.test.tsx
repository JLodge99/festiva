import { render } from '@testing-library/preact';
import { describe, expect, test } from 'vitest';

import { Button } from './button';

describe('Button shuold be rendered', () => {
	test('should display initial count', () => {
		const { container } = render(<Button>Hello</Button>);
		expect(container.textContent).toMatch('Hello');
	});
});
