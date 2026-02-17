#!/usr/bin/env bash
# Cypress Best Practices Linter
# Checks test files for anti-patterns per docs.cypress.io/app/core-concepts/best-practices

set -euo pipefail

SPEC_DIR="cypress/e2e"
EXIT_CODE=0

if [ ! -d "$SPEC_DIR" ]; then
  echo "No cypress/e2e directory found, skipping lint"
  exit 0
fi

SPEC_FILES=$(find "$SPEC_DIR" -name "*.cy.ts" -o -name "*.cy.js" 2>/dev/null)

if [ -z "$SPEC_FILES" ]; then
  echo "No Cypress spec files found, skipping lint"
  exit 0
fi

echo "Linting Cypress specs for best practices..."
echo ""

# 1. No cy.wait(Number) — use route aliases or assertions instead
WAIT_HITS=$(grep -rn 'cy\.wait([0-9]' $SPEC_DIR --include="*.cy.ts" --include="*.cy.js" 2>/dev/null || true)
if [ -n "$WAIT_HITS" ]; then
  echo "FAIL: cy.wait(Number) found — use route aliases or assertions instead"
  echo "$WAIT_HITS"
  echo ""
  EXIT_CODE=1
fi

# 2. No afterEach hooks — clean up in beforeEach instead
AFTER_HITS=$(grep -rn 'afterEach\|after(' $SPEC_DIR --include="*.cy.ts" --include="*.cy.js" 2>/dev/null || true)
if [ -n "$AFTER_HITS" ]; then
  echo "FAIL: afterEach/after hook found — use beforeEach for setup/cleanup"
  echo "$AFTER_HITS"
  echo ""
  EXIT_CODE=1
fi

# 3. No variable assignment from Cypress commands
ASSIGN_HITS=$(grep -rn 'const.*= cy\.\|let.*= cy\.\|var.*= cy\.' $SPEC_DIR --include="*.cy.ts" --include="*.cy.js" 2>/dev/null || true)
if [ -n "$ASSIGN_HITS" ]; then
  echo "FAIL: Variable assignment from cy commands — use .as() aliases instead"
  echo "$ASSIGN_HITS"
  echo ""
  EXIT_CODE=1
fi

# 4. No raw cy.get() in spec files — use getBySel/getBySelLike custom commands
RAW_GET_HITS=$(grep -rn 'cy\.get(' $SPEC_DIR --include="*.cy.ts" --include="*.cy.js" 2>/dev/null || true)
if [ -n "$RAW_GET_HITS" ]; then
  echo "FAIL: Raw cy.get() found — use cy.getBySel() or cy.getBySelLike() instead"
  echo "$RAW_GET_HITS"
  echo ""
  EXIT_CODE=1
fi

# 5. No hardcoded full URLs in cy.visit() — use baseUrl with relative paths
FULL_URL_HITS=$(grep -rn 'cy\.visit(.*http' $SPEC_DIR --include="*.cy.ts" --include="*.cy.js" 2>/dev/null || true)
if [ -n "$FULL_URL_HITS" ]; then
  echo "FAIL: Hardcoded URL in cy.visit() — use relative paths with baseUrl"
  echo "$FULL_URL_HITS"
  echo ""
  EXIT_CODE=1
fi

# 6. No cy.exec() for server management
EXEC_HITS=$(grep -rn 'cy\.exec(.*start\|cy\.exec(.*serve\|cy\.exec(.*npm' $SPEC_DIR --include="*.cy.ts" --include="*.cy.js" 2>/dev/null || true)
if [ -n "$EXEC_HITS" ]; then
  echo "FAIL: cy.exec() used for server management — start servers externally"
  echo "$EXEC_HITS"
  echo ""
  EXIT_CODE=1
fi

if [ $EXIT_CODE -eq 0 ]; then
  echo "All Cypress best practice checks passed"
fi

exit $EXIT_CODE
