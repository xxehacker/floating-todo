<p align="center">
  <img src="./public/logo.png" width="20%" alt="FLOATING-TODO-logo">
</p>
<p align="center">
    <h1 align="center">FLOATING-TODO</h1>
</p>
<p align="center">
    <em><code>❯ A modern floating todo app built with React, Redux, and Tailwind CSS.</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/xxehacker/floating-todo?style=flat&logo=opensourceinitiative&logoColor=white&color=5adc16" alt="license">
	<img src="https://img.shields.io/github/last-commit/xxehacker/floating-todo?style=flat&logo=git&logoColor=white&color=5adc16" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/xxehacker/floating-todo?style=flat&color=5adc16" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/xxehacker/floating-todo?style=flat&color=5adc16" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/Redux-764ABC.svg?style=flat&logo=Redux&logoColor=white" alt="Redux">
	<br>
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=flat&logo=Tailwind-CSS&logoColor=white" alt="Tailwind CSS">
</p>

<br>

#####  Table of Contents

- [Video Demo](#-video-demo)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
    - [ Prerequisites](#-prerequisites)
    - [ Installation](#-installation)
    - [ Usage](#-usage)
- [ Contributing](#-contributing)
- [ License](#-license)
---

## Video Demo
<!-- [![Watch the video](https://i.sstatic.net/Vp2cE.png)](https://youtu.be/vt5fpE0bzSY) -->
[![Watch the video](https://img.youtube.com/vi/UwMY3aSCzA4/maxresdefault.jpg)](https://youtu.be/UwMY3aSCzA4)


##  Features

- Add todo item
- Delete todo item
- View todo item
- Drag and drop todo item

---

##  Repository Structure

```sh
└── floating-todo/
    ├── LICENSE
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   ├── icons
    │   ├── section.svg
    │   └── vite.svg
    ├── src
    │   ├── components
    │   ├── constants.js
    │   ├── index.css
    │   ├── main.jsx
    │   └── store
    ├── tailwind.config.js
    └── vite.config.js
```

---

##  Modules

<details closed><summary>.</summary>

| File | Summary |
| --- | --- |
| [index.html](https://github.com/xxehacker/floating-todo/blob/main/index.html) | <code>❯ index file </code> |
| [postcss.config.js](https://github.com/xxehacker/floating-todo/blob/main/postcss.config.js) | <code>❯ postcss config file </code> |
| [vite.config.js](https://github.com/xxehacker/floating-todo/blob/main/vite.config.js) | <code>❯ vite config file </code> |
| [package.json](https://github.com/xxehacker/floating-todo/blob/main/package.json) | <code>❯ REPLACE-ME</code> |
| [tailwind.config.js](https://github.com/xxehacker/floating-todo/blob/main/tailwind.config.js) | <code>❯ tailwind config file </code> |
| [package-lock.json](https://github.com/xxehacker/floating-todo/blob/main/package-lock.json) | <code>❯ package lock file </code> |

</details>

<details closed><summary>src</summary>

| File | Summary |
| --- | --- |
| [constants.js](https://github.com/xxehacker/floating-todo/blob/main/src/constants.js) | <code>❯ constants file </code> |
| [index.css](https://github.com/xxehacker/floating-todo/blob/main/src/index.css) | <code>❯ index css file </code> |
| [main.jsx](https://github.com/xxehacker/floating-todo/blob/main/src/main.jsx) | <code>❯ main jsx file </code> |

</details>

<details closed><summary>src.store</summary>

| File | Summary |
| --- | --- |
| [store.js](https://github.com/xxehacker/floating-todo/blob/main/src/store/store.js) | <code>❯ store file </code> |
| [todoSlice.js](https://github.com/xxehacker/floating-todo/blob/main/src/store/todoSlice.js) | <code>❯ todo slice file </code> |

</details>

<details closed><summary>src.components</summary>

| File | Summary |
| --- | --- |
| [DisplayTask.jsx](https://github.com/xxehacker/floating-todo/blob/main/src/components/DisplayTask.jsx) | <code>❯ display task component </code> |
| [Card.jsx](https://github.com/xxehacker/floating-todo/blob/main/src/components/Card.jsx) | <code>❯ card component </code> |
| [App.jsx](https://github.com/xxehacker/floating-todo/blob/main/src/components/App.jsx) | <code>❯ app component </code> |
| [index.js](https://github.com/xxehacker/floating-todo/blob/main/src/components/index.js) | <code>❯ index js file </code> |
| [AddTodo.jsx](https://github.com/xxehacker/floating-todo/blob/main/src/components/AddTodo.jsx) | <code>❯ add todo component </code> |
| [Forground.jsx](https://github.com/xxehacker/floating-todo/blob/main/src/components/Forground.jsx) | <code>❯ forground component </code> |
| [Background.jsx](https://github.com/xxehacker/floating-todo/blob/main/src/components/Background.jsx) | <code>❯ background component </code> |

</details>

---

##  Getting Started

###  Prerequisites

**React**: `version 18.3.1`
**Redux**: `version 8.1.3`
**Tailwind CSS**: `version 3.4.3`
**Vite**: `version 5.4.1`

###  Installation

Build the project from source:

1. Clone the floating-todo repository:
```sh
❯ git clone https://github.com/xxehacker/floating-todo
```

2. Navigate to the project directory:
```sh
❯ cd floating-todo
```
###  Usage

3. To run the project, execute the following command:

```sh
❯ npm run dev
```
---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/xxehacker/floating-todo/issues)**: Submit bugs found or log feature requests for the `floating-todo` project.
- **[Submit Pull Requests](https://github.com/xxehacker/floating-todo/pulls)**: Review open PRs, and submit your own PRs.


<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/xxehacker/floating-todo
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/xxehacker/floating-todo/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=xxehacker/floating-todo">
   </a>
</p>
</details>

---

##  License

This project is protected under the [MIT] License. For more details, refer to the [LICENSE](https://github.com/xxehacker/floating-todo/blob/main/LICENSE) file.

---
