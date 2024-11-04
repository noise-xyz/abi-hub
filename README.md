# abi-hub

A collection of ABI definitions for Noise protocol smart contracts.

## For Users

To use this package in your project:

1. Authenticate with GitHub Packages by creating a `.npmrc` file in your project root:

```
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
@noise-xyz:registry=https://npm.pkg.github.com
```

2. Install the package:

```bash
npm install @noise-xyz/abi-hub
```

3. Import the ABIs in your code:

```typescript
import {
    FeesABI,
    NoiseDevTokenABI,
    StandaloneOrderBookABI,
} from "@noise-xyz/abi-hub";
```

## For Maintainers

### Setup

1. Create a Personal Access Token (Classic) on GitHub:

    - Go to Settings → Developer settings → Personal access tokens → Tokens (classic)
    - Generate new token
    - Enable `read:packages`, `write:packages`, and `delete:packages` scopes
    - Copy the token

2. Create a `.npmrc` file in your home directory (`~/.npmrc`):

```
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
@noise-xyz:registry=https://npm.pkg.github.com
```

### Publishing

To publish a new version:

1. Update the version in `package.json`
2. Run:

```bash
npm publish
```

### Security Notes

-   Never commit the `.npmrc` file containing your token
-   Never share your GitHub token
-   If a token is exposed, revoke it immediately in GitHub settings

### Development

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Make your changes
4. Update tests if necessary
5. Create a pull request
