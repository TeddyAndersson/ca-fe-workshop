# React Vite Clean Architecture Workshop

Welcome to the **React Vite Clean Architecture Workshop** repository! In this workshop, we'll be exploring a scalable React application following **Clean Architecture** principles. The goal is to help you understand how to organize your codebase in a maintainable, modular way by separating concerns across different layers.

## Workshop Overview

During this workshop, we will guide you through setting up a project that follows Clean Architecture. This structure helps keep the core business logic isolated from other parts of the system, making it easier to maintain and extend.

### Learning Objectives:

1. Understand the fundamentals of **Clean Architecture** and its layers.
2. Explore how to separate concerns between **domain logic**, **use cases**, **infrastructure**, and **presentation** layers.
3. Practice creating a modular, testable architecture that can scale with your project.

---

## Project Structure

The project is divided into several key layers, each responsible for a distinct part of the application:

src/ │ ├── core/ │ ├── domain/ # Entities and business rules (Core logic) │ ├── application/ # Use cases and service interfaces │ ├── infrastructure/ # Data access and external service integrations │ ├── interface/ # UI & API gateways, external interfaces │ ├── presentation/ # React components, hooks, and UI logic │ ├── App.tsx # Main application entry point └── index.tsx # Application bootstrap

### Layer Details:

#### 1. `src/core/domain`

The **domain** layer contains the core entities, value objects, and business rules. This layer is independent of frameworks and external data sources.

Example:
- **Entities**: Business models (e.g., `User.ts`)
- **Value Objects**: Immutable business objects (e.g., `Email.ts`)
- **Domain Logic**: Business-specific rules (e.g., `AuthService.ts`)

#### 2. `src/core/application`

The **application** layer contains use cases or services that define the application's flow. These use cases interact with the domain and infrastructure layers.

Example:
- **Use Cases**: Business operations (e.g., `CreateUser.ts`)
- **Service Interfaces**: Contracts for infrastructure services (e.g., `IUserRepository.ts`)

#### 3. `src/infrastructure`

This layer is responsible for interacting with external systems like APIs or databases. It contains the implementations of the service interfaces defined in the application layer.

Example:
- **API Clients**: HTTP services (e.g., `UserApi.ts`)
- **Repositories**: Data handling logic (e.g., `UserRepository.ts`)

#### 4. `src/interface`

The **interface** layer acts as a boundary for external systems, such as a REST API or user interfaces. It handles transforming data between the application and external systems.

Example:
- **Controllers**: API route handling (e.g., `UserController.ts`)
- **Mappers**: Translating data structures between layers

#### 5. `src/presentation`

This is the **presentation** layer containing React components, hooks, and any logic related to the UI. It handles user interaction and provides a clear separation from the domain logic.

Example:
- **Components**: React views (e.g., `UserForm.tsx`)
- **Hooks**: State management (e.g., `useUser.ts`)

---

## Getting Started

To get started with this workshop, follow the instructions below:

### 1. Clone the repository:

```bash
git clone <repository-url>
cd <project-folder>
```
### 2. Clone the repository:

```bash
npm install
```


### 3. Start the development server:

```bash
npm run dev
```
This will start the Vite development server. Open your browser and navigate to http://localhost:5173.

### 4. Build the project:

```bash
npm run build
```
### 5. Preview the production build:

```bash
npm run preview
```
## Workshop Requirements
- Basic knowledge of React and JavaScript/TypeScript.
- Familiarity with concepts like REST APIs and state management.
- A modern web browser and an IDE (e.g., VS Code).

## Clean Architecture Benefits
- Separation of Concerns: Each layer has a specific responsibility.
- Testability: Core business logic is decoupled from external dependencies, making it easier to test.
- Maintainability: With the business logic isolated, changes in the UI or infrastructure don’t affect the core logic.
- Scalability: As the project grows, new features can be easily added without disrupting existing ones.
