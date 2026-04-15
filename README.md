# Action Shell React Native App

A React Native component library showcasing floating action buttons, status indicators, control states, segmented controls, and progress indicators built with Expo.

## Getting Started

### Prerequisites

- Node.js installed
- Expo CLI (optional, installed automatically)
- iOS Simulator (Mac only) or Android Emulator

### Install Dependencies

```bash
npm install
```

### Run the App

**Start Expo Dev Server:**
```bash
npm start
```

**Run on iOS:**
```bash
npm run ios
```

**Run on Android:**
```bash
npm run android
```

**Run on Web:**
```bash
npm run web
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── FloatingActionButtons.jsx
│   │   ├── StatusIndicators.jsx
│   │   ├── ControlStates.jsx
│   │   ├── SegmentedControls.jsx
│   │   ├── ProgressLoading.jsx
│   │   └── BottomNavigation.jsx
│   ├── App.jsx
│   └── theme.js
├── index.js
├── app.json
├── package.json
└── babel.config.js
```

## Technologies

- React Native
- Expo SDK 50
- Expo Vector Icons (Material Icons & Material Community Icons)
- Expo Linear Gradient
- Custom Material Design 3 color system

## Features

- **Floating Action Buttons**: Primary, small, and extended FABs with gradients
- **Status Indicators**: Animated pill badges for different states
- **Control States**: Interactive toggles, checkboxes, and radio buttons
- **Segmented Controls**: Smooth view switching controls
- **Progress & Loading**: Progress bars and animated loading indicators
- **Bottom Navigation**: Tab-based navigation with active states

## Design System

The app uses a Material Design 3 inspired color palette with custom tokens defined in `src/theme.js`. All components are designed to be responsive and work across iOS, Android, and web platforms.
