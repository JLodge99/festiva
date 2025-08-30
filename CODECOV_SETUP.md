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

- `.github/workflows/test-and-coverage.yml` - GitHub Actions workflow
- `codecov.yml` - Codecov configuration
- Updated `vitest.config.ts` - Coverage configuration for Vitest
- `CODECOV_SETUP.md` - This setup guide

## GitHub Actions Workflow

The GitHub Actions workflow (`.github/workflows/test-and-coverage.yml`) has been created with the following features:

- **Multi-version testing**: Tests on Node.js 18.x and 20.x
- **Automated triggers**: Runs on push/PR to main and develop branches
- **Comprehensive testing**: Includes linting and test coverage
- **Codecov integration**: Automatically uploads coverage reports
- **Artifact storage**: Saves coverage reports for 30 days
- **Fail-safe**: Won't fail CI if Codecov upload fails

## Coverage Badge

The README now includes a dynamic coverage badge that will automatically update with the latest coverage percentage from Codecov.

## Local Testing

To generate coverage locally:

```bash
pnpm test:coverage
```

Coverage reports will be generated in the `./coverage` directory.