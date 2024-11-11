1. Introduction

This project is an end-to-end automation testing framework built using Playwright with TypeScript. The framework is designed to provide a scalable, robust, and maintainable solution for testing web, mobile, and API applications. It follows industry best practices by incorporating the Page Object Model (POM), data-driven testing, and CI/CD integration with Jenkins. Additionally, it integrates with Allure Reporting for comprehensive test result analysis.

2. Project Structure

PLAYWRIGHT
├── allure-report/     # Generated Allure reports
├── allure-results/    # Test execution results for Allure
├── node_modules/      # Node.js dependencies
├── config/            # Configuration files for different environments
├── pageObjectManager/ # Manages reusable page objects
├── testData/          # Stores test data (JSON format)
├── utils/             # Utility functions and helpers
├── tests/             # Contains test scripts organized by type 
  ├── tests-api/       # API test cases │
  ├── tests-mobile/    # Mobile-specific test cases
  └── tests-web/       # Web application test cases
├── screenshots/       # Screenshots captured on failures
├── .gitignore         # Specifies files to ignore in version control
├── Jenkinsfile        # CI/CD pipeline configuration
├── package.json       # Project metadata and npm scripts
├── tsconfig.json      # TypeScript compiler configuration
└── playwright-web.config.ts    # Web Playwright configuration
└── playwright-mobilw.config.ts # Mobile Playwright configuratioN
└── playwright-api.config.ts    # Api Playwright configuration
└── playwright.config.ts        # Base Playwright configuration

3. Key Components :
   Page Object Manager :
   • Centralized management of page elements and actions using POM design pattern.
   • Ensures code reusability and maintainability across test cases.
   Utilities :
   • ApiUtils.ts: Handles REST API requests (GET, POST, PUT, DELETE).
   • AuthHelper.ts: Manages authentication flows, including token-based authentication.
   • ExcelUtils.ts: Provides methods to read and write data from Excel sheets.
   • WrapperMethodsWeb.ts: Wraps Playwright methods for actions like click, type, and select with enhanced error handling.

4. How to Reuse Methods
 • Page Object Methods:
   Import and use page-specific methods for UI interactions. 
   const homePage = new HomePage(page);
   await homePage.navigateToHome();
   await homePage.searchProduct("Laptop");

  • API Methods:
  Use ApiUtils.ts to make HTTP requests.
  const apiUtils = new ApiUtils();
  const response = await apiUtils.post('/api/v1/orders', orderData);

  • Data Handling: Leverage ExcelUtils.ts for data-driven tests.
  const data = excelUtils.readExcel('testData.xlsx', 'Sheet1');

 • Wrapper Methods: Use WrapperMethodsWeb.ts for enhanced web actions.
 await wrapper.clickElement(page, selector);
 await wrapper.enterText(page, inputField, "sample text");

5. Configuration and Environment Setup 
Prerequisites :
   • Node.js (v18 or higher)
   • Allure CLI (for generating reports)
Installation:
    npm install 
Environment Configuration :
   • Use env.dev file to set up environment-specific details like base URLs, API endpoints, and credentials.

6. How to Run Tests :
 Run All Tests :
   npx playwright test
 Run Web Tests :
   npx playwright test --config=playwright-web.config.ts
 Run Mobile Tests :
   npx playwright test --config=playwright-mobile.config.ts
 Run API Tests :
   npx playwright test --config=playwright-api.config.ts
 Generate and View Allure Report :
   allure generate allure-results --clean -o allure-report allure open allure-report
 Run Tests with Tags :
   npx playwright test --grep "@regression"

7. Running Tests in Jenkins 

Jenkins Pipeline Configuration :
 Ensure Jenkins has the NodeJS and Allure plugins installed.
 Created a Pipeline job in Jenkins and configure it to use the project’s Jenkinsfile.
Running the Job :
• Navigate to Jenkins, select your pipeline job, and click Build Now.
• Check the console output for progress and results.
• Access the Allure Report directly from Jenkins.

8. Reporting 
Allure Report
 • Generates detailed test reports with logs, screenshots, and status.
  allure generate allure-results --clean -o allure-report Playwright HTML Report
 • Use Playwright’s built-in report for quick debugging.
  npx playwright show-report

9. Best Practices
   • Follow POM: Use Page Object Model for UI interactions.
   • Use Environment Variables: Store sensitive data in environment files.
   • Data-Driven Testing: Utilize JSON and Excel files for test data.
   • CI Integration: Leverage Jenkins for automated test execution.
   • Version Control: Use Git branches for managing code changes.
