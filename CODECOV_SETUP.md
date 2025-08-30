# Codecov Setup Instructions

This repository is configured to automatically upload test coverage to Codecov via GitHub Actions.

## Setup Steps

1. **Sign up for Codecov**: Visit [codecov.io](https://codecov.io) and sign up with your GitHub account.

2. **Add Repository**: Add the `JLodge99/festiva` repository to your Codecov dashboard.

3. **Get Codecov Token**: 
   - Go to your repository settings in Codecov
   - Copy the repository upload token

4. **Add GitHub Secret**:
   - Go to your GitHub repository settings
   - Navigate to "Secrets and variables" → "Actions"
   - Add a new repository secret named `CODECOV_TOKEN`
   - Paste the token from step 3

5. **Trigger Workflow**: 
   - Push changes to the `main` or `develop` branch
   - Or create a pull request targeting these branches
   - The GitHub Actions workflow will automatically run tests and upload coverage

## Files Created

- `codecov.yml` - Codecov configuration
- Updated `vitest.config.ts` - Coverage configuration for Vitest
- `CODECOV_SETUP.md` - This setup guide

## GitHub Actions Workflow

Due to token permissions, the GitHub Actions workflow needs to be added manually. Create the file `.github/workflows/test-and-coverage.yml` with the following content:

```yaml
name: Test and Coverage

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x, 20.x]

    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Setup pnpm
      uses: pnpm/action-setup@v4
      with:
        version: latest

    - name: Setup Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'pnpm'

    - name: Install dependencies
      run: pnpm install --frozen-lockfile

    - name: Run linting
      run: pnpm lint

    - name: Run tests with coverage
      run: pnpm test:coverage

    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v4
      with:
        token: ${{ secrets.CODECOV_TOKEN }}
        files: ./coverage/lcov.info
        flags: unittests
        name: codecov-umbrella
        fail_ci_if_error: false
        verbose: true

    - name: Upload coverage reports as artifacts
      uses: actions/upload-artifact@v4
      with:
        name: coverage-reports-${{ matrix.node-version }}
        path: coverage/
        retention-days: 30
```

## Coverage Badge

The README now includes a dynamic coverage badge that will automatically update with the latest coverage percentage from Codecov.

## Local Testing

To generate coverage locally:

```bash
pnpm test:coverage
```

Coverage reports will be generated in the `./coverage` directory.