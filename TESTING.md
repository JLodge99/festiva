# Testing Configuration

This project uses Vitest with a workspace configuration to manage tests across multiple packages and the webapp.

## Workspace Structure

The testing setup is organized using Vitest projects, with each package having its own testing environment and configuration:

### Projects

1. **Utils Package** (`packages/utils`)
   - Environment: Node.js
   - Tests utility functions like `nth` for ordinal suffixes
   - Configuration: Inline in workspace config

2. **Queries Package** (`packages/queries`)
   - Environment: Node.js
   - Tests API client helper functions (`trimArrayEnd`, `isParameterObject`)
   - Configuration: Inline in workspace config

3. **Webapp** (`webapp`)
   - Environment: jsdom (browser simulation)
   - Tests Preact components and browser utilities
   - Configuration: Uses existing `webapp/vitest.config.ts`
   - Includes setup for Preact JSX, path aliases, and CSS processing

## Running Tests

### All Tests
```bash
# Run all tests across all projects
pnpm test

# Watch mode for all tests
pnpm test:watch

# Run with UI
pnpm test:ui

# Run with coverage
pnpm test:coverage
```

### Individual Projects
```bash
# Run only webapp tests
npx vitest run --project webapp

# Run only utils tests (project index 0)
npx vitest run --project 0

# Run only queries tests (project index 1)
npx vitest run --project 1
```

### Legacy Individual Package Testing
```bash
# Run tests using individual package scripts
pnpm test:packages
```

## Configuration Files

- **Root**: `vitest.config.ts` - Workspace configuration defining all projects
- **Utils**: Uses inline configuration in workspace
- **Queries**: Uses inline configuration in workspace  
- **Webapp**: `webapp/vitest.config.ts` - Full Preact/JSX configuration

## Test Coverage

Current test coverage includes:

### Utils Package (8 tests)
- `nth` function: Comprehensive testing of ordinal suffix generation
- Edge cases: Large numbers, special cases (11th, 12th, 13th)

### Queries Package (14 tests)
- `trimArrayEnd`: Array manipulation utility testing
- `isParameterObject`: Type checking utility testing

### Webapp (21 tests)
- `cn` utility: Class name merging and Tailwind deduplication (10 tests)
- Button component: Rendering, variants, props, and styling (11 tests)

**Total: 43 tests passing**

## Environment-Specific Features

### Node.js Projects (Utils, Queries)
- Fast execution
- No DOM simulation overhead
- Suitable for pure utility functions

### Browser Project (Webapp)
- jsdom environment for DOM testing
- Preact JSX support
- CSS processing enabled
- Path aliases configured (`@` → `./src`)
- Test setup file for global configurations

## Adding New Tests

### For Utils/Queries Packages
1. Create `*.test.ts` files in the `src/` directory
2. Tests will be automatically discovered and run in Node.js environment

### For Webapp
1. Create `*.test.{ts,tsx}` files in the `src/` directory
2. Use `@testing-library/preact` for component testing
3. Tests run in jsdom environment with full Preact support

## Benefits of Workspace Configuration

1. **Unified Testing**: Single command runs all tests across packages
2. **Environment Optimization**: Each project uses appropriate test environment
3. **Parallel Execution**: Projects can run tests in parallel
4. **Selective Testing**: Run tests for specific projects only
5. **Shared Dependencies**: Common testing tools managed at workspace level
6. **Consistent Configuration**: Standardized testing setup across packages