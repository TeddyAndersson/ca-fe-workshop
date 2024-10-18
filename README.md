# Node.js TypeScript Clean Architecture Boilerplate

## Overview

This repository provides a boilerplate for a Node.js service using TypeScript and following Clean Architecture principles with a functional programming paradigm. Unlike traditional object-oriented designs, this implementation leverages pure functions, immutability, and composition to model the domain and business logic.

### Key Features

- **Node.js with TypeScript**: Strongly typed development with support for modern JavaScript features.
- **Clean Architecture**: Clear separation of concerns between core domain logic and infrastructure.
- **Functional Programming**: Logic is built using pure functions and immutability.
- **Domain-Driven Design (DDD)**: Domain models at the heart of the application.
- **Dependency Injection**: Promotes loose coupling between modules using Inversion of Control (IoC).
- **Express.js**: For handling HTTP requests (with easily replaceable interface adapters).
- **Docker**: Containerized development and production environments.
- **Linting and Formatting**: Using ESLint and Prettier for code quality and consistency.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Environment Variables](#environment-variables)
- [Docker Setup](#docker-setup)
- [Technologies Used](#technologies-used)
- [License](#license)

## Getting Started

This project provides a boilerplate for building Node.js services using TypeScript, structured according to Clean Architecture principles. It is meant to serve as a starting point for building scalable, maintainable, and testable applications.

### Prerequisites

- **Node.js** (v18.x or higher)
- **npm** (v8.x or higher) or **yarn**
- **Docker** (optional but recommended for local development and deployment)

### Project Structure

The project is structured around the Clean Architecture pattern with clear separation between different layers. The `src` folder contains the following structure:

```bash
src/
 ├── core/               # Core business logic
 │   ├── application/     # Use cases and business logic
 │   └── domain/          # Entities, aggregates, value objects
 ├── infrastructure/     # External services, repositories, frameworks (e.g., database, API, third party libraries)
 ├── interface/          # Interfaces for user input (e.g., controllers, HTTP request handlers)
 ├── presentation/       # Presentation layer, the gateway to the outside world (e.g., REST APIs)
```
### Layer Breakdown
- Core Layer (core):

    - Application: Contains the use cases (interactors) that orchestrate the flow of data to and from the domain and external systems. This layer is purely business logic without any external dependencies.
    - Domain: Contains the enterprise-wide business rules. Entities, value objects, domain services, and repository interfaces reside here. The domain is the heart of the system and should be as independent as possible from external concerns.

- Infrastructure Layer (infrastructure):

    - Contains concrete implementations for database access, external APIs, and other external services. This layer implements the interfaces defined in the domain and provides concrete solutions for persistence and communication with external systems.
- Interface Layer (interface):

    - Contains controllers, routes, and any other adapters that handle user inputs. These classes and functions are responsible for translating requests into a format that the application layer can understand. In a REST API scenario, this would include the HTTP controllers.
- Presentation Layer (presentation):

    - This layer is responsible for presenting information to the outside world, often through an API (e.g., REST, GraphQL). It may contain request/response mappers, formatters, and DTOs to adapt data from the core to the outside world.

### Design Patterns
- Use Case Pattern: Each business use case is encapsulated in its own class, making the application logic modular and easy to extend.
- Repository Pattern: Abstracts data access logic from the domain, providing an interface for working with different data sources.
- Dependency Injection (IoC): The project leverages an IoC container to manage dependencies, promoting loose coupling and testability.
### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

3. Copy the .env.example file to .env and configure environment variables:

    ```bash
    cp .env.example .env
    ```

### Running the Application
#### Development
To run the application in development mode with hot-reloading:
```bash
npm run dev 
```

The app will BY DEFAULT be available at http://localhost:5050.

Production
To build and run the application in production mode:

1. Build the project:

    ```bash
    npm run build
    ```

2. Start the server:

    ```bash
    npm start
    ```

### Testing
This boilerplate includes setup for unit tests using Jest. Test coverage includes application use cases and domain logic, with mocking for infrastructure dependencies.

Run tests with:

```bash
npm test
```

Or for coverage:

```bash
npm run test:coverage
```

### Test Structure
- Unit Tests: For domain and application layers.

- Integration Tests: For interactions between the application and external systems (e.g., databases).

Tests are located under the __tests__ folder following a feature-oriented structure.

### Environment Variables
The application uses environment variables to manage configurations. Below are the common variables required in .env:



```bash
PORT=3000
```

### Docker Setup
The repository includes a Dockerfilefor containerized development and production.

Building and Running with Docker

1. Build the Docker image:

```bash
docker build -t your-service-name .
```

2. Run the Docker container:

```bash
docker run -d -p 3000:3000 your-service-name
```

Alternatively, create a Docker Compose file for local development and run:

```bash
docker-compose up --build
```

### Technologies Used
- **Node.js**: JavaScript runtime for building server-side applications.

- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.

- **Express**: Lightweight framework for handling HTTP requests.

- **Jest**: Testing framework for JavaScript and TypeScript.

- **Docker**: For containerizing the application.

- **ESLint**: For linting and ensuring code quality.

- **Prettier**: For code formatting.

### License
This project is licensed under the MIT License - see the LICENSE file for details.