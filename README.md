# Second App

This repository contains a sample React app, built using **Vite**, that uses a Button component from an external submodule repository, the [Library UI Repository](https://github.com/mitevskasara/library). The goal of this app is to demonstrate how to integrate shared components from a submodule and use them within your project.


Read more in this article: [Share React Components Across Projects with Git Submodules](https://formfusion.dev/blog/2023/05/sharing-react-components-across)

**Demo**: https://first-app-smitevskas-projects.vercel.app/ <br/>
**Playground**: https://stackblitz.com/~/github.com/mitevskasara/first-app?file=README.md

## Table of Contents
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Submodule Setup](#submodule-setup)
- [Running the App](#running-the-app)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

This app displays a simple button component, which is imported from another repository that is added as a submodule. It is a basic example to show how you can share components across projects and manage them via Git submodules.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- **Node.js** (v16 or higher)
- **Git**

## Installation

If you want to clone this repository locally to play around with the Button component, experiment with its features and see how it looks in action, follow the installation steps below.

1. **Clone the repository**:

   ```bash
   git clone https://github.com/mitevskasara/second-app.git
   ```

2. **Initialize and update the submodule**:

    This repository includes a submodule that contains shared UI components, including the Button component. You must initialize and update the submodule after cloning the repository.

   ```bash
   git submodule init
   git submodule update
    ```

    This will clone the submodule repository into your project, making the shared components available for use.

3. **Install dependencies**:

    Navigate into the root project directory and install the required dependencies:
    ```bash
    npm install
    ```

## Submodule Setup

This project uses [Git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) to include the shared Button component from the [Library UI Repository](https://github.com/mitevskasara/library).

### Managing Submodules:

Pulling the latest changes from the submodule:

```bash
git submodule update --remote
```
## Running the App

Once the dependencies are installed and the submodule is set up, run the development server:

```bash
npm run dev
```
Open your browser and navigate to http://localhost:5173. You should see a heading and a button from the Library UI Repository.

## Usage

In this app, we're importing and using the Button component from the submodule. Below is the main App component that shows how the button is used.

```javascript
import Button from "./components/button";

function App() {
  return (
    <>
      <h1>Hi, I'm a Button from <a href="https://github.com/mitevskasara/library">Library UI Repository</a></h1>
      <Button onClick={() => alert('Thanks!')}>Click me!</Button>
    </>
  );
}

export default App;
```

### Modifying the Button Component

If you'd like to modify the Button component, you can do so in the submodule repository:

1. Navigate to the library submodule directory.
2. Make changes to the button component.
3. Commit the changes in the submodule.
4. Update the main repository with the changes by committing the submodule reference.


## Folder Structure

The project has the following structure:

```root
│
├── node_modules
├── src
│   ├── components
│   │   └── button     # Button component from the submodule
├── App.jsx
├── main.jsx
├── .gitmodules        # Git configuration file for submodules
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Contributing

Feel free to contribute to this repository by submitting issues, creating pull requests, or improving the documentation. Make sure to follow proper Git workflows, especially when working with submodules.

## License

This project is licensed under the MIT License.
