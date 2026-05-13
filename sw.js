# HuGo PWA
## Human Rights on the Go
### Bulacan Police Provincial Human Rights Affairs Office · BULPPO, PRO 3, PNP

---

## ABOUT

HuGo (Human Rights on the Go) is a Progressive Web App (PWA) for the Bulacan Police Provincial Human Rights Affairs Office. It enables station-level PHRA officers to submit weekly and monthly human rights compliance reports, and allows super users to consolidate and generate official BULPPO reports.

---

## LOGIN CREDENTIALS (Demo mode)

| Role | Credential |
|------|-----------|
| All station passcode | `PHRA2025` |
| Super user password | `HUGO@ADMIN2025` |
| Camera inspection token | `HUGO-INSPECT-01` |
| Camera inspection token | `PHRA-CAM-2025` |
| Camera inspection token | `BULPPO-SU-99` |

---

## ALL 27 STATIONS

1ST PMFC · 2ND PMFC · ANGAT MPS · BALAGTAS MPS · BALIWAG CPS · BOCAUE MPS · BULAKAN MPS · BUSTOS MPS · CALUMPIT MPS · DRT MPS · GUIGUINTO MPS · HAGONOY MPS · MALOLOS CPS · MARILAO MPS · MEYCAUAYAN CPS · NORZAGARAY MPS · OBANDO MPS · PANDI MPS · PAOMBONG MPS · PLARIDEL MPS · PULILAN MPS · SAN ILDEFONSO MPS · SAN MIGUEL MPS · SAN RAFAEL MPS · SANTA MARIA MPS · SJDM CPS · PHQ

---

## FEATURES

### Reporting Modules (Station Users)
- **Weekly PICE** — Submit weekly activity report with action photo, Nr of PICE conducted, Nr of Participants
- **Monthly Medical** — Submit monthly medical check-up count with action photo
- **Monthly PHROs & COs** — Upload Excel file (.xlsx) with Form A and Form B
- **Monthly IDD** — 3-form guided report: natural death, maltreatment/torture, common diseases

### Master Consolidated Report (Super User Only)
- PHROs & COs submission notification dashboard with progress bar
- IDD submission notification dashboard with flag counts
- Per-station submission table (all modules)
- Generate official BULPPO format Weekly PICE consolidated report with embedded action photos
- Export capability

### AI Camera Inspection Module
- **6 inspection conditions:**
  1. Fire Extinguisher (`fire_extinguisher`) — 95% confidence required
  2. Medical Kit (`medical_kit`) — 90% confidence required
  3. Medicines (`medicine`) — 92% confidence required
  4. Log Book (`logbook`) — 88% confidence required
  5. Detainee Formation (`detainee_formation`) — 95% confidence required
  6. CCTV Camera (`mounted_cctv`) — 93% confidence required
- **Honest manual inspection** — Inspector physically checks each item
- **PASS / Photo / FAIL** buttons per condition
- **Photo evidence** captured with verdict overlay per condition
- **Inspector notes** field per condition
- **Zero AI hallucination** — results based on inspector's actual observation
- **JSON report** exported with full session data

### Access Control
- Station users see only their own station data
- 5-step access validation on every module
- Audit logging — every access attempt recorded
- Super users have full access to all stations

### Dashboard
- Station users: clean home with module shortcuts (no stat cards)
- Super users: full stats dashboard (total submissions, priority flags, PICE count, medical count)

---

## DATA ISOLATION

- Station users can only view and submit their own station's data
- Cross-station access is blocked and audit-logged
- All IDD priority flags notify super users
- All camera inspection FAIL results flag to super user
- URGENT flag on Form 2 (maltreatment/torture) — immediate super user notification

---

## PWA INSTALLATION

### Android (Chrome)
1. Open Chrome → go to your deployment URL
2. Tap ⋮ menu → "Add to Home screen"
3. Tap "Add"
4. HuGo launches fullscreen like a native app

### iPhone (Safari)
1. Open Safari → go to your deployment URL
2. Tap Share button → "Add to Home Screen"
3. Tap "Add"

---

## DEPLOY TO GITHUB PAGES

1. Create repo: **github.com/new** → name it → Public → Create
2. Upload all files from this package (including `icons/` folder)
3. Settings → Pages → Deploy from main branch → Save
4. Wait 2–3 minutes
5. Your URL: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## FILE STRUCTURE

```
HuGo/
├── index.html          ← Complete HuGo app (single file)
├── manifest.json       ← PWA manifest (icons, name, theme)
├── sw.js               ← Service worker (offline caching)
├── offline.html        ← Offline fallback page
├── README.md           ← This file
└── icons/
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    ├── icon-384.png
    └── icon-512.png
```

---

## TECHNICAL STACK

- **Frontend:** Vanilla HTML/CSS/JavaScript — no frameworks
- **Icons:** Tabler Icons (CDN)
- **PWA:** Service worker + Web App Manifest
- **Storage:** In-memory (session) — connect Supabase for persistence
- **Camera:** WebRTC (navigator.mediaDevices)
- **Offline:** Service worker caches all assets

---

## OFFICIAL REPORT FORMAT

Generated master copy follows exact BULPPO format:

> **"Bulacan PPO: Human Rights Reminders for the Month of [Month] [Year]"**

Table columns: Station/Units | Action Photo | Nr of PICE Conducted | No. of Participants

Footer: *"Bagong PNP para sa Bagong Pilipinas; Serbisyong Mabilis, Tapat, at Nararamdaman"*

Header/Footer: **CONFIDENTIAL**

---

## DEVELOPED FOR

Bulacan Police Provincial Human Rights Affairs Office (BULPPO)
Police Regional Office 3 (PRO 3)
Philippine National Police (PNP)

