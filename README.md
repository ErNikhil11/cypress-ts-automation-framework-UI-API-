# Cypress + TypeScript Automation Framework

This is a scalable and modular Cypress automation framework designed using **TypeScript**, supporting both **UI and API** testing, following SDET best practices. It includes:

- Page Object Model (POM) for UI tests
- API test integration using `cy.request`
- Code coverage using `@cypress/code-coverage`
- TypeScript for type safety
- Custom Cypress commands for reusable actions

---

## 📁 Folder Structure

```
cypress-project/
├── cypress/
│   ├── e2e/
│   │   ├── ui/                # UI tests
│   │   └── api/               # API tests
│   ├── pages/                 # Page Object Model classes
│   └── support/               # Custom commands and setup
├── coverage/                  # Code coverage reports
├── cypress.config.ts          # Cypress configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Project dependencies & scripts
├── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run Cypress in interactive mode

```bash
npm run cy:open
```

### 3. Run all tests in headless mode

```bash
npm run test
```

### 4. Run with code coverage report

```bash
npm run test
npm run coverage
```

---

## 📊 Code Coverage

The framework uses `@cypress/code-coverage` and `nyc` to generate coverage reports.

To view the report:

```bash
npm run coverage
```

It will generate reports inside the `/coverage` folder.
