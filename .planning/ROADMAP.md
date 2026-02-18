# Project Roadmap

## Portfolio: Jacob Uphoff — QA Engineer

A Next.js portfolio site with GitHub Pages deployment, Cypress E2E testing, and accessibility compliance.

## Phases

### Phase 01: Foundation

- Initial Next.js setup, GitHub Pages config
- Status: COMPLETE

### Phase 01.1: Testing Infrastructure

- Cypress E2E, GitHub Actions CI, Prettier, ESLint, Stryker mutation testing, Husky
- Status: COMPLETE

### Phase 02: Core Pages

- Homepage enhancement, About, Projects, Links pages with data files
- Status: COMPLETE

### Phase 03: Quality & Launch

- Visual polish, responsive design, accessibility testing, content polish

| Plan | Name                      | Status   | Commit                             |
| ---- | ------------------------- | -------- | ---------------------------------- |
| 01   | Visual Polish + E2E Tests | COMPLETE | a8994c2, 870bee1                   |
| 02   | Content Polish + Launch   | COMPLETE | e1e1daf, 031d92d, 1e078e6, 6b0fd60 |

**Phase 03 complete. Portfolio is launch-ready.**

### Phase 04: Tech Debt & Test Quality

- CI quality gate, missing data-cy attributes, homepage/404 E2E coverage
- **Goal:** Close all integration and flow gaps from v1 audit — CI gates tests before deploy, all interactive elements have data-cy attributes, and homepage/404 pages have full E2E test coverage
- **Plans:** 3 plans

| Plan | Name                                                 | Status   | Commit           |
| ---- | ---------------------------------------------------- | -------- | ---------------- |
| 01   | CI quality gate + Cypress retry removal              | COMPLETE | (04-01)          |
| 02   | Missing data-cy attributes + selector fixes          | COMPLETE | (04-02)          |
| 03   | Homepage and 404 E2E specs + existing spec additions | COMPLETE | e26e89c, fa98d5d |

**Phase 04 complete. All 16 previously untested data-cy attributes now have explicit E2E assertions.**
