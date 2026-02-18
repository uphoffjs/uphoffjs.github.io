export interface ProjectSection {
  problem: string
  approach: string
  tools: string[]
  results: string
}

export interface Project {
  slug: string
  title: string
  shortDescription: string
  tags: string[]
  content: ProjectSection
  role: string
}

export const projects: Project[] = [
  {
    slug: 'portfolio-e2e-suite',
    title: 'Portfolio E2E Test Suite',
    shortDescription:
      'End-to-end test automation suite for a Next.js portfolio site, covering navigation, accessibility, responsiveness, and link validation with Cypress and cypress-axe.',
    tags: ['Cypress', 'TypeScript', 'GitHub Actions'],
    content: {
      problem:
        'A static Next.js portfolio deployed to GitHub Pages needed reliable regression coverage across navigation flows, responsive breakpoints, and WCAG AA accessibility requirements. Manual testing before each deployment was slow and error-prone, and the site had no automated quality gates in CI.',
      approach:
        'I built a Cypress E2E suite structured around discrete test specs for each concern: navigation and routing, accessibility (via cypress-axe), responsive layout at mobile and desktop viewports, and external link validity. I wired the suite into a GitHub Actions workflow so every push to main triggers a full build-and-test cycle before deployment. Stryker mutation testing was added to verify the effectiveness of the test assertions themselves.',
      tools: ['Cypress', 'TypeScript', 'cypress-axe', 'GitHub Actions', 'Stryker'],
      results:
        'The suite catches regressions automatically on every push. Accessibility violations surface immediately in CI before users encounter them. The mutation testing pass rate confirmed that assertions were genuinely detecting real failures rather than passing vacuously. Deploy confidence increased significantly — no manual pre-deploy checks needed.',
    },
    role: 'Solo project — all test design, implementation, and CI configuration by Jacob Uphoff.',
  },
  {
    slug: 'api-contract-testing',
    title: 'REST API Contract & Integration Tests',
    shortDescription:
      'Playwright-based API testing suite validating contract compliance, error handling, and response schema integrity for a Python FastAPI service.',
    tags: ['Playwright', 'Python', 'FastAPI'],
    content: {
      problem:
        'A FastAPI microservice exposed a REST API consumed by multiple frontend clients. Schema drift between the API implementation and the documented contract was causing intermittent frontend bugs that were difficult to reproduce. There was no automated contract verification and integration tests were sparse, leaving error-handling paths untested.',
      approach:
        "Using Playwright's request API, I wrote a Python-based integration test suite that treated the running FastAPI service as a black box. Tests covered happy-path response schemas, status codes, and pagination, along with negative cases for invalid inputs, missing required fields, and auth failures. I used Pydantic models to define expected response shapes and asserted structural compliance on every response. The suite ran against a local Docker Compose environment in CI.",
      tools: ['Playwright', 'Python', 'FastAPI', 'Docker', 'Pydantic'],
      results:
        'The suite caught three undocumented API breaking changes within the first two weeks of implementation. Error-handling coverage went from near-zero to covering all defined 4xx/5xx paths. The Pydantic schema assertions made it immediately obvious when a field was renamed or dropped, eliminating the category of "silent schema drift" bugs.',
    },
    role: 'Solo project — all test design, implementation, and Docker configuration by Jacob Uphoff.',
  },
  {
    slug: 'legacy-regression-harness',
    title: 'Legacy Web App Regression Harness',
    shortDescription:
      'Selenium WebDriver regression suite for a Java Spring Boot web application, stabilizing a brittle existing test suite and expanding critical-path coverage.',
    tags: ['Selenium', 'Java', 'Spring Boot'],
    content: {
      problem:
        'A Spring Boot web application had an existing Selenium suite that was failing over 40% of the time due to timing issues, hard-coded waits, and brittle locators tied to generated CSS class names. The team had low trust in the suite and was considering abandoning automated UI testing entirely. Critical user flows — checkout, account management, search — had no reliable coverage.',
      approach:
        'I audited the existing suite to categorize failures as timing issues, locator fragility, or genuine defects. Hard-coded `Thread.sleep()` calls were replaced with explicit WebDriverWait conditions. Locators were refactored to use stable data-test-id attributes added with developer collaboration. I extracted a Page Object Model layer to reduce duplication and make locator updates a single-site change. New test specs were written for the three critical paths that had no coverage.',
      tools: ['Selenium', 'Java', 'Spring Boot', 'Jenkins', 'PostgreSQL'],
      results:
        'Flakiness rate dropped from 40% to under 3%. The team re-engaged with the suite as a reliable signal. Three previously uncovered critical paths gained full regression coverage. The Page Object refactor made it straightforward to add new tests — developer onboarding time for writing new specs dropped noticeably.',
    },
    role: 'Solo project — all test audit, refactoring, and new coverage design by Jacob Uphoff.',
  },
]
