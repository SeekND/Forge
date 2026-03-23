# ⬡ FORGE

A crafting companion for **Star Citizen's RediMake Item Fabricator** system. Browse blueprints, plan builds, manage work orders, and coordinate material requests with your org.

Live site: [seeknd.github.io/Forge](https://seeknd.github.io/Forge)

---

## Features

### Blueprints
Browse all obtainable craftable items — armor sets, weapons, undersuits, flightsuits, and backpacks. Filter by weight class, role, piece type, weapon kind, damage type, and lock status. Search across names, materials, and manufacturers.

Each item shows its full recipe with material costs, slot stats (what each material contributes to the item), and craft time. Mission source icons indicate where each blueprint drops — hover to see mission names and drop probabilities.

### Unlock Tracking
Track which blueprints you've unlocked. Starter blueprints (Field Recon set, P4-AR, S-38) are unlocked by default. Lock and unlock blueprints as you acquire them — your state persists in local storage.

### Set Planner
Build a complete armor loadout by selecting pieces for each slot. See the combined material cost across all pieces, then add the full set to a work order or copy the breakdown as text.

### Inventory
Enter your current material stock with quality levels. The system shows what you can fully craft, what you're close on, and what you're missing — with got/need breakdowns per recipe slot.

### Work Orders
Queue items with quantities and quality assignments per material slot. Quality can be set as a request (Q1000 Maximum, Q500 Minimum) or matched to your inventory batches. Work orders support multiple named tabs, per-item quantities, rename, delete, move between orders, and mark-as-crafted with automatic inventory deduction.

**Order Request** — copies the full work order to clipboard in a Discord-friendly format: item breakdown with slot-level material and quality detail, material totals, craft time, and a shareable link that imports the order (with qualities) into another player's calculator.

**Ore Request** — copies a miner-focused summary: materials in SCU with quality requirements, and a direct link to the [mining site](https://seeknd.github.io/Strata) pre-loaded with the needed ores. Toggle between *All* materials or *Remaining* (subtracts your inventory) before copying.

### Materials Reference
All crafting materials with their raw ore source, mining method (ship, ROC, hand), recipe slot usage, total demand across all blueprints, and links to mining info.

---

## Data

The site loads a single `crafting_data.json` at startup containing all blueprints, recipes, materials, and mission source data for the current patch. This file is updated each patch.

All user data (unlocked blueprints, inventory, work orders, settings) is stored in your browser's local storage — nothing is sent to a server.

---

## Tech

Pure static site — HTML, CSS, vanilla JS. No frameworks, no build tools, no server. Hosted on GitHub Pages.

---

## Related

- [Strata Mining](https://seeknd.github.io/Strata) — ore finding, route planning, and refinery optimization
- [Star Citizen](https://robertsspaceindustries.com) — the game itself

---

## Disclaimer

This site is not endorsed by or affiliated with Cloud Imperium Games or Roberts Space Industries. All game content and materials are copyright Cloud Imperium Rights LLC and Cloud Imperium Rights Ltd. Star Citizen®, Squadron 42®, Roberts Space Industries®, and Cloud Imperium® are registered trademarks of Cloud Imperium Rights LLC.
