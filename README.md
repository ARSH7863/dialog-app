# Dialog System Demo (Electron + React)

A desktop app demonstrating a reusable Dialog component built from 7 independent sub-components.

## Run it

```bash
npm install
npm run electron:dev
```

This starts Vite (renderer) and Electron (main process) together, with hot reload.

To build a production bundle:

```bash
npm run electron:build
```

## Architecture

```
src/components/
  Button/       - atomic button, no dependencies
  ButtonGroup/  - renders a dynamic array of Buttons
  IconText/     - icon + label pair (used for dialog titles)
  Header/       - IconText + ButtonGroup
  Content/      - generic slot, renders children
  Footer/       - optional description + ButtonGroup
  Dialog/       - pure composition of Header + Content + Footer

src/dialogs/
  InfoDialog.jsx     - 1 header button, 0 footer buttons, no description
  ConfirmDialog.jsx  - 0 header buttons, 2 footer buttons, with description
  SettingsDialog.jsx - 3 header buttons, 3 footer buttons, with description
                       + native file picker + native OS notification

electron/
  main.js       - creates the window, handles native IPC (notify, file picker)
  preload.js    - exposes a narrow `window.nativeAPI` surface via contextBridge
```

### Design notes

- **Dialog has no business logic.** It only assembles Header/Content/Footer
  and knows how to close itself when a button is flagged `closesDialog: true`.
  What each button *does* is entirely defined by the caller (Info/Confirm/Settings).
- **Button counts are just array length.** `ButtonGroup` maps over whatever
  `buttons` array it's given — Header and Footer never hardcode how many
  buttons exist, which is what makes 1-button and 3-button headers both
  "free" variations of the same component.
- **Footer description is optional** by simply checking truthiness in `Footer.jsx`.
- **Resizing** uses native CSS `resize: both` on the dialog box — meets the
  "basic implementation is sufficient" bar without a drag library.
- **Electron features demonstrated:** native file picker (`dialog.showOpenDialog`)
  and native OS notifications, both invoked from the renderer through a
  `contextBridge`-exposed API (`contextIsolation: true`, no `nodeIntegration`)
  rather than reaching into Node directly — keeps the security boundary intact.
