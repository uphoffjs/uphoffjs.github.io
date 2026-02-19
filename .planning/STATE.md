# Project State

## Current Position

- **Phase:** 04-tech-debt-test-quality
- **Current Plan:** Not started
- **Status:** v1.0 milestone complete

## Phase Overview

- Phase 01: Initial Next.js portfolio + GitHub Pages config — COMPLETE
- Phase 01.1: Cypress E2E infrastructure, CI, Prettier, ESLint, Stryker, Husky — COMPLETE
- Phase 02: Homepage, About, Projects, Links pages — COMPLETE
- Phase 03: Quality & Launch (responsive tests, accessibility, content polish) — COMPLETE
- Phase 04: Tech Debt & Test Quality — In progress (03/03 plans complete)

## Last Session

- **Stopped At:** Completed 04-03-PLAN.md — homepage/404 E2E specs and missing selector coverage
- **Timestamp:** 2026-02-18T18:08:27Z

## Decisions

- Next.js 16 with App Router, GitHub Pages static export
- Cypress E2E with cypress-axe for accessibility
- Stryker mutation testing for data/component files
- Tailwind CSS v4 dark theme, green gradient branding
- data-cy attributes on all interactive elements
- Three QA projects: E2E automation, API contract testing, legacy stabilization (showcase breadth)
- OG tags via Next.js Metadata API (no additional library)
- uphoffjs username used for GitHub/LinkedIn links (matches Navbar)
- 404 test uses click-and-verify pattern (not just href assertion)
- home-cta excluded from homepage.cy.ts to avoid duplication with navigation.cy.ts
- failOnStatusCode: false required on cy.visit() for static-export 404 pages

## Performance Metrics

| Phase                     | Plan | Duration | Tasks | Files |
| ------------------------- | ---- | -------- | ----- | ----- |
| 03-quality-launch         | 01   | ~45min   | -     | ~8    |
| 03-quality-launch         | 02   | 2min     | 5     | 4     |
| 04-tech-debt-test-quality | 03   | 1min     | 2     | 4     |
