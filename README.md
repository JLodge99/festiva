<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![MIT License][license-shield]][license-url]
[![Code Coverage][coverage-shield]][coverage-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/JLodge99/festiva">
    <img src="webapp/public/apple-touch-icon.png" alt="Logo" width="80" height="80">
  </a>

<h1 align="center">Festiva</h1>

  <p align="center">
    Web Application for displaying international holidays
    <br />
    <a href="https://festiva.xyz/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Single Page Application showcasing Public Holiday API [Nager.Date](https://date.nager.at/Api) using Preact and Vite.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

-   [![Preact][Preact.js]][Preact-url]
-   [![Vite][Vite]][Vite-url]
-   [![Typescript][Typescript]][Typescript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Install packages

-   ```sh
    pnpm install
    ```

### Build

-   ```sh
    pnpm build
    ```

### Development

-   ```sh
    pnpm dev
    ```

### Testing

-   ```sh
    # Run all tests
    pnpm test
    
    # Run tests in watch mode
    pnpm test:watch
    
    # Run tests with UI
    pnpm test:ui
    
    # Run tests with coverage
    pnpm test:coverage
    ```

See [TESTING.md](./TESTING.md) for detailed testing configuration and workspace setup.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Visit the [live demo](https://festiva.xyz/) to explore international holidays by country and date. The application provides an intuitive interface to browse public holidays from around the world using the Nager.Date API.

### Local Development

After installation, start the development server:

```sh
pnpm dev
```

The application will be available at `http://localhost:5173` (or the next available port).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

-   [ ] Add holiday search functionality
-   [ ] Implement calendar view
-   [ ] Add holiday notifications
-   [ ] Support for custom holiday lists
-   [ ] Mobile app version

See the [open issues](https://github.com/JLodge99/festiva/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/JLodge99/festiva/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=JLodge99/festiva" alt="contrib.rocks image" />
</a>

<!-- LICENSE -->

## License

Distributed under the MIT License. See [`LICENSE.txt`](./LICENSE.txt) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Jerold Lodge

Project Link: [https://github.com/JLodge99/festiva](https://github.com/JLodge99/festiva)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

-   [Nager.Date API](https://date.nager.at/Api) for providing comprehensive public holiday data
-   [Preact](https://preactjs.com/) for the lightweight React alternative
-   [Vite](https://vite.dev/) for the fast build tool and development server
-   [Best-README-Template](https://github.com/othneildrew/Best-README-Template) for the README structure

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/JLodge99/festiva.svg?style=for-the-badge
[contributors-url]: https://github.com/JLodge99/festiva/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/JLodge99/festiva.svg?style=for-the-badge
[forks-url]: https://github.com/JLodge99/festiva/network/members
[stars-shield]: https://img.shields.io/github/stars/JLodge99/festiva.svg?style=for-the-badge
[stars-url]: https://github.com/JLodge99/festiva/stargazers
[issues-shield]: https://img.shields.io/github/issues/JLodge99/festiva.svg?style=for-the-badge
[issues-url]: https://github.com/JLodge99/festiva/issues
[license-shield]: https://img.shields.io/github/license/JLodge99/festiva.svg?style=for-the-badge
[license-url]: https://github.com/JLodge99/festiva/blob/main/LICENSE.txt
[coverage-shield]: https://img.shields.io/codecov/c/github/JLodge99/festiva?style=for-the-badge
[coverage-url]: https://codecov.io/gh/JLodge99/festiva
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Preact.js]: https://img.shields.io/badge/Preact-6200aa?style=for-the-badge&logo=react&logoColor=FFFFFF
[Preact-url]: https://preactjs.com/
[Vite]: https://img.shields.io/badge/Vite-35495E?style=for-the-badge&logo=vite&logoColor=4FC08D
[Vite-url]: https://vite.dev/
[Typescript]: https://img.shields.io/badge/Typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
