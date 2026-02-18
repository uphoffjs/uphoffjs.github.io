---
phase: 04-tech-debt-test-quality
plan: 02
subsystem: testing
tags: [cypress, data-cy, e2e, selectors, accessibility]

# Dependency graph
requires:
  - phase: 01.1-testing-infrastructure
    provides: Cypress infrastructure, getBySel custom command, lint-cypress hook
  - phase: 02-content
    provides: ProjectCard component, Navbar mobile drawer implementation
provides:
  - data-cy="project-card-link" on ProjectCard Link element
  - data-cy="nav-mobile-github" on Navbar mobile drawer GitHub anchor
  - projects.cy.ts using exclusively getBySel() — zero .find('a') selectors
affects: [cypress tests, Navbar, ProjectCard]

# Tech tracking
tech-stack:
  added: []
  patterns:
    [
      data-cy on every interactive element,
      within() + getBySel() pattern for nested element selection,
    ]

key-files:
  created: []
  modified:
    - src/components/ProjectCard.tsx
    - src/components/Navbar.tsx
    - cypress/e2e/projects.cy.ts

key-decisions:
  - "data-cy='project-card-link' on the 'Read case study' Link — enables clean selector without .find('a')"
  - "data-cy='nav-mobile-github' separate from nav-github — mobile and desktop variants get distinct attributes"
  - 'within() + getBySel() instead of .find() — enforces data-cy-only selector policy throughout test suite'

patterns-established:
  - 'Pattern: All interactive Link and anchor elements must have data-cy attributes'
  - 'Pattern: Nested element selection uses within() + getBySel() — never .find() with tag/class selectors'

requirements-completed:
  - TEST-02
  - TEST-07
  - IDEN-03

# Metrics
duration: 1min
completed: 2026-02-18
---

# Phase 4 Plan 02: Data-cy Attributes and Selector Cleanup Summary

**data-cy="project-card-link" on ProjectCard Link and data-cy="nav-mobile-github" on mobile GitHub anchor — zero .find() selectors across entire Cypress suite**

## Performance

- **Duration:** 1 min
- **Started:** 2026-02-18T18:03:25Z
- **Completed:** 2026-02-18T18:04:24Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments

- Added `data-cy="project-card-link"` to the "Read case study" Link in ProjectCard.tsx, enabling data-cy-based navigation in tests
- Added `data-cy="nav-mobile-github"` to the mobile drawer GitHub `<a>` element in Navbar.tsx, completing IDEN-03 requirement
- Replaced `.find('a')` with `within(() => { cy.getBySel('project-card-link').click() })` in projects.cy.ts — zero non-data-cy selectors remain in the test suite

## Task Commits

Each task was committed atomically:

1. **Task 1: Add missing data-cy attributes to components** - `38dc4fb` (feat)
2. **Task 2: Fix non-data-cy selector in projects.cy.ts** - `c5c6ba8` (fix)

## Files Created/Modified

- `src/components/ProjectCard.tsx` - Added `data-cy="project-card-link"` to case study Link
- `src/components/Navbar.tsx` - Added `data-cy="nav-mobile-github"` to mobile drawer GitHub anchor
- `cypress/e2e/projects.cy.ts` - Replaced `.find('a')` with `within()` + `getBySel('project-card-link')`

## Decisions Made

- `data-cy="nav-mobile-github"` gets its own distinct attribute (separate from `nav-github`) — mobile and desktop elements are independently selectable
- `within()` + `getBySel()` pattern chosen over any alternative — enforces strict data-cy-only policy and is idiomatic Cypress

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- All interactive elements in ProjectCard and Navbar now have data-cy attributes
- Entire Cypress test suite uses exclusively `getBySel()` for element selection — zero CSS/tag selectors
- lint-cypress pre-commit hook validated the cleanup (ran on commit and passed)
- Ready for continued test coverage expansion in subsequent plans

## Self-Check: PASSED

- FOUND: src/components/ProjectCard.tsx (data-cy="project-card-link" on line 24)
- FOUND: src/components/Navbar.tsx (data-cy="nav-mobile-github" on line 114)
- FOUND: cypress/e2e/projects.cy.ts (zero .find() selectors)
- FOUND: commit 38dc4fb (feat: add data-cy attributes)
- FOUND: commit c5c6ba8 (fix: replace .find('a') with getBySel)

---

_Phase: 04-tech-debt-test-quality_
_Completed: 2026-02-18_
