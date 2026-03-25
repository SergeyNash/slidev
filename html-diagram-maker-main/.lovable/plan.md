
## Plan: CI/CD Security Pipeline Diagram in HTML

Recreate the uploaded architecture diagram as an interactive, visually polished HTML page with the following elements:

### Visual Elements
- **CI/CD block** (left) with GitLab and Jenkins logos (styled icons/text)
- **Тестовый контур** (top center) — box with Microservice and Web application sub-blocks
- **Продуктивный контур** (bottom center) — same structure
- **PT BlackBox** (right) — with DAST, Сигнатурный анализ, Эвристический анализ sub-blocks
- **Разработчик** and **Офицер ИБ** icons (bottom right)
- Numbered connection arrows (1-6) with dashed lines showing the flow
- Bottom legend explaining each numbered step

### Design
- Dark background with red accent colors matching the original
- Dashed animated or static connection lines between blocks
- Numbered red circles on the flow arrows
- Clean, modern styling faithful to the original diagram
- Responsive layout using CSS Grid/Flexbox and SVG for arrows

### Implementation
- Single `Index.tsx` page with all diagram components
- SVG or CSS-based arrows/lines connecting the blocks
- Tailwind + custom CSS for the dark theme and red accents
