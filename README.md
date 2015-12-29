# Items controls and item templates

Problem: Use Angular templates inside items controls (e.g. ListView)

Proposed Solution:

- Use `DynamicComponentLoader.loadIntoLocation` to instantiate "template" components. (Async)
- The initial load container must be collapsed to avoid unnecessary layouts for newly-loaded children.
- Implement the `getView`/`_prepareCell` function by returning a placeholder view and initiating a `DynamicComponentLoader` load.
- Move loaded components to the correct location in the visual tree after loading.
