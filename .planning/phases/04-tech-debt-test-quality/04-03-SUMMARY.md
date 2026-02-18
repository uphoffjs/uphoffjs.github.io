---
phase: 04-tech-debt-test-quality
plan: 03
subsystem: testing
tags: [cypress, e2e, data-cy, homepage, 404, responsive, navigation]

# Dependency graph
requires:
  - phase: 04-02
    provides: data-cy attributes added to Navbar (nav-mobile-github, nav-logo) and all pages
provides:
  - Homepage E2E spec covering all 7 home-* data-cy attributes
  - 404 E2E spec with click-and-verify back-to-home navigation
  - nav-mobile-github assertion in responsive spec
  - footer-github and nav-logo assertions in navigation spec
affects: [future-test-plans, ci-pipeline]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - 'failOnStatusCode: false on cy.visit() for 404 page routes'
    - 'click-and-verify pattern for navigation tests (not just href checks)'
    - 'getBySel() exclusively for all Cypress selectors (zero .find() usage)'

key-files:
  created:
    - cypress/e2e/homepage.cy.ts
    - cypress/e2e/404.cy.ts
  modified:
    - cypress/e2e/responsive.cy.ts
    - cypress/e2e/navigation.cy.ts

key-decisions:
  - '404 test uses click-and-verify (not just href assertion) per user decision'
  - 'home-cta excluded from homepage.cy.ts — already covered in navigation.cy.ts to avoid duplication'
  - 'failOnStatusCode: false required on cy.visit() for static-export 404 pages'

patterns-established:
  - 'Homepage spec: each data-cy attribute gets its own it() block for clear failure isolation'
  - '404 spec: click-and-verify pattern confirms full navigation round-trip'
  - 'Responsive spec: mobile GitHub link asserted after opening drawer (realistic user flow)'

requirements-completed:
  - TEST-02
  - TEST-03
  - IDEN-03

# Metrics
duration: 1min
completed: 2026-02-18
---

# Phase 4 Plan 3: E2E Coverage — Homepage, 404, and Missing Selectors Summary

**9 new E2E test cases covering all 16 previously untested data-cy attributes: homepage spec (4 tests), 404 click-and-verify spec (3 tests), mobile GitHub drawer test, footer-github and nav-logo assertions**

## Performance

- **Duration:** ~1 min
- **Started:** 2026-02-18T18:07:31Z
- **Completed:** 2026-02-18T18:08:27Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments

- Created `cypress/e2e/homepage.cy.ts` with 4 tests covering all 7 homepage data-cy attributes (home-hero, home-heading, home-skills-preview, home-skill-tag, home-cta-section, home-cta-projects, home-cta-links)
- Created `cypress/e2e/404.cy.ts` with 3 tests including click-and-verify that navigates to bad URL, asserts 404 renders, clicks "Back to Home", and confirms homepage loads
- Added `nav-mobile-github` assertion to `responsive.cy.ts` in the mobile drawer context (opens drawer, verifies github.com href)
- Added `nav-logo` click-and-verify and `footer-github` href assertion to `navigation.cy.ts`

## Task Commits

Each task was committed atomically:

1. **Task 1: Create homepage.cy.ts and 404.cy.ts E2E test specs** - `e26e89c` (feat)
2. **Task 2: Add missing assertions to existing test specs** - `fa98d5d` (feat)

**Plan metadata:** (docs commit — see below)

## Files Created/Modified

- `cypress/e2e/homepage.cy.ts` - New spec: 4 tests for all homepage data-cy attributes
- `cypress/e2e/404.cy.ts` - New spec: 3 tests including click-and-verify back-to-home navigation
- `cypress/e2e/responsive.cy.ts` - Added nav-mobile-github assertion in mobile viewport context
- `cypress/e2e/navigation.cy.ts` - Added nav-logo click-and-verify and footer-github href assertion

## Decisions Made

- 404 test uses click-and-verify pattern (navigates, asserts 404 renders, clicks link, confirms homepage) rather than a simple href check — tests actual user flow
- `home-cta` intentionally excluded from homepage.cy.ts because it is already tested in navigation.cy.ts ("navigates from home to projects via CTA") — avoids duplication
- `failOnStatusCode: false` applied to cy.visit() in 404 spec — required because the static Next.js export returns a non-200 status code for 404 pages and Cypress would fail the test otherwise

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- All 16 previously untested data-cy attributes now have explicit E2E assertions
- Zero non-data-cy selectors (`.find()`) in the entire test suite
- Cypress suite is ready for CI validation
- Phase 04 tech-debt-test-quality is complete pending full Cypress run validation

---

_Phase: 04-tech-debt-test-quality_
_Completed: 2026-02-18_

## Self-Check: PASSED

- FOUND: cypress/e2e/homepage.cy.ts
- FOUND: cypress/e2e/404.cy.ts
- FOUND: cypress/e2e/responsive.cy.ts
- FOUND: cypress/e2e/navigation.cy.ts
- FOUND: .planning/phases/04-tech-debt-test-quality/04-03-SUMMARY.md
- FOUND commit: e26e89c (feat: create homepage.cy.ts and 404.cy.ts)
- FOUND commit: fa98d5d (feat: add missing E2E assertions)
