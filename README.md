# Portfolio — Floating Skill Orbs

A React portfolio hero section with animated floating skill orbs.

## Project Structure

```
src/
├── index.js               # Entry point
├── index.css              # Global styles & CSS variables
├── App.jsx                # Root component
├── App.css
└── components/
    ├── Navbar/
    │   ├── Navbar.jsx     # Fixed navigation bar
    │   └── Navbar.css
    ├── Hero/
    │   ├── Hero.jsx       # Main hero section
    │   └── Hero.css
    ├── Starfield/
    │   ├── Starfield.jsx  # Animated star canvas background
    │   └── Starfield.css
    ├── OrbRing/
    │   ├── OrbRing.jsx    # Animation loop + SVG connector lines
    │   └── OrbRing.css
    └── SkillOrb/
        ├── SkillOrb.jsx   # Individual orb with hover tooltip
        └── SkillOrb.css
```

## Setup & Run

```bash
npm install
npm start
```

Then open http://localhost:3000

## How to Customize

### 1. Change your name & tagline
Open `src/components/Hero/Hero.jsx` and edit:
```jsx
<h1 className="hero__name">
  Your <span className="hero__name--accent">Name</span>
</h1>
<p className="hero__tagline">Your tagline here</p>
```

### 2. Edit skill orbs
Open `src/components/OrbRing/OrbRing.jsx` and edit the `ORBS` array:
```js
{
  id: 1,
  label:   'Your\nSkill',     // use \n for line break
  icon:    '✦',               // any symbol or emoji
  sub:     'Subtitle',
  tooltip: 'Hover description',
  color:   '#7c5cfc',         // orb text/icon color
  ...
}
```

### 3. Change nav links
Open `src/components/Navbar/Navbar.jsx` and edit `NAV_LINKS`.

### 4. Change colors
Open `src/index.css` and edit the `:root` CSS variables.
